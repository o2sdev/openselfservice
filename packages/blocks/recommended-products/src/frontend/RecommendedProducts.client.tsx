'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useCallback, useTransition } from 'react';

import type { Models } from '@o2s/framework/modules';

import { toast } from '@o2s/ui/hooks/use-toast';

import { ProductCarousel } from '@o2s/ui/components/ProductCarousel';

import { sdk } from '../sdk';

import { RecommendedProductsPureProps } from './RecommendedProducts.types';

export const RecommendedProductsPure: React.FC<RecommendedProductsPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { products, labels } = component;

    const [isAddingToCart, startAddToCartTransition] = useTransition();

    const handleAddToCart = useCallback(
        (sku: string, currency: Models.Price.Currency, variantId?: string) => {
            startAddToCartTransition(async () => {
                try {
                    const cartId = localStorage.getItem('cartId');
                    const result = await sdk.cart.addCartItem(
                        {
                            cartId: cartId || undefined,
                            sku,
                            variantId,
                            quantity: 1,
                            currency,
                        },
                        { 'x-locale': locale },
                        accessToken,
                    );
                    if (!cartId && result?.id) {
                        localStorage.setItem('cartId', result.id);
                    }
                    toast({ description: labels.addToCartSuccess });
                } catch {
                    toast({ variant: 'destructive', description: labels.addToCartError });
                }
            });
        },
        [locale, accessToken, labels.addToCartSuccess, labels.addToCartError],
    );

    if (!products || products.length === 0) {
        return null;
    }

    return (
        <ProductCarousel
            products={products}
            title={labels.title}
            LinkComponent={LinkComponent}
            addToCartLabel={labels.addToCartLabel}
            onAddToCart={labels.addToCartLabel ? handleAddToCart : undefined}
            isAddingToCart={isAddingToCart}
            keyboardControlMode="managed"
            carouselConfig={{ loop: true }}
        />
    );
};
