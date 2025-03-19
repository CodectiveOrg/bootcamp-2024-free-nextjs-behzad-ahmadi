import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api.response.type';

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
