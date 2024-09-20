import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  console.count()

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // ログインページへのアクセスで、すでにトークンがある場合は/homeにリダイレクト
  if (request.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    token?.role !== 'ADMIN'
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // /homeや他の保護されたルートへのアクセスで、トークンがない場合は/loginにリダイレクト
  if (!token && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
