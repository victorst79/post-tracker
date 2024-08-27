import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from 'cookies-next';

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const userCookie = getCookie('user', { req, res });
    return res;
}