import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get('loggedIn');
    if (!verify && req.nextUrl.pathname.startsWith('/ticket')) {
        return NextResponse.redirect((new URL('/login', req.url)));
    }
    return NextResponse.next();
}
