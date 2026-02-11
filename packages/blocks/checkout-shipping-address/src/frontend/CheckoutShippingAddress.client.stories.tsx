import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutShippingAddressPure } from './CheckoutShippingAddress.client';

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
    __typename: 'CheckoutShippingAddressBlock' as const,
    id: 'checkout-shipping-address-1',
    title: 'Shipping address',
    subtitle: 'Select shipping method',
    fields: {
        sameAsCompanyAddress: {
            label: 'Same as company registered address',
        },
        address: {
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
        shippingMethod: {
            label: 'Shipping method',
            placeholder: 'Select method',
            required: true,
            options: [
                {
                    value: 'courier',
                    label: 'Courier (24-48h)',
                    price: { value: 0, currency: 'PLN' as const },
                },
                {
                    value: 'express',
                    label: 'Express (24h)',
                    price: { value: 19.99, currency: 'PLN' as const },
                },
                {
                    value: 'pickup',
                    label: 'Pickup point',
                    price: { value: 0, currency: 'PLN' as const },
                },
            ],
        },
    },
    buttons: {
        back: {
            label: 'Back',
            path: '/checkout/company-data',
        },
        next: {
            label: 'Next',
            path: '/checkout/billing-payment',
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
        path: '/checkout/billing-payment',
        icon: 'ArrowRight',
    },
};

const meta = {
    title: 'Blocks/CheckoutShippingAddress',
    component: CheckoutShippingAddressPure,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CheckoutShippingAddressPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-shipping-address-1',
        locale: 'en',
        routing,
    },
};
