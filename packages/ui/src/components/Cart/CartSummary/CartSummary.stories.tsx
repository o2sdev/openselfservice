import type { Meta, StoryObj } from '@storybook/react';

import { CartSummary } from './CartSummary';

const meta: Meta<typeof CartSummary> = {
    title: 'Components/Cart/CartSummary',
    component: CartSummary,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

export const Default: Story = {
    args: {
        subtotal: { value: 204.97, currency: 'EUR' as const },
        tax: { value: 47.14, currency: 'EUR' as const },
        total: { value: 231.61, currency: 'EUR' as const },
        discountTotal: { value: 20.5, currency: 'EUR' as const },
        shippingTotal: { value: 15.0, currency: 'EUR' as const },
        labels: {
            title: 'Summary',
            subtotalLabel: 'Subtotal',
            taxLabel: 'VAT (23%)',
            totalLabel: 'Total',
            discountLabel: 'Discount',
            shippingLabel: 'Shipping',
            freeLabel: 'Free',
        },
        primaryButton: {
            label: 'Next step',
            action: { type: 'submit', form: 'checkout-form' },
        },
        secondaryButton: {
            label: 'Back',
            action: { type: 'link', url: '#' },
        },
    },
};
