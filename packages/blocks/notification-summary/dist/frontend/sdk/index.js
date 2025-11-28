import { extendSdk, getSdk } from '@o2s/framework/sdk';
import { notificationSummary } from './notification-summary';
const API_URL = (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;
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
        getNotificationSummary: notificationSummary(internalSdk).blocks.getNotificationSummary,
    },
});
