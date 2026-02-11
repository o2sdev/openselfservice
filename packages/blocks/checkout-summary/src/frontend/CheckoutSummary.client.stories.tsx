import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CheckoutSummaryPure } from './CheckoutSummary.client';

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
    __typename: 'CheckoutSummaryBlock' as const,
    id: 'checkout-summary-1',
    title: 'Order summary',
    subtitle: 'Review your order before submitting',
    sections: {
        products: {
            title: 'Products',
            labels: { quantity: 'Quantity', price: 'Price', total: 'Total' },
        },
        company: {
            title: 'Company details',
            addressLabel: 'Registered address:',
            companyNameLabel: 'Company name',
            nipLabel: 'NIP',
        },
        shipping: {
            title: 'Shipping address',
            methodLabel: 'Shipping method:',
        },
        billing: {
            title: 'Billing address',
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
            comment: { label: 'Comment', placeholder: 'Optional comment...' },
            specialInstructions: {
                label: 'Special instructions',
                placeholder: 'Delivery instructions...',
            },
        },
    },
    buttons: {
        back: { label: 'Back', path: '/checkout/billing-payment' },
        confirm: 'Place order',
    },
    loading: { confirming: 'Processing...' },
    placeholders: {
        companyData: 'Company data will be displayed here',
        shippingAddress: 'Shipping address will be displayed here',
        billingAddress: 'Billing address will be displayed here',
        sameAsCompanyAddress: 'Shipping address is same as company address',
        sameAsShippingAddress: 'Billing address is same as shipping address',
    },
    items: [
        {
            id: 'cart-item-001',
            productId: 'PRIM-001',
            quantity: 2,
            price: { value: 89.99, currency: 'PLN' as const },
            total: { value: 179.98, currency: 'PLN' as const },
            product: {
                name: 'CLARIS S Filter Cartridge',
                subtitle: 'Filtry • JURA',
                image: { url: '/images/products/filter-claris.jpg', alt: 'CLARIS S' },
            },
        },
        {
            id: 'cart-item-002',
            productId: 'PRIM-002',
            quantity: 1,
            price: { value: 24.99, currency: 'PLN' as const },
            total: { value: 24.99, currency: 'PLN' as const },
            product: { name: 'Cleaning solution', subtitle: 'Konserwacja' },
        },
    ],
    totals: {
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        shipping: { value: 0, currency: 'PLN' as const },
        total: { value: 252.11, currency: 'PLN' as const },
    },
};

const mockOnConfirm = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    return { success: true };
};

const meta = {
    title: 'Blocks/CheckoutSummary',
    component: CheckoutSummaryPure,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CheckoutSummaryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-summary-1',
        locale: 'en',
        routing,
        onConfirm: mockOnConfirm,
    },
};

export const WithoutOnConfirm: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-summary-1',
        locale: 'en',
        routing,
    },
};
