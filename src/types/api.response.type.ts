import { NextResponse } from 'next/server';

export type FetchData<TData> =
  | { data: TData; message?: string; error?: undefined }
  | { data?: undefined; error: string | object };

export type ApiResponse<TData> = NextResponse<FetchData<TData>>;
