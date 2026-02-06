import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartClient } from './Cart.client';

const meta = {
    title: 'Blocks/Cart',
    component: CartClient,
} satisfies Meta<typeof CartClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 'cart-1',
        locale: 'en',
        currency: 'EUR',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/': '/',
            },
        },
        title: 'Your cart',
        subtitle: 'Summary of items in your cart',
        summary: {
            title: 'Summary',
            subtotalLabel: 'Subtotal',
            taxLabel: 'Tax',
            totalLabel: 'Total',
        },
        empty: {
            title: 'Your cart is empty',
            description: 'Add some products to your cart to see them here.',
        },
    },
};
