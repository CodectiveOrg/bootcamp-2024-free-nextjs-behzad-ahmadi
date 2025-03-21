import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api.response.type';
import { cookies } from 'next/headers';
import * as jose from 'jose';

type ParsBodyResult<T> = [error: null, data: T] | [error: string, data: null];

const alg = 'HS256';
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function parsBody<T>(
  req: NextRequest,
): Promise<ParsBodyResult<T>> {
  try {
    const body = await req.json();
    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'SyntaxError') return ['body نادرست است.', null];
      return [error.message, null];
    }

    if (typeof error === 'string') return [error, null];

    return ['خطای غیر منتطره', null];
  }
}

export async function safeApiCall<T>(
  callback: () => Promise<ApiResponse<T>>,
): Promise<ApiResponse<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'خطای غیر منتطره' }, { status: 500 });
  }
}

export async function setAuthToken(): Promise<void> {
  const cookieStore = cookies();

  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('3d')
    .sign(secret);

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 60 * 60 * 24 * 3,
  });
}

export async function removeAuthToken(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete(process.env.TOKEN_KEY!);
}

export async function isSignedIn(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get(process.env.TOKEN_KEY!)?.value;

  if (!token) return false;

  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch (error) {
    console.log('token error', error);
    return false;
  }
}
