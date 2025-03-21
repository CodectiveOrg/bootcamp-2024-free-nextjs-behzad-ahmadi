import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { parsBody, safeApiCall } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';
import { hashPassword } from '@/lib/bcrypt';
import { Prisma } from '@prisma/client';
import { validateSignUp } from '@/app/api/auth/sign-up/validation';
import { SignUpDTO } from '@/types/dto/auth';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const [parseError, body] = await parsBody<SignUpDTO>(req);
    if (parseError !== null)
      return NextResponse.json(
        { error: 'خطا در پردازش درخواست' },
        { status: 400 },
      );

    const validationErrors = validateSignUp(body);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({ error: validationErrors }, { status: 400 });
    }

    const sanitizedEmail = body.email.trim().toLowerCase();

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: sanitizedEmail }, { username: sanitizedEmail }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: {
            [existingUser.email === sanitizedEmail ? 'email' : 'username']:
              'این ایمیل یا نام کاربری قبلاً استفاده شده است',
          },
        },
        { status: 409 },
      );
    }

    const userData: Prisma.UserCreateInput = {
      email: sanitizedEmail,
      username: sanitizedEmail,
      password: await hashPassword(body.password),
    };

    await prisma.user.create({
      data: userData,
    });

    return NextResponse.json(
      { data: null, message: 'ثبت نام با موفقیت انجام شد' },
      { status: 201 },
    );
  });
}

export const runtime = 'edge';
