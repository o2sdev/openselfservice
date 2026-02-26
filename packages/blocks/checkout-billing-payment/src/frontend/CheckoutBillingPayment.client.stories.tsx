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
        paymentMethod: {
            label: 'Payment method',
            placeholder: 'Select method',
            required: true,
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
