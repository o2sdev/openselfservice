// these unused imports are necessary for TypeScript to properly resolve API methods
import { env } from 'next-runtime-env';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@o2s/utils.api-harmonization';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Carts } from '@o2s/framework/modules';
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { productDetails } from './product-details';

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
        getProductDetails: productDetails(internalSdk).blocks.getProductDetails,
    },
    cart: {
        addCartItem: productDetails(internalSdk).cart.addCartItem,
    },
});
