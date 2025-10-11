/**
 * Next.js Middleware
 * Handles subdomain routing for apps.khaderx.com and *.apps.khaderx.com
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    // Skip middleware for API routes, static files, and Next.js internals
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/static') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Handle subdomain routing
    // Example: vocab.apps.khaderx.com -> /tma/vocab
    const appSubdomain = hostname.split('.')[0];

    // If on apps.khaderx.com (no subdomain), show apps hub
    if (hostname.startsWith('apps.') && !hostname.includes('.apps.')) {
        return NextResponse.rewrite(new URL('/(apps-hub)', request.url));
    }

    // If on app subdomain (e.g., vocab.apps.khaderx.com), route to TMA
    if (hostname.includes('.apps.khaderx.com')) {
        const appName = appSubdomain;
        return NextResponse.rewrite(new URL(`/tma/${appName}${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
    ],
};
