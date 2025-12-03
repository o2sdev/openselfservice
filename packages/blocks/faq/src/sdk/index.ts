// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@o2s/utils.api-harmonization';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { faq } from './faq';

const API_URL =
    (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error('API_URL is required. Please set NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_URL_INTERNAL.');
}

const internalSdk = getSdk({
    apiUrl: API_URL,
    logger: {
        // @ts-expect-error missing types
        level: process.env.NEXT_PUBLIC_LOG_LEVEL,
        // @ts-expect-error missing types
        format: process.env.NEXT_PUBLIC_LOG_FORMAT,
        colorsEnabled: process.env.NEXT_PUBLIC_LOG_COLORS_ENABLED === 'true',
    },
});

export const sdk = extendSdk(internalSdk, {
    blocks: {
        getFaq: faq(internalSdk).blocks.getFaq,
    },
});
