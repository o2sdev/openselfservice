import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutSummaryPure } from './CheckoutSummary.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'CheckoutSummaryBlock' as const,
    id: 'checkout-summary-1',
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 4,
    },
    title: 'Order summary',
    subtitle: 'Review and place your order',
    sections: {
        products: {
            title: 'Products',
            labels: { quantity: 'Quantity', price: 'Unit price', total: 'Total' },
        },
        company: {
            title: 'Company details',
            addressLabel: 'Billing address',
            companyNameLabel: 'Company name',
            taxIdLabel: 'Tax ID',
        },
        shipping: {
            title: 'Shipping address',
            addressLabel: 'Address',
            methodLabel: 'Shipping method:',
        },
        billing: {
            title: 'Payment',
            methodLabel: 'Payment method:',
        },
        summary: {
            title: 'Summary',
            subtotalLabel: 'Subtotal',
            taxLabel: 'VAT (23%)',
            shippingLabel: 'Shipping',
            totalLabel: 'Total',
        },
        notes: {
            title: 'Notes',
            comment: { label: 'Comment', placeholder: 'Add a comment to your order...' },
            specialInstructions: {
                label: 'Special instructions',
                placeholder: 'Any special delivery instructions?',
            },
        },
    },
    buttons: {
        back: { label: 'Back', path: '#' },
        confirm: { label: 'Place order', path: '#' },
    },
    loading: { confirming: 'Placing order...' },
    placeholders: {
        companyData: 'Company details not provided',
        shippingAddress: 'Shipping address not provided',
        sameAsBillingAddress: 'Same as billing address',
        billingAddress: 'Billing address not provided',
    },
};

const meta = {
    title: 'Blocks/CheckoutSummary',
    component: CheckoutSummaryPure,
} satisfies Meta<typeof CheckoutSummaryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-summary-1',
        locale: 'en',
        routing,
    },
};
