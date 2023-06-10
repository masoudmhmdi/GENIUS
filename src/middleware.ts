import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.has('accessToken');

  if (cookie) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/cart',
    '/admin/orders',
    '/admin/products',
    '/admin/inventory',
  ],
};
