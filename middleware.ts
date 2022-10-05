import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    if (url.pathname === '/*') {
        url.pathname = '/'
        return NextResponse.redirect(url)
    }
}

export default middleware