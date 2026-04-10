// this unused import is necessary for TypeScript to properly resolve API methods
import { env } from 'next-runtime-env';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { paymentsSummary } from './payments-summary';

const API_URL =
    (typeof window === 'undefined' ? process.env.API_URL_INTERNAL : env('NEXT_PUBLIC_API_URL')) ||
    env('NEXT_PUBLIC_API_URL');

const internalSdk = getSdk({
    apiUrl: API_URL!,
    logger: {
        // @ts-expect-error missing types
        level: process.env.LOG_LEVEL,
        // @ts-expect-error missing types
        format: process.env.LOG_FORMAT,
        colorsEnabled: process.env.LOG_COLORS_ENABLED === 'true',
    },
});

export const sdk = extendSdk(internalSdk, {
    blocks: {
        getPaymentsSummary: paymentsSummary(internalSdk).blocks.getPaymentsSummary,
    },
});
