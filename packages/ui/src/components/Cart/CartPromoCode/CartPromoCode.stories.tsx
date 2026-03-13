import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { CartPromoCode } from './CartPromoCode';

const meta: Meta<typeof CartPromoCode> = {
    title: 'Components/Cart/CartPromoCode',
    component: CartPromoCode,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartPromoCode>;

export const Default: Story = {
    args: {
        promotions: [
            { code: 'SAVE10', name: '10% Off' },
            { code: 'FREESHIP', name: 'Free Shipping' },
        ],
        labels: {
            title: 'Promo Code',
            inputPlaceholder: 'Enter promo code',
            applyButton: 'Apply',
            removeLabel: 'Remove promo code',
            invalidCodeError: 'Invalid or expired promo code',
        },
        isLoading: false,
        onApply: fn(),
        onRemove: fn(),
    },
};
