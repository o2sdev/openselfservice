import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

import { routing } from '@/i18n';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
    // Apply the internationalization middleware
    const response = intlMiddleware(request);

    return response;
}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
