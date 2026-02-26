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

export const Default: Story = {
    args: {
        subtotal: { value: 204.97, currency: 'PLN' as const },
        tax: { value: 47.14, currency: 'PLN' as const },
        total: { value: 231.61, currency: 'PLN' as const },
        discountTotal: { value: 20.5, currency: 'PLN' as const },
        shippingMethod: {
            name: 'Standard Delivery',
            total: { value: 15.0, currency: 'PLN' as const },
        },
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
