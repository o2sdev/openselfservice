import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ShippingMethod } from '../orders/orders.model';
import { Product } from '../products/products.model';

import { Address, Pagination, Price, Unit } from '@/utils/models';

/** Allowed promotion discount kinds (OpenAPI + TS union). */
export const PROMOTION_TYPE_VALUES = ['PERCENTAGE', 'FIXED_AMOUNT', 'FREE_SHIPPING'] as const;
export type PromotionType = (typeof PROMOTION_TYPE_VALUES)[number];

/** Selected payment method for a cart. */
export class PaymentMethod {
    @ApiProperty({ description: 'Payment method identifier' })
    id!: string;

    @ApiProperty({ description: 'Payment method display name' })
    name!: string;

    @ApiPropertyOptional({ description: 'Payment method description' })
    description?: string;
}

/** Promotion/coupon entry applied to a cart. */
export class Promotion {
    @ApiProperty({ description: 'Promotion identifier' })
    id!: string;

    @ApiProperty({ description: 'Promotion/coupon code' })
    code!: string;

    @ApiPropertyOptional({ description: 'Promotion display name' })
    name?: string;

    @ApiPropertyOptional({ description: 'Promotion description' })
    description?: string;

    @ApiPropertyOptional({ description: 'Promotion discount type', enum: PROMOTION_TYPE_VALUES })
    type?: PromotionType;

    @ApiPropertyOptional({ description: 'Discount value (amount or percentage)' })
    value?: string;
}

/** Single line item inside a cart. */
export class CartItem {
    @ApiProperty({ description: 'Cart item identifier' })
    id!: string;

    @ApiProperty({ description: 'Product SKU' })
    sku!: string;

    @ApiProperty({ description: 'Item quantity' })
    quantity!: number;

    @ApiProperty({ description: 'Unit price' })
    price!: Price.Price;

    @ApiPropertyOptional({ description: 'Line subtotal before discounts' })
    subtotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total discount for this line' })
    discountTotal?: Price.Price;

    @ApiProperty({ description: 'Line total including discounts' })
    total!: Price.Price;

    @ApiPropertyOptional({ description: 'Unit of measure' })
    unit?: Unit.Unit;

    @ApiProperty({ description: 'Currency code' })
    currency!: Price.Currency;

    @ApiProperty({ description: 'Product details', type: () => Product })
    product!: Product;

    @ApiPropertyOptional({ description: 'Item-level metadata', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

/** Cart items wrapper with total count. */
export class CartItems {
    @ApiProperty({ description: 'Array of cart items', type: () => [CartItem] })
    data!: CartItem[];

    @ApiProperty({ description: 'Total number of items in cart' })
    total!: number;
}

/** Cart aggregate used across cart and checkout flows. */
export class Cart {
    @ApiProperty({ description: 'Unique cart identifier' })
    id!: string;

    @ApiPropertyOptional({ description: 'Associated customer identifier' })
    customerId?: string;

    @ApiPropertyOptional({ description: 'Cart display name' })
    name?: string;

    @ApiProperty({ description: 'Cart creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiPropertyOptional({ description: 'Cart expiration timestamp in ISO 8601 format' })
    expiresAt?: string;

    @ApiPropertyOptional({ description: 'Region identifier for pricing/shipping' })
    regionId?: string;

    @ApiProperty({ description: 'Cart currency code' })
    currency!: Price.Currency;

    @ApiProperty({ description: 'Cart line items', type: () => CartItems })
    items!: CartItems;

    @ApiPropertyOptional({ description: 'Cart subtotal before discounts and shipping' })
    subtotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total discount amount' })
    discountTotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total tax amount' })
    taxTotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total shipping cost' })
    shippingTotal?: Price.Price;

    @ApiProperty({ description: 'Cart grand total' })
    total!: Price.Price;

    @ApiPropertyOptional({ description: 'Shipping address' })
    shippingAddress?: Address.Address;

    @ApiPropertyOptional({ description: 'Billing address' })
    billingAddress?: Address.Address;

    @ApiPropertyOptional({ description: 'Selected shipping method', type: () => ShippingMethod })
    shippingMethod?: ShippingMethod;

    @ApiPropertyOptional({ description: 'Selected payment method', type: () => PaymentMethod })
    paymentMethod?: PaymentMethod;

    @ApiPropertyOptional({ description: 'Applied promotions/coupons', type: () => [Promotion] })
    promotions?: Promotion[];

    @ApiPropertyOptional({ description: 'Cart-level metadata', additionalProperties: true })
    metadata?: Record<string, unknown>;

    @ApiPropertyOptional({ description: 'Customer notes' })
    notes?: string;

    @ApiPropertyOptional({ description: 'Customer email for guest checkout' })
    email?: string;

    @ApiPropertyOptional({ description: 'Active payment session identifier' })
    paymentSessionId?: string;
}

/** Paginated cart list for OpenAPI schema. */
export class PaginatedCarts extends Pagination.Paginated<Cart> {
    @ApiProperty({ description: 'Array of carts', type: () => [Cart] })
    declare data: Cart[];

    @ApiProperty({ description: 'Total number of carts' })
    declare total: number;
}

/** @deprecated Use PaginatedCarts class for OpenAPI compatibility. */
export type Carts = Pagination.Paginated<Cart>;
