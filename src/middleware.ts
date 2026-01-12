import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value
  if (request.nextUrl.pathname !== '/login' && !token) { 
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
}