import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';
import React from 'react';

import readme from '../../README.md?raw';

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
    },
    errors: {
        loadError: 'Failed to load cart. Please try again.',
        updateError: 'Failed to update cart. Please try again.',
        promoError: 'Failed to apply promo code. Please try again.',
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
    promoCodeLabels: {
        title: 'Promo Code',
        inputPlaceholder: 'Enter promo code',
        applyButton: 'Apply',
        removeLabel: 'Remove promo code',
        invalidCodeError: 'Invalid or expired promo code',
    },
};

const meta = {
    title: 'Blocks/Cart',
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
                window.localStorage.setItem('cartId', EMPTY_CART_ID);
            }
            return <Story />;
        },
    ],
};
