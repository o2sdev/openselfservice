'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';

import { toast } from '@o2s/ui/hooks/use-toast';

import { CartItem } from '@o2s/ui/components/Cart/CartItem';
import { CartPromoCode } from '@o2s/ui/components/Cart/CartPromoCode';
import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

import type { Model } from '../api-harmonization/cart.client';
import { sdk } from '../sdk';

import { CartPureProps } from './Cart.types';

const CART_ID_KEY = 'cartId';

export const CartPure: React.FC<Readonly<CartPureProps>> = ({
    locale,
    accessToken,
    routing,
    title,
    subtitle,
    taxRate,
    defaultCurrency,
    labels,
    actions,
    summaryLabels,
    checkoutButton,
    continueShopping,
    empty,
    items: initialItems,
    totals: initialTotals,
    promotions: initialPromotions,
    discountTotal: initialDiscountTotal,
    shippingMethod: initialShippingMethod,
    promoCodeLabels,
    id,
    __typename,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const [cartItems, setCartItems] = useState<Model.CartBlockItem[]>(initialItems ?? []);
    const [cartTotals, setCartTotals] = useState<Model.CartBlockTotals>(initialTotals);
    const [cartPromotions, setCartPromotions] = useState<Model.CartBlock['promotions']>(initialPromotions);
    const [cartDiscountTotal, setCartDiscountTotal] = useState<Model.CartBlock['discountTotal']>(initialDiscountTotal);
    const [cartShippingMethod, setCartShippingMethod] =
        useState<Model.CartBlock['shippingMethod']>(initialShippingMethod);
    const [isLoading, setIsLoading] = useState(false);
    const [isPromoLoading, setIsPromoLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    const refreshCart = async (cartId: string): Promise<void> => {
        const data = await sdk.blocks.getCart({ id, cartId }, { 'x-locale': locale }, accessToken);
        setCartItems(data.items ?? []);
        setCartTotals(data.totals);
        setCartPromotions(data.promotions);
        setCartDiscountTotal(data.discountTotal);
        setCartShippingMethod(data.shippingMethod);
    };

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsLoading(true);
        (async () => {
            try {
                await refreshCart(cartId);
            } catch (error) {
                const status = (error as { status?: number }).status;
                if (status === 404 || status === 401) {
                    localStorage.removeItem(CART_ID_KEY);
                }
            } finally {
                setIsLoading(false);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, locale, accessToken]);

    const updateQuantity = (itemId: string, newQuantity: number) => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        startTransition(async () => {
            try {
                await sdk.cart.updateCartItem(
                    cartId,
                    itemId,
                    { quantity: newQuantity },
                    { 'x-locale': locale },
                    accessToken,
                );
                await refreshCart(cartId);
            } catch {
                toast({ variant: 'destructive', title: labels.errorMessage });
            }
        });
    };

    const applyPromotion = async (code: string): Promise<void> => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) throw new Error('No cart');

        setIsPromoLoading(true);
        try {
            await sdk.cart.applyPromotion(cartId, { code }, { 'x-locale': locale }, accessToken);
            await refreshCart(cartId);
        } finally {
            setIsPromoLoading(false);
        }
    };

    const removePromotion = async (code: string): Promise<void> => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsPromoLoading(true);
        try {
            await sdk.cart.removePromotion(cartId, code, { 'x-locale': locale }, accessToken);
            await refreshCart(cartId);
        } finally {
            setIsPromoLoading(false);
        }
    };

    const removeItem = (itemId: string) => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        startTransition(async () => {
            try {
                await sdk.cart.removeCartItem(cartId, itemId, { 'x-locale': locale }, accessToken);
                await refreshCart(cartId);
            } catch {
                toast({ variant: 'destructive', title: labels.errorMessage });
            }
        });
    };

    if (!title || taxRate == null || !defaultCurrency || !labels || !actions || !summaryLabels || !empty) {
        return (
            <div className="w-full flex flex-col gap-4">
                {__typename}: {id}
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-2">
                    <Typography variant="h1">{title}</Typography>
                    {subtitle && (
                        <Typography variant="large" className="text-muted-foreground">
                            {subtitle}
                        </Typography>
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <Skeleton variant="rounded" className="h-32" />
                        <Skeleton variant="rounded" className="h-32" />
                        <Skeleton variant="rounded" className="h-32" />
                    </div>
                    <div className="lg:col-span-1">
                        <Skeleton variant="rounded" className="h-64" />
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0 && !isPending) {
        return (
            <div className="w-full flex flex-col gap-8 md:gap-12 items-center justify-center py-12">
                <DynamicIcon name="ShoppingCart" size={64} className="text-muted-foreground" />
                <Typography variant="h2">{empty.title}</Typography>
                <Typography variant="large" className="text-muted-foreground text-center max-w-md">
                    {empty.description}
                </Typography>
                {empty.continueShopping && (
                    <LinkComponent href={empty.continueShopping.path}>
                        <Button variant="default" size="lg">
                            {empty.continueShopping.label}
                        </Button>
                    </LinkComponent>
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
                <Typography variant="h1">{title}</Typography>
                {subtitle && (
                    <Typography variant="large" className="text-muted-foreground">
                        {subtitle}
                    </Typography>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 flex flex-col gap-4 relative">
                    {isPending && (
                        <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10 rounded-lg">
                            <DynamicIcon name="Loader2" size={32} className="animate-spin text-primary" />
                        </div>
                    )}
                    {cartItems.map((item) => {
                        const product = item.product ?? {
                            name: labels.unknownProductName,
                            subtitle: undefined,
                            image: undefined,
                        };

                        return (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                productId={item.productId}
                                productUrl={product.link}
                                name={product.name}
                                subtitle={product.subtitle}
                                image={product.image}
                                quantity={item.quantity}
                                price={item.price}
                                total={item.total}
                                labels={{
                                    itemTotal: labels.itemTotal,
                                    ...actions,
                                }}
                                onRemove={removeItem}
                                onQuantityChange={updateQuantity}
                                LinkComponent={LinkComponent}
                            />
                        );
                    })}
                </div>

                {/* Cart Summary + Promo Code */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <CartSummary
                        subtotal={cartTotals.subtotal}
                        tax={cartTotals.tax}
                        total={cartTotals.total}
                        discountTotal={cartDiscountTotal}
                        shippingMethod={cartShippingMethod}
                        promotions={cartPromotions}
                        labels={summaryLabels}
                        LinkComponent={LinkComponent}
                        checkoutButton={
                            checkoutButton
                                ? {
                                      url: checkoutButton.path,
                                      label: checkoutButton.label,
                                      icon: checkoutButton.icon,
                                  }
                                : undefined
                        }
                        continueShopping={
                            continueShopping
                                ? {
                                      url: continueShopping.path,
                                      label: continueShopping.label,
                                  }
                                : undefined
                        }
                    />
                    {promoCodeLabels && (
                        <CartPromoCode
                            promotions={cartPromotions}
                            labels={promoCodeLabels}
                            isLoading={isPromoLoading}
                            onApply={applyPromotion}
                            onRemove={removePromotion}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
