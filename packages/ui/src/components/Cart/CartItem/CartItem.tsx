'use client';

import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Input } from '@o2s/ui/elements/input';
import { Typography } from '@o2s/ui/elements/typography';

import { CartItemProps } from './CartItem.types';

export const CartItem: React.FC<Readonly<CartItemProps>> = ({
    id,
    productId: _productId,
    name,
    subtitle,
    image,
    quantity,
    price: _price,
    total,
    labels,
    onRemove,
    onQuantityChange,
}) => {
    const handleQuantityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10) || 1;
        onQuantityChange(id, newQuantity);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-lg border border-border">
            {/* Product Image */}
            {image && (
                <div className="relative w-full sm:w-24 h-24 shrink-0 rounded-md overflow-hidden">
                    <Image
                        src={image.url}
                        alt={image.alt || name}
                        fill
                        sizes="96px"
                        className="object-cover object-center"
                    />
                </div>
            )}

            {/* Product Info */}
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <Typography variant="h3" className="mb-1">
                            {name}
                        </Typography>
                        {subtitle && (
                            <Typography variant="small" className="text-muted-foreground">
                                {subtitle}
                            </Typography>
                        )}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => onRemove(id)} aria-label={labels.remove}>
                        <DynamicIcon name="X" size={20} />
                    </Button>
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onQuantityChange(id, quantity - 1)}
                            disabled={quantity <= 1}
                            aria-label={labels.decreaseQuantity}
                        >
                            <DynamicIcon name="Minus" size={16} />
                        </Button>
                        <Input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={handleQuantityInputChange}
                            className="w-16 text-center"
                            aria-label={labels.quantity}
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onQuantityChange(id, quantity + 1)}
                            aria-label={labels.increaseQuantity}
                        >
                            <DynamicIcon name="Plus" size={16} />
                        </Button>
                    </div>

                    {/* Item Total */}
                    <div className="flex flex-col items-end">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.itemTotal}
                        </Typography>
                        <Typography variant="h3" className="text-primary">
                            <Price price={total} />
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};
