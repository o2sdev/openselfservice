import { BadRequestException } from '@nestjs/common';

import { Carts, Checkout, Orders, Payments } from '@o2s/framework/modules';

export function mapCheckoutSummary(
    cart: Carts.Model.Cart,
    _paymentSession?: Payments.Model.PaymentSession,
): Checkout.Model.CheckoutSummary {
    if (!cart.shippingAddress) {
        throw new BadRequestException('Shipping address is required for checkout summary');
    }

    if (!cart.billingAddress) {
        throw new BadRequestException('Billing address is required for checkout summary');
    }

    if (!cart.shippingMethod) {
        throw new BadRequestException('Shipping method is required for checkout summary');
    }

    if (!cart.paymentMethod) {
        throw new BadRequestException('Payment method is required for checkout summary');
    }

    if (!cart.subtotal) {
        throw new BadRequestException('Cart subtotal is required for checkout summary');
    }

    if (!cart.shippingTotal) {
        throw new BadRequestException('Shipping total is required for checkout summary');
    }

    if (!cart.taxTotal) {
        throw new BadRequestException('Tax total is required for checkout summary');
    }

    if (!cart.discountTotal) {
        throw new BadRequestException('Discount total is required for checkout summary');
    }

    if (!cart.total) {
        throw new BadRequestException('Cart total is required for checkout summary');
    }

    return {
        cart,
        shippingAddress: cart.shippingAddress,
        billingAddress: cart.billingAddress,
        shippingMethod: cart.shippingMethod,
        paymentMethod: cart.paymentMethod,
        totals: {
            subtotal: cart.subtotal,
            shipping: cart.shippingTotal,
            tax: cart.taxTotal,
            discount: cart.discountTotal,
            total: cart.total,
        },
        notes: cart.notes,
        email: cart.email,
    };
}

export function mapPlaceOrderResponse(
    order: Orders.Model.Order,
    paymentSession?: Payments.Model.PaymentSession,
): Checkout.Model.PlaceOrderResponse {
    return {
        order,
        paymentRedirectUrl: paymentSession?.redirectUrl,
    };
}

const MOCK_SHIPPING_OPTIONS: Orders.Model.ShippingMethod[] = [
    {
        id: 'SHIP-001',
        name: 'Standard Shipping',
        description: '3-5 business days',
        total: { value: 1000, currency: 'USD' },
        subtotal: { value: 1000, currency: 'USD' },
    },
    {
        id: 'SHIP-002',
        name: 'Express Shipping',
        description: '1-2 business days',
        total: { value: 2000, currency: 'USD' },
        subtotal: { value: 2000, currency: 'USD' },
    },
    {
        id: 'SHIP-003',
        name: 'Next Day Delivery',
        description: 'Next business day',
        total: { value: 3500, currency: 'USD' },
        subtotal: { value: 3500, currency: 'USD' },
    },
];

export function mapShippingOptions(): Checkout.Model.ShippingOptions {
    return {
        data: MOCK_SHIPPING_OPTIONS,
        total: MOCK_SHIPPING_OPTIONS.length,
    };
}
