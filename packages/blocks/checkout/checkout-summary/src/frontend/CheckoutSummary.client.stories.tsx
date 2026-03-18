import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import readme from '../../README.md?raw';

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
            addressLabel: 'Billing address',
            methodLabel: 'Payment method:',
        },
        summary: {
            title: 'Summary',
            subtotalLabel: 'Subtotal',
            taxLabel: 'VAT',
            discountLabel: 'Discount',
            shippingLabel: 'Shipping',
            freeLabel: 'Free',
            totalLabel: 'Total',
            activePromoCodesTitle: 'Active discount codes',
            notesTitle: 'Notes',
        },
    },
    cartPath: '/cart',
    buttons: {
        back: { label: 'Back', path: '#' },
        confirm: { label: 'Place order', path: '#' },
    },
    errors: {
        cartNotFound: 'Cart not found',
        placeOrderError: 'Something went wrong while placing your order. Please try again.',
        loadError: 'Something went wrong while loading the summary. Please complete the previous steps and try again.',
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
    title: 'Blocks/Checkout/CheckoutSummary',
    component: CheckoutSummaryPure,
    tags: ['autodocs'],
    parameters: { readme },
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
