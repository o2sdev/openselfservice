'use client';

import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CartSummaryProps } from './CartSummary.types';

export const CartSummary: React.FC<Readonly<CartSummaryProps>> = ({
    subtotal,
    tax,
    total,
    discountTotal,
    shippingMethod,
    promotions,
    labels,
    LinkComponent,
    checkoutButton,
    continueShopping,
    isCheckoutLoading = false,
    onCheckoutClick,
    loadingLabel = 'Loading...',
}) => {
    const hasDiscount = discountTotal && discountTotal.value > 0;
    const hasShipping = !!shippingMethod;
    const isFreeShipping = promotions?.some((p) => p.type === 'FREE_SHIPPING');

    return (
        <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
            <Typography variant="h2">{labels.title}</Typography>

            <div className="flex flex-col gap-4">
                {/* Subtotal + Tax + optional Discount + optional Shipping */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.subtotalLabel}
                        </Typography>
                        <Typography variant="body">
                            <Price price={subtotal} />
                        </Typography>
                    </div>

                    {/* Tax */}
                    <div className="flex items-center justify-between">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.taxLabel}
                        </Typography>
                        <Typography variant="body">
                            <Price price={tax} />
                        </Typography>
                    </div>

                    {/* Discount */}
                    {hasDiscount && (
                        <div className="flex items-center justify-between">
                            <Typography variant="small" className="text-muted-foreground">
                                {labels.discountLabel ?? 'Discount'}
                            </Typography>
                            <Typography variant="body" className="text-green-600">
                                -<Price price={discountTotal} />
                            </Typography>
                        </div>
                    )}

                    {/* Shipping */}
                    {hasShipping && (
                        <div className="flex items-center justify-between">
                            <Typography variant="small" className="text-muted-foreground">
                                {labels.shippingLabel ?? 'Shipping'}
                                {shippingMethod.name && <span className="ml-1">({shippingMethod.name})</span>}
                            </Typography>
                            <Typography variant="body">
                                {isFreeShipping ? (
                                    <span className="text-green-600">{labels.freeLabel ?? 'Free'}</span>
                                ) : (
                                    <Price price={shippingMethod.total} />
                                )}
                            </Typography>
                        </div>
                    )}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex items-center justify-between">
                    <Typography variant="h3">{labels.totalLabel}</Typography>
                    <Typography variant="h2" className="text-primary">
                        <Price price={total} />
                    </Typography>
                </div>
            </div>

            {/* Checkout Button */}
            {checkoutButton && (
                <>
                    <Separator />
                    {onCheckoutClick ? (
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full"
                            disabled={isCheckoutLoading}
                            onClick={onCheckoutClick}
                        >
                            {isCheckoutLoading ? (
                                <>
                                    <DynamicIcon name="Loader2" size={20} className="mr-2 animate-spin" />
                                    {loadingLabel}
                                </>
                            ) : (
                                <>
                                    {checkoutButton.icon && (
                                        <DynamicIcon name={checkoutButton.icon} size={20} className="mr-2" />
                                    )}
                                    {checkoutButton.label}
                                </>
                            )}
                        </Button>
                    ) : checkoutButton.url ? (
                        <Button variant="default" size="lg" className="w-full" asChild>
                            {LinkComponent ? (
                                <LinkComponent href={checkoutButton.url} className="w-full">
                                    {checkoutButton.icon && (
                                        <DynamicIcon name={checkoutButton.icon} size={20} className="mr-2" />
                                    )}
                                    {checkoutButton.label}
                                </LinkComponent>
                            ) : (
                                <a href={checkoutButton.url}>
                                    {checkoutButton.icon && (
                                        <DynamicIcon name={checkoutButton.icon} size={20} className="mr-2" />
                                    )}
                                    {checkoutButton.label}
                                </a>
                            )}
                        </Button>
                    ) : null}
                </>
            )}

            {/* Continue Shopping */}
            {continueShopping && continueShopping.url && (
                <>
                    {!checkoutButton && <Separator />}
                    <Button variant="outline" size="lg" className="w-full" asChild>
                        {LinkComponent ? (
                            <LinkComponent href={continueShopping.url} className="w-full">
                                {continueShopping.label}
                            </LinkComponent>
                        ) : (
                            <a href={continueShopping.url}>{continueShopping.label}</a>
                        )}
                    </Button>
                </>
            )}
        </div>
    );
};
