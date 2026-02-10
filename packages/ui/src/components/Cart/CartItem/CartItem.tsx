import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { CartItemProps } from './CartItem.types';

export const CartItem: React.FC<Readonly<CartItemProps>> = ({ className, ...props }) => {
    return (
        <div className={cn('', className)} {...props}>
            CartItem
        </div>
    );
};
