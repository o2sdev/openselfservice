import { BadRequestException } from '@nestjs/common';

import { Carts, Checkout, Orders, Payments } from '@o2s/framework/modules';

import { getPaymentMethodDisplay } from '../payments/mocks/providers.mock';

export function mapCheckoutSummary(
    cart: Carts.Model.Cart,
    _paymentSession?: Payments.Model.PaymentSession,
    locale?: string,
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

    const shippingMethod =
        locale && cart.shippingMethod
            ? (getShippingOptionById(cart.shippingMethod.id, locale) ?? cart.shippingMethod)
            : cart.shippingMethod;

    const paymentMethod =
        locale && cart.paymentMethod
            ? (getPaymentMethodDisplay(cart.paymentMethod.id, locale) ?? cart.paymentMethod)
            : cart.paymentMethod;

    return {
        cart: {
            ...cart,
            shippingMethod,
            paymentMethod,
        },
        shippingAddress: cart.shippingAddress,
        billingAddress: cart.billingAddress,
        shippingMethod,
        paymentMethod,
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
    _paymentSession?: Payments.Model.PaymentSession,
    locale?: string,
): Checkout.Model.PlaceOrderResponse {
    // Localized order confirmation paths matching page definitions
    const orderConfirmationPaths: Record<string, string> = {
        en: '/order-confirmation',
        de: '/bestellbestaetigung',
        pl: '/potwierdzenie-zamowienia',
    };

    // Normalize locale (e.g., 'en-US' -> 'en', 'pl-PL' -> 'pl')
    const normalizedLocale: string = (locale || 'en').toLowerCase().split('-')[0] || 'en';
    const basePath = orderConfirmationPaths[normalizedLocale] || orderConfirmationPaths.en;

    return {
        order,
        // For mocked integration, always redirect to localized order-confirmation page
        paymentRedirectUrl: `${basePath}/${order.id}`,
    };
}

type Locale = 'en' | 'de' | 'pl';

const SHIPPING_OPTIONS_BY_LOCALE: Record<
    Locale,
    Array<{
        id: string;
        name: string;
        description: string;
        total: { value: number; currency: string };
        subtotal: { value: number; currency: string };
    }>
> = {
    en: [
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
    ],
    de: [
        {
            id: 'SHIP-001',
            name: 'Standardversand',
            description: '3-5 Werktage',
            total: { value: 1000, currency: 'USD' },
            subtotal: { value: 1000, currency: 'USD' },
        },
        {
            id: 'SHIP-002',
            name: 'Expressversand',
            description: '1-2 Werktage',
            total: { value: 2000, currency: 'USD' },
            subtotal: { value: 2000, currency: 'USD' },
        },
        {
            id: 'SHIP-003',
            name: 'Lieferung am nächsten Tag',
            description: 'Nächster Werktag',
            total: { value: 3500, currency: 'USD' },
            subtotal: { value: 3500, currency: 'USD' },
        },
    ],
    pl: [
        {
            id: 'SHIP-001',
            name: 'Wysyłka standardowa',
            description: '3-5 dni roboczych',
            total: { value: 1000, currency: 'USD' },
            subtotal: { value: 1000, currency: 'USD' },
        },
        {
            id: 'SHIP-002',
            name: 'Wysyłka ekspresowa',
            description: '1-2 dni robocze',
            total: { value: 2000, currency: 'USD' },
            subtotal: { value: 2000, currency: 'USD' },
        },
        {
            id: 'SHIP-003',
            name: 'Dostawa następnego dnia',
            description: 'Następny dzień roboczy',
            total: { value: 3500, currency: 'USD' },
            subtotal: { value: 3500, currency: 'USD' },
        },
    ],
};

const normalizeLocale = (locale?: string): Locale => {
    const lower = (locale ?? 'en').toLowerCase();
    if (lower.startsWith('de')) return 'de';
    if (lower.startsWith('pl')) return 'pl';
    return 'en';
};

export function mapShippingOptions(locale?: string): Checkout.Model.ShippingOptions {
    const options = SHIPPING_OPTIONS_BY_LOCALE[normalizeLocale(locale)] ?? SHIPPING_OPTIONS_BY_LOCALE.en;
    return {
        data: options as Orders.Model.ShippingMethod[],
        total: options.length,
    };
}

export function getShippingOptionById(id: string, locale?: string): Orders.Model.ShippingMethod | undefined {
    const options = SHIPPING_OPTIONS_BY_LOCALE[normalizeLocale(locale)] ?? SHIPPING_OPTIONS_BY_LOCALE.en;
    return options.find((opt) => opt.id === id) as Orders.Model.ShippingMethod | undefined;
}
