/**
 * Locale configuration, kept apart from the navigation helpers in `routing.ts`.
 *
 * A module that only needs to know the locales — page metadata, for one — should not pull in
 * `next/navigation` through `createNavigation` to get them.
 */
export const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string;
export const SUPPORTED_LOCALES = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(',') ?? [];
export const LOGIN_PATH = '/login';
