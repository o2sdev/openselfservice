import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
    title: 'Components/Cart/CartItem',
    component: CartItem,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

const defaultArgs = {
    id: 'cart-item-001',
    productId: 'PRIM-001',
    name: 'Wkład CLARIS S',
    subtitle: 'Filtry • JURA',
    image: {
        url: '/demo/primulator/products/4339-10_filtr-wody-everpure-claris-s.jpg',
        alt: 'Wkład filtrujący CLARIS S',
    },
    quantity: 2,
    price: { value: 89.99, currency: 'PLN' as const },
    total: { value: 179.98, currency: 'PLN' as const },
    labels: {
        itemTotal: 'Suma',
        remove: 'Usuń produkt',
        increaseQuantity: 'Zwiększ ilość',
        decreaseQuantity: 'Zmniejsz ilość',
        quantity: 'Ilość',
    },
    onRemove: () => {},
    onQuantityChange: () => {},
};

export const Default: Story = {
    args: defaultArgs,
};

export const SingleQuantity: Story = {
    args: {
        ...defaultArgs,
        quantity: 1,
        total: { value: 89.99, currency: 'PLN' as const },
    },
};
