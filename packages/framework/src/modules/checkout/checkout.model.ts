import * as Carts from '../carts';
import * as Orders from '../orders';

import { Address, Price } from '@/utils/models';

/** Checkout summary snapshot for a cart before placing an order. */
export class CheckoutSummary {
    cart!: Carts.Model.Cart;
    shippingAddress!: Address.Address;
    billingAddress!: Address.Address;
    shippingMethod!: Orders.Model.ShippingMethod;
    paymentMethod!: Carts.Model.PaymentMethod;
    totals!: {
        subtotal: Price.Price;
        shipping: Price.Price;
        tax: Price.Price;
        discount: Price.Price;
        total: Price.Price;
    };
    notes?: string;
    /** Customer email, typically required for guest checkout. */
    email?: string;
}

/** Available shipping options for a checkout cart. */
export class ShippingOptions {
    data!: Orders.Model.ShippingMethod[];
    total!: number;
}

/** Order placement result with optional payment redirect handoff. */
export class PlaceOrderResponse {
    order!: Orders.Model.Order;
    /** Redirect target for providers that require external payment flow. */
    paymentRedirectUrl?: string;
}
