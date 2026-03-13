/**
 * MSW handlers for cart and checkout API endpoints.
 * Used by cart and checkout block stories.
 * Path patterns match /api/carts/* and /api/checkout/* (NEXT_PUBLIC_API_URL base).
 */
import { HttpResponse, http } from 'msw';

import {
    MOCK_CART,
    MOCK_CHECKOUT_SUMMARY,
    MOCK_EMPTY_CART,
    MOCK_PAYMENT_PROVIDERS,
    MOCK_PLACE_ORDER_RESPONSE,
    MOCK_SHIPPING_OPTIONS,
} from '../data/cart-data';

/** Returns full cart for Default stories, empty cart for EmptyCart (cartId contains 'empty') */
const getCartResponse = (url: string) => {
    const cartIdMatch = url.match(/\/carts\/([^/]+)/);
    const cartId = cartIdMatch?.[1] ?? '';
    return cartId.includes('empty') ? MOCK_EMPTY_CART : MOCK_CART;
};

// Match /api/carts/:id (GET), /api/carts/:id/items/:itemId (PATCH/DELETE), /api/carts/:id/promotions (POST/DELETE)
const CART_PATH = /\/api\/carts\/[^/]+/;
const CHECKOUT_SUMMARY_PATH = /\/api\/checkout\/[^/]+\/summary/;
const CHECKOUT_PLACE_ORDER_PATH = /\/api\/checkout\/[^/]+\/place-order/;
const CHECKOUT_SHIPPING_OPTIONS_PATH = /\/api\/checkout\/[^/]+\/shipping-options/;
const CHECKOUT_ADDRESSES_PATH = /\/api\/checkout\/[^/]+\/addresses/;
const CHECKOUT_SHIPPING_METHOD_PATH = /\/api\/checkout\/[^/]+\/shipping-method/;
const CHECKOUT_PAYMENT_PATH = /\/api\/checkout\/[^/]+\/payment/;
const PAYMENTS_PROVIDERS_PATH = /\/api\/payments\/providers/;

export const cartHandlers = [
    http.get(CART_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
    http.patch(CART_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
    http.delete(CART_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
    http.post(CART_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
];

export const checkoutHandlers = [
    http.get(CHECKOUT_SUMMARY_PATH, () => HttpResponse.json(MOCK_CHECKOUT_SUMMARY)),
    http.post(CHECKOUT_PLACE_ORDER_PATH, () => HttpResponse.json(MOCK_PLACE_ORDER_RESPONSE)),
    http.get(CHECKOUT_SHIPPING_OPTIONS_PATH, () => HttpResponse.json(MOCK_SHIPPING_OPTIONS)),
    http.post(CHECKOUT_ADDRESSES_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
    http.post(CHECKOUT_SHIPPING_METHOD_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
    http.post(CHECKOUT_PAYMENT_PATH, ({ request }) => HttpResponse.json(getCartResponse(request.url))),
];

export const paymentsHandlers = [http.get(PAYMENTS_PROVIDERS_PATH, () => HttpResponse.json(MOCK_PAYMENT_PROVIDERS))];

export const cartAndCheckoutHandlers = [...cartHandlers, ...checkoutHandlers, ...paymentsHandlers];
