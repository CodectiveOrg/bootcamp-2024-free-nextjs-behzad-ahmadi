import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { parsBody, safeApiCall } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';
import { SignInDTO } from '@/types/dto/auth';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const [error, body] = await parsBody<SignInDTO>(req);
    console.log('body', body);
    if (error !== null) return NextResponse.json({ error }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user || user.password !== body.password)
      return NextResponse.json(
        { error: 'ایمیل یا پسورد اشتباه است' },
        { status: 401 },
      );

    return NextResponse.json(
      { data: null, message: 'خوش آمدید' },
      { status: 200 },
    );
  });
}
