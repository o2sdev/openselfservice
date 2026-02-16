import type { Meta, StoryObj } from '@storybook/react';

import { CartSummary } from './CartSummary';

const meta: Meta<typeof CartSummary> = {
    title: 'Components/Cart/CartSummary',
    component: CartSummary,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

const defaultArgs = {
    subtotal: { value: 204.97, currency: 'PLN' as const },
    tax: { value: 47.14, currency: 'PLN' as const },
    total: { value: 252.11, currency: 'PLN' as const },
    labels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
    },
};

export const Default: Story = {
    args: {
        ...defaultArgs,
        checkoutButton: {
            url: '#',
            label: 'Proceed to checkout',
            icon: 'ShoppingCart',
        },
        continueShopping: {
            url: '#',
            label: 'Continue shopping',
        },
    },
};

export const TotalsOnly: Story = {
    args: defaultArgs,
};
