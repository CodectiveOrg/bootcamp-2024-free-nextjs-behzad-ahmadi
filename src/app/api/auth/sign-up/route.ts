import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { safeApiCall } from '@/lib/apiHelper';
import { ApiResponse } from '@/types/api.response.type';

export async function POST(req: NextRequest): Promise<ApiResponse<null>> {
  return await safeApiCall(async (): Promise<ApiResponse<null>> => {
    const body = await req.json();

    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
