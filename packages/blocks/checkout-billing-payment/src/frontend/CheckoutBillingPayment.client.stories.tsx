import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutBillingPaymentPure } from './CheckoutBillingPayment.client';

const routing = defineRouting({
    locales: ['en', 'de', 'pl'],
    defaultLocale: 'en',
    localePrefix: 'always',
    pathnames: {
        '/login': {
            en: '/sign-in',
            de: '/einloggen',
            pl: '/logowanie',
        },
    },
});

const baseBlock = {
    __typename: 'CheckoutBillingPaymentBlock' as const,
    id: 'checkout-billing-payment-1',
    title: 'Billing and payment',
    subtitle: 'Select payment method',
    fields: {
        billingAddressSectionTitle: 'Billing address',
        sameAsShippingAddress: {
            label: 'Same as shipping address',
        },
        billingAddress: {
            street: {
                label: 'Street and number',
                placeholder: 'e.g. 123 Main St',
                required: true,
            },
            city: {
                label: 'City',
                placeholder: 'City',
                required: true,
            },
            postalCode: {
                label: 'Postal code',
                placeholder: 'XX-XXX',
                required: true,
            },
            country: {
                label: 'Country',
                placeholder: 'Country',
                required: true,
            },
        },
        paymentMethod: {
            label: 'Payment method',
            placeholder: 'Select method',
            required: true,
            options: [
                { value: 'transfer', label: 'Bank transfer' },
                { value: 'card', label: 'Credit card' },
                { value: 'blik', label: 'BLIK' },
                { value: 'invoice', label: 'Invoice (pay later)' },
            ],
        },
    },
    buttons: {
        back: {
            label: 'Back',
            path: '/checkout/shipping-address',
        },
        next: {
            label: 'Next',
            path: '/checkout/summary',
        },
    },
    errors: {
        required: 'This field is required',
        invalidPostalCode: 'Invalid postal code',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
    },
    totals: {
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        total: { value: 252.11, currency: 'PLN' as const },
    },
    continueShopping: {
        label: 'Back to cart',
        path: '/shop/cart',
    },
    checkoutButton: {
        label: 'Next',
        path: '/checkout/summary',
        icon: 'ArrowRight',
    },
};

const meta = {
    title: 'Blocks/CheckoutBillingPayment',
    component: CheckoutBillingPaymentPure,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CheckoutBillingPaymentPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-billing-payment-1',
        locale: 'en',
        routing,
    },
};
