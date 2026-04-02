import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import * as Carts from '../carts';
import * as Orders from '../orders';

import { Address, Price } from '@/utils/models';

/** Checkout totals breakdown. */
export class CheckoutTotals {
    @ApiProperty({ description: 'Cart subtotal before shipping/tax' })
    subtotal!: Price.Price;

    @ApiProperty({ description: 'Shipping cost' })
    shipping!: Price.Price;

    @ApiProperty({ description: 'Tax amount' })
    tax!: Price.Price;

    @ApiProperty({ description: 'Discount amount' })
    discount!: Price.Price;

    @ApiProperty({ description: 'Grand total' })
    total!: Price.Price;
}

/** Checkout summary snapshot for a cart before placing an order. */
export class CheckoutSummary {
    @ApiProperty({ description: 'Cart details', type: () => Carts.Model.Cart })
    cart!: Carts.Model.Cart;

    @ApiProperty({ description: 'Shipping address' })
    shippingAddress!: Address.Address;

    @ApiProperty({ description: 'Billing address' })
    billingAddress!: Address.Address;

    @ApiProperty({ description: 'Selected shipping method', type: () => Orders.Model.ShippingMethod })
    shippingMethod!: Orders.Model.ShippingMethod;

    @ApiProperty({ description: 'Selected payment method', type: () => Carts.Model.PaymentMethod })
    paymentMethod!: Carts.Model.PaymentMethod;

    @ApiProperty({ description: 'Price totals breakdown', type: () => CheckoutTotals })
    totals!: CheckoutTotals;

    @ApiPropertyOptional({ description: 'Customer notes' })
    notes?: string;

    @ApiPropertyOptional({ description: 'Customer email for guest checkout' })
    email?: string;
}

/** Available shipping options for a checkout cart. */
export class ShippingOptions {
    @ApiProperty({ description: 'Available shipping methods', type: () => [Orders.Model.ShippingMethod] })
    data!: Orders.Model.ShippingMethod[];

    @ApiProperty({ description: 'Total number of available shipping options' })
    total!: number;
}

/** Order placement result with optional payment redirect handoff. */
export class PlaceOrderResponse {
    @ApiProperty({ description: 'Created order', type: () => Orders.Model.Order })
    order!: Orders.Model.Order;

    @ApiPropertyOptional({ description: 'Redirect URL for external payment flow' })
    paymentRedirectUrl?: string;
}
