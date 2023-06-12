// middleware.ts

import { NextResponse } from 'next/server'

export function middleware(request: Request) {
    // create new request headers
    const requestHeaders = new Headers(request.headers)

    // create url
    const url = new URL(request.url)

    // set request url
    requestHeaders.set('x-url', url.href)

    // set base url
    requestHeaders.set('x-base-url', url.origin)

    // ------------------------------------------------------------------------

    return NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders
        }
    })

    //
}

// EOF
