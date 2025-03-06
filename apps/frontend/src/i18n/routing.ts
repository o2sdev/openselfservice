import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string;
export const SUPPORTED_LOCALES = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(',') ?? [];

export const routing = defineRouting({
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    pathnames: {
        '/login': {
            en: '/sign-in',
            de: '/einloggen',
            pl: '/logowanie',
        },
    } as { [key: string]: { [locale: string]: string } },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname: _usePathname, useRouter, getPathname } = createNavigation(routing);

// for some reason `_usePathname` is typed to return `string | number` when `pathnames` is manually cast
export const usePathname = _usePathname as () => string;
