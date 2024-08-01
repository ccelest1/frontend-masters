import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // home redirect via every req in browser
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/about/:path*',
}

/*

    // route todo path to home

    import {NextResponse} from 'next/server'
    export const middleware = (request) => {
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }

    export default middleware
    export const config = {
        matcher: ['/todo'],
    }
*/
