// these unused imports are necessary for TypeScript to properly resolve API methods
import { env } from 'next-runtime-env';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@o2s/utils.api-harmonization';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Carts, Checkout } from '@o2s/framework/modules';
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { checkoutShippingAddress } from './checkout-shipping-address';

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
        getCheckoutShippingAddress: checkoutShippingAddress(internalSdk).blocks.getCheckoutShippingAddress,
    },
    carts: {
        getCart: checkoutShippingAddress(internalSdk).carts.getCart,
    },
    checkout: {
        setAddresses: checkoutShippingAddress(internalSdk).checkout.setAddresses,
        setShippingMethod: checkoutShippingAddress(internalSdk).checkout.setShippingMethod,
        getShippingOptions: checkoutShippingAddress(internalSdk).checkout.getShippingOptions,
    },
});
