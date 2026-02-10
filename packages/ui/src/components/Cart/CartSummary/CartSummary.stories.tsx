import type { Meta, StoryObj } from '@storybook/react';

import { CartSummary } from './CartSummary';

const meta: Meta<typeof CartSummary> = {
    title: 'Components/CartSummary',
    component: CartSummary,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

export const Default: Story = {
    args: {
        className: 'CartSummary',
    },
};
