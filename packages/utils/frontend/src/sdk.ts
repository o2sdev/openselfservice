import { type Sdk, getSdk, toLoggerConfig } from '@o2s/framework/sdk';
import { env } from 'next-runtime-env';

/**
 * The API url as the frontend sees it: server-side rendering talks to the API directly, the browser
 * goes through the public url, which `next-runtime-env` resolves at runtime rather than at build
 * time.
 */
const resolveApiUrl = () =>
    (typeof window === 'undefined' ? process.env.API_URL_INTERNAL : env('NEXT_PUBLIC_API_URL')) ||
    env('NEXT_PUBLIC_API_URL');

let shared: Sdk | undefined;

/**
 * The SDK instance the blocks share. Every block used to build one of its own, which meant one
 * `ofetch` client and one logger per block; this one is built on first use and reused afterwards,
 * per process on the server and per bundle in the browser.
 *
 * A block extends it with its own methods instead of replacing it: `extendSdk` copies the instance,
 * so what one block adds stays invisible to the others.
 *
 * ```ts
 * const sdk = getSharedSdk();
 * export const blockSdk = extendSdk(sdk, ticketList(sdk));
 * ```
 */
export const getSharedSdk = (): Sdk =>
    (shared ??= getSdk({
        apiUrl: resolveApiUrl()!,
        logger: toLoggerConfig({
            level: process.env.LOG_LEVEL,
            format: process.env.LOG_FORMAT,
            colorsEnabled: process.env.LOG_COLORS_ENABLED,
        }),
    }));
