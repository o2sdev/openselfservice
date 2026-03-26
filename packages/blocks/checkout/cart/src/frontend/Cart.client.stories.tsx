import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';
import React from 'react';

import readme from '../../README.md?raw';

import { CartPure } from './Cart.client';

const cartIdLocalStorageKey = process.env.CART_ID_LOCAL_STORAGE_KEY!.trim();

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
    defaultCurrency: 'EUR' as const,
    labels: {
        itemTotal: 'Total',
        unknownProductName: 'Product',
    },
    errors: {
        loadError: 'Failed to load cart. Please try again.',
        updateError: 'Failed to update cart. Please try again.',
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
        taxLabel: 'VAT',
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
    title: 'Blocks/Checkout/Cart',
    component: CartPure,
    tags: ['autodocs'],
    parameters: { readme },
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

const EMPTY_CART_ID = 'storybook-cart-empty';

export const EmptyCart: Story = {
    args: {
        ...baseBlock,
        id: 'cart-1',
        locale: 'en',
        routing,
    },
    decorators: [
        (Story) => {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(cartIdLocalStorageKey, EMPTY_CART_ID);
            }
            return <Story />;
        },
    ],
};
