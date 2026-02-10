import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
    title: 'Components/CartItem',
    component: CartItem,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
    args: {
        className: 'CartItem',
    },
};
