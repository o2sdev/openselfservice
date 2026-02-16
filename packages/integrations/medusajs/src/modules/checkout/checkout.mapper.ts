import { HttpTypes } from '@medusajs/types';
import { BadRequestException } from '@nestjs/common';

import { Carts, Checkout, Orders, Payments } from '@o2s/framework/modules';

import { parseCurrency } from '@/utils/currency';

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

export function mapShippingOptions(
    options: HttpTypes.StoreCartShippingOption[],
    defaultCurrency: string,
): Checkout.Model.ShippingOptions {
    return {
        data: options.map((option) => mapShippingOption(option, defaultCurrency)),
        total: options.length,
    };
}

function mapShippingOption(
    option: HttpTypes.StoreCartShippingOption,
    _defaultCurrency: string,
): Orders.Model.ShippingMethod {
    const calculatedPrice = option.calculated_price;

    const amount = calculatedPrice?.calculated_amount ?? option.amount;
    if (amount === undefined || amount === null) {
        throw new BadRequestException(`Shipping option ${option.id} has no price information`);
    }

    const currencyCode = calculatedPrice?.currency_code?.toUpperCase();
    if (!currencyCode) {
        throw new BadRequestException(`Shipping option ${option.id} has no currency information`);
    }
    const currency = parseCurrency(currencyCode);

    const amountWithoutTax = calculatedPrice?.calculated_amount_without_tax ?? amount;

    return {
        id: option.id,
        name: option.name,
        description: option.type?.label || option.type?.description || undefined,
        total: {
            value: amount,
            currency,
        },
        subtotal: {
            value: amountWithoutTax,
            currency,
        },
    };
}
