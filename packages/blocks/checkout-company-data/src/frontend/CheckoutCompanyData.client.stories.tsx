import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutCompanyDataPure } from './CheckoutCompanyData.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'CheckoutCompanyDataBlock' as const,
    id: 'checkout-company-data-1',
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 1,
    },
    title: 'Company details',
    subtitle: 'Fill in your company details',
    fields: {
        companyName: {
            label: 'Company name',
            placeholder: 'e.g. ACME Inc.',
            required: true,
        },
        taxId: {
            label: 'Tax ID (NIP)',
            placeholder: 'XXXXXXXXXX',
            required: true,
        },
        address: {
            streetName: {
                label: 'Street name',
                placeholder: 'e.g. Main Street',
                required: true,
            },
            streetNumber: {
                label: 'Number',
                placeholder: 'e.g. 123',
                required: true,
            },
            apartment: {
                label: 'Apartment / suite',
                placeholder: 'e.g. 4B',
                required: false,
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
            path: '#',
        },
        next: {
            label: 'Next',
            path: '#',
        },
    },
    errors: {
        required: 'This field is required',
        invalidTaxId: 'Invalid tax ID',
        invalidPostalCode: 'Invalid postal code',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
        discountLabel: 'Discount',
        shippingLabel: 'Shipping',
        freeLabel: 'Free',
    },
    billingInfoNote: {
        icon: 'Info',
        text: 'This address will appear on your invoice.',
    },
};

const meta = {
    title: 'Blocks/CheckoutCompanyData',
    component: CheckoutCompanyDataPure,
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
