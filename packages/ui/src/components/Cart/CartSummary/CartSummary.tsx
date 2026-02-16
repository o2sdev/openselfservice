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
    labels,
    LinkComponent,
    checkoutButton,
    continueShopping,
    isCheckoutLoading = false,
    onCheckoutClick,
    loadingLabel = 'Loading...',
}) => {
    return (
        <div className="sticky top-6 flex flex-col gap-6 p-6 bg-card rounded-lg border border-border">
            <Typography variant="h2">{labels.title}</Typography>

            <div className="flex flex-col gap-4">
                {/* Subtotal */}
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
