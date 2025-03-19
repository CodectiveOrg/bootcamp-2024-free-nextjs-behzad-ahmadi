import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api.response.type';

type ParsBodyResult<T> = [error: null, data: T] | [error: string, data: null];

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
