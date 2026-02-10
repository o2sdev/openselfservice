import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { CartSummaryProps } from './CartSummary.types';

export const CartSummary: React.FC<Readonly<CartSummaryProps>> = ({ className, ...props }) => {
    return (
        <div className={cn('', className)} {...props}>
            CartSummary
        </div>
    );
};
