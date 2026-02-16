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
            title: 'Delivery',
            addressLabel: 'Shipping address:',
            methodLabel: 'Shipping method:',
        },
        billing: {
            title: 'Payment',
            addressLabel: 'Billing address:',
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
        back: { label: 'Back', path: '#' },
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
                subtitle: 'Filters • JURA',
                image: { url: 'https://picsum.photos/200/200', alt: 'CLARIS S filter cartridge' },
            },
        },
        {
            id: 'cart-item-002',
            productId: 'PRIM-002',
            quantity: 1,
            price: { value: 24.99, currency: 'PLN' as const },
            total: { value: 24.99, currency: 'PLN' as const },
            product: {
                name: 'Cleaning solution',
                subtitle: 'Maintenance',
                image: { url: 'https://picsum.photos/200/201', alt: 'Cleaning solution' },
            },
        },
    ],
    totals: {
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        shipping: { value: 0, currency: 'PLN' as const },
        total: { value: 252.11, currency: 'PLN' as const },
    },
    checkoutData: {
        companyData: {
            companyName: 'Test Company Inc.',
            nip: '5272960923',
            street: '123 Sample Street',
            city: 'Warsaw',
            postalCode: '00-001',
            country: 'Poland',
        },
        shippingAddress: {
            street: '123 Sample Street',
            city: 'Warsaw',
            postalCode: '00-001',
            country: 'Poland',
            sameAsCompanyAddress: false,
            shippingMethod: 'courier',
            shippingMethodLabel: 'DPD Courier',
        },
        billingPayment: {
            street: '123 Sample Street',
            city: 'Warsaw',
            postalCode: '00-001',
            country: 'Poland',
            sameAsShippingAddress: true,
            paymentMethod: 'transfer',
            paymentMethodLabel: 'Bank transfer',
        },
    },
};

const mockOnConfirm = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    return { success: true };
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
