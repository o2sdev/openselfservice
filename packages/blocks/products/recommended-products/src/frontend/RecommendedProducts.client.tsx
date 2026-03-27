'use client';

import { eventBus } from '@o2s/ui/event-bus';
import { createNavigation } from 'next-intl/navigation';
import React, { useCallback, useTransition } from 'react';

import { Utils } from '@o2s/utils.frontend';

import type { Models } from '@o2s/framework/modules';

import { toast } from '@o2s/ui/hooks/use-toast';

import { ProductCarousel } from '@o2s/ui/components/Products/ProductCarousel';

import { ToastAction } from '@o2s/ui/elements/toast';

import { sdk } from '../sdk';

import { RecommendedProductsPureProps } from './RecommendedProducts.types';

export const RecommendedProductsPure: React.FC<RecommendedProductsPureProps> = ({
    locale,
    accessToken,
    routing,
    cartIdLocalStorageKey,
    ...component
}) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const { products, labels } = component;

    const [isAddingToCart, startAddToCartTransition] = useTransition();

    const handleAddToCart = useCallback(
        (sku: string, currency: Models.Price.Currency, variantId?: string) => {
            const productName = products.find((p) => p.sku === sku)?.name ?? sku;
            startAddToCartTransition(async () => {
                try {
                    const cartId = localStorage.getItem(cartIdLocalStorageKey);
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
                        localStorage.setItem(cartIdLocalStorageKey, result.id);
                    }
                    eventBus.emit('cart:changed', { cart: result });
                    toast({
                        description: Utils.StringReplace.reactStringReplace(labels.addToCartSuccess ?? '', {
                            productName,
                        }),
                        action:
                            labels.viewCartLabel && component.cartPath ? (
                                <ToastAction
                                    altText={labels.viewCartLabel}
                                    onClick={() => router.push(component.cartPath!)}
                                >
                                    {labels.viewCartLabel}
                                </ToastAction>
                            ) : undefined,
                    });
                } catch {
                    toast({ variant: 'destructive', description: labels.addToCartError });
                }
            });
        },
        [
            locale,
            accessToken,
            cartIdLocalStorageKey,
            labels.addToCartSuccess,
            labels.addToCartError,
            labels.viewCartLabel,
            component.cartPath,
            products,
            router,
        ],
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
