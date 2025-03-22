import { NextRequest, NextResponse } from 'next/server';
import { isSignedIn } from '@/lib/apiHelper';

const protectedRoutes = ['/dashboard'];
const notProtectedRoutes = ['/auth/sign-in', '/auth/sign-up'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isOnProtectedRoutes = protectedRoutes.includes(path);
  const isOnNotProtectedRoutes = notProtectedRoutes.includes(path);

  if (await isSignedIn(req)) {
    if (isOnNotProtectedRoutes) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  } else {
    if (isOnProtectedRoutes) {
      return NextResponse.redirect(new URL('/auth/sign-in', req.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
