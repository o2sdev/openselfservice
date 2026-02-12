import * as Carts from '../carts';
import * as Orders from '../orders';

import { Address, Price } from '@/utils/models';

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
    email?: string; // For guest checkout
}

export class ShippingOptions {
    data!: Orders.Model.ShippingMethod[];
    total!: number;
}

export class PlaceOrderResponse {
    order!: Orders.Model.Order;
    paymentRedirectUrl?: string; // For redirect-based payment providers
}
