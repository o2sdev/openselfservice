import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Carts, Checkout } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-shipping-address.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';
const CHECKOUT_API_URL = '/checkout';

export const checkoutShippingAddress = (sdk: Sdk) => ({
    blocks: {
        getCheckoutShippingAddress: (
            query: Request.GetCheckoutShippingAddressBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CheckoutShippingAddressBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
    carts: {
        getCart: (
            cartId: string,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CARTS_API_URL}/${cartId}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
            }),
    },
    checkout: {
        setAddresses: (
            cartId: string,
            body: Checkout.Request.SetAddressesBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CHECKOUT_API_URL}/${cartId}/addresses`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
        setShippingMethod: (
            cartId: string,
            body: Checkout.Request.SetShippingMethodBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CHECKOUT_API_URL}/${cartId}/shipping-method`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
        getShippingOptions: (
            cartId: string,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Checkout.Model.ShippingOptions> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CHECKOUT_API_URL}/${cartId}/shipping-options`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
            }),
    },
});
