import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutBillingPaymentPure } from './CheckoutBillingPayment.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'CheckoutBillingPaymentBlock' as const,
    id: 'checkout-billing-payment-1',
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 3,
    },
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
            path: '#',
        },
        next: {
            label: 'Next',
            path: '#',
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
};

const meta = {
    title: 'Blocks/CheckoutBillingPayment',
    component: CheckoutBillingPaymentPure,
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
