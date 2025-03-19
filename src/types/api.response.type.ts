import { NextResponse } from 'next/server';

export type FetchData<TData> =
  | { data: TData; error?: undefined }
  | { data?: undefined; error: string };

export type ApiResponse<TData> = NextResponse<FetchData<TData>>;
