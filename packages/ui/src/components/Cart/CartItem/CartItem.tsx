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
    productUrl,
    name,
    subtitle,
    image,
    quantity,
    price: _price,
    total,
    labels,
    onRemove,
    onQuantityChange,
    LinkComponent,
}) => {
    const handleQuantityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10) || 1;
        onQuantityChange(id, newQuantity);
    };

    const imageContent = image && (
        <div className="relative w-32 h-32 shrink-0 rounded-md overflow-hidden bg-muted">
            <Image src={image.url} alt={image.alt || name} fill sizes="128px" className="object-cover object-center" />
        </div>
    );

    return (
        <div className="flex flex-row gap-4 p-4 bg-card rounded-lg border border-border">
            {/* Product Image */}
            {image &&
                (productUrl && LinkComponent ? (
                    <LinkComponent href={productUrl} className="shrink-0">
                        {imageContent}
                    </LinkComponent>
                ) : (
                    imageContent
                ))}

            {/* Product Info */}
            <div className="min-w-0 flex-1 flex flex-col gap-2 justify-between">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        {productUrl && LinkComponent ? (
                            <LinkComponent href={productUrl}>
                                <Typography variant="h3" className="mb-1 hover:underline">
                                    {name}
                                </Typography>
                            </LinkComponent>
                        ) : (
                            <Typography variant="h3" className="mb-1">
                                {name}
                            </Typography>
                        )}
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

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {/* Quantity Controls */}
                    <div className="flex items-end gap-2">
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
                            className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                    <div className="ml-auto flex min-w-0 flex-col items-end">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.itemTotal}
                        </Typography>
                        <Typography variant="h3" className="text-right text-primary">
                            <Price price={total} />
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};
