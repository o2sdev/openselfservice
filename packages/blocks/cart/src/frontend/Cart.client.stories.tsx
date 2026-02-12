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
    previewButtons: {
        viewPDF: {
            label: 'View PDF',
            icon: 'FileText',
            dialog: {
                title: 'Document preview',
                description: 'Open document in new tab',
                closeLabel: 'Close',
                fallbackMessage: 'Preview cannot be displayed',
                openInNewTabLabel: 'Open in new tab',
                pdfUrl: '/mock/document.pdf',
            },
        },
    },
    empty: {
        title: 'Your cart is empty',
        description: 'Add products to place an order',
        continueShopping: {
            label: 'Go to shop',
            path: '#',
        },
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
                image: {
                    url: 'https://picsum.photos/200/200',
                    alt: 'CLARIS S filter cartridge',
                },
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
                image: {
                    url: 'https://picsum.photos/200/201',
                    alt: 'Cleaning solution',
                },
            },
        },
    ],
    totals: {
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        total: { value: 252.11, currency: 'PLN' as const },
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
        items: [],
        totals: {
            subtotal: { value: 0, currency: 'PLN' as const },
            tax: { value: 0, currency: 'PLN' as const },
            total: { value: 0, currency: 'PLN' as const },
        },
    },
};
