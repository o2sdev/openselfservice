import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import { CartPure } from './Cart.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'CartBlock' as const,
    id: 'cart-1',
    title: 'Cart',
    subtitle: 'Review and edit your order',
    taxRate: 0.23,
    defaultCurrency: 'PLN' as const,
    labels: {
        itemTotal: 'Total',
        unknownProductName: 'Product',
        errorMessage: 'Something went wrong. Please try again.',
    },
    actions: {
        increaseQuantity: 'Increase quantity',
        decreaseQuantity: 'Decrease quantity',
        quantity: 'Quantity',
        remove: 'Remove',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
    },
    checkoutButton: {
        label: 'Proceed to checkout',
        path: '#',
        icon: 'ShoppingCart',
    },
    continueShopping: {
        label: 'Continue shopping',
        path: '#',
    },
    empty: {
        title: 'Your cart is empty',
        description: 'Add products to place an order',
        continueShopping: {
            label: 'Go to shop',
            path: '#',
        },
    },
};

const meta = {
    title: 'Blocks/Cart',
    component: CartPure,
} satisfies Meta<typeof CartPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'cart-1',
        locale: 'en',
        routing,
    },
};

export const EmptyCart: Story = {
    args: {
        ...baseBlock,
        id: 'cart-1',
        locale: 'en',
        routing,
    },
};
