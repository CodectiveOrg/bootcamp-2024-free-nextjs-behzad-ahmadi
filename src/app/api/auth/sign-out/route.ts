import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api.response.type';
import { removeAuthToken, safeApiCall } from '@/lib/apiHelper';

export async function GET(): Promise<ApiResponse<null>> {
  return safeApiCall(async () => {
    await removeAuthToken();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}

export const runtime = 'nodejs';
