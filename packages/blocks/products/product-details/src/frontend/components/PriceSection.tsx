import React from 'react';

import type { Models } from '@o2s/framework/modules';

import { Price } from '@o2s/ui/components/Products/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

interface PriceSectionProps {
    price: Models.Price.Price;
    priceLabel: string;
    onAddToCart: () => void;
    addToCartLabel: string;
    isOutOfStock?: boolean;
    isAddingToCart?: boolean;
    className?: string;
}

export const PriceSection: React.FC<PriceSectionProps> = ({
    price,
    priceLabel,
    onAddToCart,
    addToCartLabel,
    isOutOfStock = false,
    isAddingToCart = false,
    className,
}) => {
    return (
        <div className={className}>
            <div className="flex flex-col gap-1 mb-4 items-end">
                <Typography className="text-muted-foreground">{priceLabel}</Typography>
                <Typography variant="h2" className="text-primary whitespace-nowrap">
                    <Price price={price} />
                </Typography>
            </div>
            <Separator />
            <div className="flex flex-col gap-3 mt-6">
                <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                    onClick={onAddToCart}
                    disabled={isOutOfStock || isAddingToCart}
                >
                    {addToCartLabel}
                </Button>
            </div>
        </div>
    );
};
