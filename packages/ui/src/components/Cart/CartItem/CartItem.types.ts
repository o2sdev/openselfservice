import { Models } from '@o2s/framework/modules';
import React from 'react';

export interface CartItemProps {
    id: string;
    productId: string;
    productUrl?: string;
    name: string;
    subtitle?: string;
    image?: { url: string; alt?: string };
    quantity: number;
    price: Models.Price.Price;
    total: Models.Price.Price;
    labels: {
        itemTotal: string;
        remove: string;
        increaseQuantity: string;
        decreaseQuantity: string;
        quantity: string;
    };
    onRemove: (itemId: string) => void;
    onQuantityChange: (itemId: string, quantity: number) => void;
    LinkComponent?: React.ComponentType<{ href: string; children: React.ReactNode; className?: string }>;
}
