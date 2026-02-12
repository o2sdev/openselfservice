import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
    title: 'Components/Cart/CartItem',
    component: CartItem,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

const defaultArgs = {
    id: 'cart-item-001',
    productId: 'PRIM-001',
    name: 'CLARIS S filter cartridge',
    subtitle: 'Filters • JURA',
    image: {
        url: 'https://picsum.photos/200/200',
        alt: 'CLARIS S filtering cartridge',
    },
    quantity: 2,
    price: { value: 89.99, currency: 'PLN' as const },
    total: { value: 179.98, currency: 'PLN' as const },
    labels: {
        itemTotal: 'Subtotal',
        remove: 'Remove product',
        increaseQuantity: 'Increase quantity',
        decreaseQuantity: 'Decrease quantity',
        quantity: 'Quantity',
    },
    onRemove: fn(),
    onQuantityChange: fn(),
};

export const Default: Story = {
    args: defaultArgs,
};
