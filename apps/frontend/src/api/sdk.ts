// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Modules } from '@o2s/api-harmonization';

// this unused import is necessary for TypeScript to properly resolve API methods

import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { Notifications } from '@o2s/integrations.mocked/sdk';

import { cart } from '@/api/modules/cart';
import { loginPage } from '@/api/modules/login-page';
import { notFoundPage } from '@/api/modules/not-found-page';
import { organizations } from '@/api/modules/organizations';
import { page } from '@/api/modules/page';

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

const getCurrentCart: (headers: AppHeaders, authorization?: string) => Promise<Carts.Model.Cart> = (
    headers,
    authorization,
) => cart(internalSdk).cart.getCurrentCart(headers, authorization);

const getCart: (cartId: string, headers: AppHeaders, authorization?: string) => Promise<Carts.Model.Cart> = (
    cartId,
    headers,
    authorization,
) => cart(internalSdk).cart.getCart(cartId, headers, authorization);

export const sdk = extendSdk(internalSdk, {
    notifications: {
        ...Notifications.extend(internalSdk),
    },
    cart: {
        getCurrentCart,
        getCart,
    },
    modules: {
        getInit: page(internalSdk).modules.getInit,
        getPage: page(internalSdk).modules.getPage,
        getLoginPage: loginPage(internalSdk).modules.getLoginPage,
        getNotFoundPage: notFoundPage(internalSdk).modules.getNotFoundPage,
        getCustomers: organizations(internalSdk).modules.getCustomers,
    },
});
