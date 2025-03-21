import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { parsBody, safeApiCall, setAuthToken } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';
import { SignUpDTO } from '@/types/dto/auth';
import { hashPassword } from '@/lib/bcrypt';
import { validateSignUp } from '@/app/api/auth/sign-up/validation';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const [error, body] = await parsBody<SignUpDTO>(req);

    if (error !== null) return NextResponse.json({ error }, { status: 400 });

    const validationErrors = validateSignUp(body);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({ error: validationErrors }, { status: 400 });
    }

    const sanitizedEmail = body.email.trim().toLowerCase();
    const foundEmail = await prisma.user.findUnique({
      where: { email: sanitizedEmail },
    });

    if (foundEmail)
      return NextResponse.json({ error: 'ایمیل تکراری است' }, { status: 400 });

    await prisma.user.create({
      data: {
        email: sanitizedEmail,
        username: sanitizedEmail,
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
