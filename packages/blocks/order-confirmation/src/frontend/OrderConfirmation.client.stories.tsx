import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import readme from '../../README.md?raw';

import { OrderConfirmationPure } from './OrderConfirmation.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'OrderConfirmationBlock' as const,
    id: 'order-confirmation-1',
    title: 'Order placed successfully!',
    subtitle: 'Thank you for your order',
    orderNumberLabel: 'Order number:',
    productsTitle: 'Products',
    productsCountLabel: 'pcs',
    summaryTitle: 'Order summary',
    subtotalLabel: 'Subtotal:',
    taxLabel: 'VAT:',
    discountLabel: 'Discount:',
    shippingLabel: 'Shipping:',
    totalLabel: 'Total:',
    errors: {
        loadError: 'Failed to load order. Please try again.',
        orderNotFound: 'Order not found or unavailable.',
    },
    shippingSection: {
        title: 'Shipping address',
        addressLabel: 'Address',
        methodLabel: 'Method',
    },
    billingSection: {
        title: 'Payment',
        addressLabel: 'Address',
        taxIdLabel: 'Tax ID',
    },
    message: 'Order confirmation has been sent to your email address.',
    buttons: {
        viewOrders: 'View orders',
        continueShopping: 'Continue shopping',
    },
    viewOrdersPath: '#',
    continueShoppingPath: '#',
    statusLabels: {
        PENDING: 'Pending',
        COMPLETED: 'Completed',
        SHIPPED: 'Shipped',
        CANCELLED: 'Cancelled',
        ARCHIVED: 'Archived',
        REQUIRES_ACTION: 'Requires action',
        UNKNOWN: 'Unknown',
    },
    order: {
        id: 'ORD-12345',
        status: 'PENDING' as const,
        items: {
            data: [
                {
                    id: 'item-1',
                    productId: 'PRIM-001',
                    quantity: 2,
                    price: { value: 89.99, currency: 'EUR' as const },
                    total: { value: 179.98, currency: 'EUR' as const },
                    productName: 'CLARIS S Filter Cartridge',
                },
                {
                    id: 'item-2',
                    productId: 'PRIM-002',
                    quantity: 1,
                    price: { value: 24.99, currency: 'EUR' as const },
                    total: { value: 24.99, currency: 'EUR' as const },
                    productName: 'Cleaning solution',
                },
            ],
            total: 3,
        },
        subtotal: { value: 204.97, currency: 'EUR' as const },
        tax: { value: 47.14, currency: 'EUR' as const },
        discountTotal: { value: 20.5, currency: 'EUR' as const },
        shippingTotal: { value: 15, currency: 'EUR' as const },
        total: { value: 252.11, currency: 'EUR' as const },
        shippingAddress: {
            streetName: 'Main St',
            streetNumber: '123',
            postalCode: '00-001',
            city: 'Warsaw',
            country: 'Poland',
        },
        billingAddress: {
            streetName: 'Main St',
            streetNumber: '123',
            companyName: 'Acme Corp',
            taxId: 'PL1234567890',
            postalCode: '00-001',
            city: 'Warsaw',
            country: 'Poland',
        },
        shippingMethods: [{ name: 'Standard Shipping', total: { value: 15, currency: 'EUR' as const } }],
    },
};

const meta = {
    title: 'Blocks/OrderConfirmation',
    component: OrderConfirmationPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof OrderConfirmationPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'order-confirmation-1',
        orderId: 'ORD-12345',
        locale: 'en',
        routing,
    },
};

export const WithoutMessage: Story = {
    args: {
        ...baseBlock,
        id: 'order-confirmation-1',
        orderId: 'ORD-12345',
        locale: 'en',
        routing,
        message: undefined,
    },
};
