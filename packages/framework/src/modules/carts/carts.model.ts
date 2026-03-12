import { ShippingMethod } from '../orders/orders.model';
import { Product } from '../products/products.model';

import { Address, Pagination, Price, Unit } from '@/utils/models';

/** Promotion behavior type applied to cart totals. */
export type PromotionType = 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';

/** Selected payment method for a cart. */
export class PaymentMethod {
    id!: string;
    name!: string;
    description?: string;
}

/** Promotion/coupon entry applied to a cart. */
export class Promotion {
    id!: string;
    code!: string;
    name?: string;
    description?: string;
    type?: PromotionType;
    value?: string;
}

/** Single line item inside a cart. */
export class CartItem {
    id!: string;
    sku!: string;
    quantity!: number;
    price!: Price.Price;
    subtotal?: Price.Price;
    discountTotal?: Price.Price;
    total!: Price.Price;
    unit?: Unit.Unit;
    currency!: Price.Currency;
    product!: Product;
    metadata?: Record<string, unknown>;
}

/** Cart aggregate used across cart and checkout flows. */
export class Cart {
    id!: string;
    customerId?: string;
    name?: string;
    createdAt!: string;
    updatedAt!: string;
    expiresAt?: string;
    regionId?: string;
    currency!: Price.Currency;
    items!: {
        data: CartItem[];
        total: number;
    };
    subtotal?: Price.Price;
    discountTotal?: Price.Price;
    taxTotal?: Price.Price;
    shippingTotal?: Price.Price;
    total!: Price.Price;
    shippingAddress?: Address.Address;
    billingAddress?: Address.Address;
    shippingMethod?: ShippingMethod;
    paymentMethod?: PaymentMethod;
    promotions?: Promotion[];
    metadata?: Record<string, unknown>;
    notes?: string;
    /** Customer email, typically required for guest checkout. */
    email?: string;
    /** Identifier of active payment session linked to cart. */
    paymentSessionId?: string;
}

/** Paginated cart list. */
export type Carts = Pagination.Paginated<Cart>;
