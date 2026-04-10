// these unused imports are necessary for TypeScript to properly resolve API methods
import { env } from 'next-runtime-env';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@o2s/utils.api-harmonization';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Carts, Checkout, Payments } from '@o2s/framework/modules';
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { checkoutBillingPayment } from './checkout-billing-payment';

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
        getCheckoutBillingPayment: checkoutBillingPayment(internalSdk).blocks.getCheckoutBillingPayment,
    },
    carts: {
        getCart: checkoutBillingPayment(internalSdk).carts.getCart,
    },
    checkout: {
        setPayment: checkoutBillingPayment(internalSdk).checkout.setPayment,
    },
    payments: {
        getProviders: checkoutBillingPayment(internalSdk).payments.getProviders,
    },
});
