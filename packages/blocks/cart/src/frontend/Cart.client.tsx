'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';

import { Carts } from '@o2s/framework/modules';

import { toast } from '@o2s/ui/hooks/use-toast';

import { CartItem } from '@o2s/ui/components/Cart/CartItem';
import { CartPromoCode } from '@o2s/ui/components/Cart/CartPromoCode';
import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

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
    promoCodeLabels,
    id,
    __typename,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const [cart, setCart] = useState<Carts.Model.Cart | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPromoLoading, setIsPromoLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsLoading(true);
        (async () => {
            try {
                const data = await sdk.cart.getCart(cartId, { 'x-locale': locale }, accessToken);
                setCart(data);
            } catch (error) {
                const status = (error as { status?: number }).status;
                if (status === 404 || status === 401) {
                    localStorage.removeItem(CART_ID_KEY);
                }
            } finally {
                setIsLoading(false);
            }
        })();
    }, [id, locale, accessToken]);

    const updateQuantity = (itemId: string, newQuantity: number) => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        startTransition(async () => {
            try {
                const updated = await sdk.cart.updateCartItem(
                    cartId,
                    itemId,
                    { quantity: newQuantity },
                    { 'x-locale': locale },
                    accessToken,
                );
                setCart(updated);
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
            const updated = await sdk.cart.applyPromotion(cartId, { code }, { 'x-locale': locale }, accessToken);
            setCart(updated);
        } finally {
            setIsPromoLoading(false);
        }
    };

    const removePromotion = async (code: string): Promise<void> => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsPromoLoading(true);
        try {
            const updated = await sdk.cart.removePromotion(cartId, code, { 'x-locale': locale }, accessToken);
            setCart(updated);
        } finally {
            setIsPromoLoading(false);
        }
    };

    const removeItem = (itemId: string) => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        startTransition(async () => {
            try {
                const updated = await sdk.cart.removeCartItem(cartId, itemId, { 'x-locale': locale }, accessToken);
                setCart(updated);
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

    const zero = { value: 0, currency: defaultCurrency };

    if ((cart?.items.data.length ?? 0) === 0 && !isPending) {
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
                    {cart?.items.data.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            productId={item.product.id}
                            productUrl={item.product.link}
                            name={item.product.name}
                            subtitle={item.product.shortDescription}
                            image={item.product.image}
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
                    ))}
                </div>

                {/* Cart Summary + Promo Code */}
                <div className="lg:col-span-1 flex flex-col-reverse lg:flex-col gap-4">
                    <CartSummary
                        subtotal={cart?.subtotal ?? zero}
                        tax={cart?.taxTotal ?? zero}
                        total={cart?.total ?? zero}
                        discountTotal={cart?.discountTotal}
                        shippingMethod={
                            cart?.shippingMethod && cart.shippingTotal
                                ? { name: cart.shippingMethod.name, total: cart.shippingTotal }
                                : undefined
                        }
                        promotions={cart?.promotions}
                        labels={summaryLabels}
                        LinkComponent={LinkComponent}
                        primaryButton={
                            checkoutButton
                                ? {
                                      label: checkoutButton.label,
                                      icon: checkoutButton.icon,
                                      action: { type: 'link', url: checkoutButton.path },
                                  }
                                : undefined
                        }
                        secondaryButton={
                            continueShopping
                                ? {
                                      label: continueShopping.label,
                                      action: { type: 'link', url: continueShopping.path },
                                  }
                                : undefined
                        }
                    />
                    {promoCodeLabels && (
                        <CartPromoCode
                            promotions={cart?.promotions}
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
