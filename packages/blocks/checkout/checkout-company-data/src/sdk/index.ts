// these unused imports are necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@o2s/utils.api-harmonization';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Carts, Checkout } from '@o2s/framework/modules';
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { checkoutCompanyData } from './checkout-company-data';

const API_URL =
    (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;

const internalSdk = getSdk({
    apiUrl: API_URL!,
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
        getCheckoutCompanyData: checkoutCompanyData(internalSdk).blocks.getCheckoutCompanyData,
    },
    carts: {
        getCart: checkoutCompanyData(internalSdk).carts.getCart,
    },
    checkout: {
        setAddresses: checkoutCompanyData(internalSdk).checkout.setAddresses,
    },
});
