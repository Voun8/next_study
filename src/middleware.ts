import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log(request.nextUrl.pathname,'🐂');
// }

// export const config = {
//   matcher: ['/about/:path*','/dashboard/:path*'],
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)',],
// }

export function middleware(request: NextRequest) { 
  if(request.nextUrl.pathname.startsWith('/about')){
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }
  if(request.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  }
}