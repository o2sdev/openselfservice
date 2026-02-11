import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutCompanyDataPure } from './CheckoutCompanyData.client';

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
    __typename: 'CheckoutCompanyDataBlock' as const,
    id: 'checkout-company-data-1',
    title: 'Company details',
    subtitle: 'Fill in your company details',
    fields: {
        companyName: {
            label: 'Company name',
            placeholder: 'e.g. ACME Inc.',
            required: true,
        },
        nip: {
            label: 'Tax ID (NIP)',
            placeholder: 'XXXXXXXXXX',
            required: true,
        },
        addressSectionTitle: 'Registered office address',
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
    },
    buttons: {
        back: {
            label: 'Back to cart',
            path: '/shop/cart',
        },
        next: {
            label: 'Next',
            path: '/checkout/shipping-address',
        },
    },
    errors: {
        required: 'This field is required',
        invalidNip: 'Invalid tax ID',
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
        path: '/checkout/shipping-address',
        icon: 'ArrowRight',
    },
};

const meta = {
    title: 'Blocks/CheckoutCompanyData',
    component: CheckoutCompanyDataPure,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CheckoutCompanyDataPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-company-data-1',
        locale: 'en',
        routing,
    },
};
