import { getSharedSdk } from '@o2s/utils.frontend/sdk';

import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { extendSdk } from '@o2s/framework/sdk';

import { Notifications } from '@o2s/integrations.mocked/sdk';

import { cart } from '@/api/modules/cart';
import { loginPage } from '@/api/modules/login-page';
import { notFoundPage } from '@/api/modules/not-found-page';
import { organizations } from '@/api/modules/organizations';
import { page } from '@/api/modules/page';

const internalSdk = getSharedSdk();

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
