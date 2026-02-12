import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

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
    totalLabel: 'Total:',
    message: 'Order confirmation has been sent to your email address.',
    buttons: {
        viewOrders: 'View orders',
        continueShopping: 'Continue shopping',
    },
    viewOrdersPath: '#',
    continueShoppingPath: '#',
    order: {
        id: 'ORD-12345',
        items: {
            data: [
                {
                    id: 'item-1',
                    productId: 'PRIM-001',
                    quantity: 2,
                    price: { value: 89.99, currency: 'PLN' as const },
                    total: { value: 179.98, currency: 'PLN' as const },
                    productName: 'CLARIS S Filter Cartridge',
                },
                {
                    id: 'item-2',
                    productId: 'PRIM-002',
                    quantity: 1,
                    price: { value: 24.99, currency: 'PLN' as const },
                    total: { value: 24.99, currency: 'PLN' as const },
                    productName: 'Cleaning solution',
                },
            ],
            total: 3,
        },
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        total: { value: 252.11, currency: 'PLN' as const },
    },
};

const meta = {
    title: 'Blocks/OrderConfirmation',
    component: OrderConfirmationPure,
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
