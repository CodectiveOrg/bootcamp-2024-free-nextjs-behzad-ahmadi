import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { parsBody, safeApiCall, setAuthToken } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';
import { SignUpDTO } from '@/types/dto/auth';
import { hashPassword } from '@/lib/bcrypt';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const [error, body] = await parsBody<SignUpDTO>(req);

    if (error !== null) return NextResponse.json({ error }, { status: 400 });

    const foundEmail = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (foundEmail)
      return NextResponse.json({ error: 'ایمیل تکراری است' }, { status: 400 });

    await prisma.user.create({
      data: {
        ...body,
        username: body.email,
        password: await hashPassword(body.password),
      },
    });

    await setAuthToken();

    return NextResponse.json(
      { data: null, message: 'ثبتنام با موفقیت انجام شد' },
      { status: 201 },
    );
  });
}
