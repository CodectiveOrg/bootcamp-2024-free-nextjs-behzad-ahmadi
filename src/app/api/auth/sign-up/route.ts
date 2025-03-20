import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { parsBody, safeApiCall } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';
import { SignUpDTO } from '@/types/dto/auth';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const [error, body] = await parsBody<SignUpDTO>(req);

    if (error !== null) return NextResponse.json({ error }, { status: 400 });

    const foundEmail = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (foundEmail)
      return NextResponse.json({ error: 'ایمیل تکراری است' }, { status: 400 });

    await prisma.user.create({ data: { ...body, username: body.email } });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
