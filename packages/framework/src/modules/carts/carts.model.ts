import { ShippingMethod } from '../orders/orders.model';
import { Product } from '../products/products.model';

import { Address, Pagination, Price, Unit } from '@/utils/models';

export type PromotionType = 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';

export class PaymentMethod {
    id!: string;
    name!: string;
    description?: string;
}

export class Promotion {
    id!: string;
    code!: string;
    name?: string;
    description?: string;
    type?: PromotionType;
    value?: string;
}

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
    email?: string; // For guest checkout
    paymentSessionId?: string; // Reference to active payment session
}

export type Carts = Pagination.Paginated<Cart>;
