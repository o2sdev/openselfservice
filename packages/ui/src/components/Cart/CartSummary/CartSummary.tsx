'use client';

import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CartSummaryButton, CartSummaryProps } from './CartSummary.types';

const renderButton = (
    btn: CartSummaryButton,
    variant: 'default' | 'outline',
    LinkComponent: CartSummaryProps['LinkComponent'],
): React.ReactNode => {
    if (btn.action.type === 'submit') {
        return (
            <Button
                type="submit"
                form={btn.action.form}
                variant={variant}
                size="lg"
                className="w-full"
                disabled={btn.disabled}
            >
                {btn.icon && <DynamicIcon name={btn.icon} size={20} className="mr-2" />}
                {btn.label}
            </Button>
        );
    }

    return (
        <Button variant={variant} size="lg" className="w-full" asChild disabled={btn.disabled}>
            <LinkComponent href={btn.action.url} className="w-full">
                {btn.icon && <DynamicIcon name={btn.icon} size={20} className="mr-2" />}
                {btn.label}
            </LinkComponent>
        </Button>
    );
};

export const CartSummary: React.FC<Readonly<CartSummaryProps>> = ({
    subtotal,
    tax,
    total,
    discountTotal,
    shippingMethod,
    promotions,
    labels,
    LinkComponent,
    primaryButton,
    secondaryButton,
}) => {
    const hasDiscount = discountTotal && discountTotal.value > 0;
    const hasShipping = !!shippingMethod;
    const isFreeShipping = promotions?.some((p) => p.type === 'FREE_SHIPPING');

    return (
        <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
            <Typography variant="h2">{labels.title}</Typography>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between gap-4">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.subtotalLabel}
                        </Typography>
                        <Typography variant="body" className="whitespace-nowrap shrink-0">
                            <Price price={subtotal} />
                        </Typography>
                    </div>

                    <div className="flex justify-between gap-4">
                        <Typography variant="small" className="text-muted-foreground">
                            {labels.taxLabel}
                        </Typography>
                        <Typography variant="body" className="whitespace-nowrap shrink-0">
                            <Price price={tax} />
                        </Typography>
                    </div>

                    {hasDiscount && (
                        <div className="flex justify-between gap-4">
                            <Typography variant="small" className="text-muted-foreground">
                                {labels.discountLabel}
                            </Typography>
                            <Typography variant="body" className="text-green-600 whitespace-nowrap shrink-0">
                                -<Price price={discountTotal} />
                            </Typography>
                        </div>
                    )}

                    {hasShipping && (
                        <div className="flex justify-between gap-4">
                            <Typography variant="small" className="text-muted-foreground">
                                {labels.shippingLabel}
                                {shippingMethod.name && <span className="ml-1">({shippingMethod.name})</span>}
                            </Typography>
                            <Typography variant="body" className="whitespace-nowrap shrink-0">
                                {isFreeShipping ? (
                                    <span className="text-green-600">{labels.freeLabel}</span>
                                ) : (
                                    <Price price={shippingMethod.total} />
                                )}
                            </Typography>
                        </div>
                    )}
                </div>

                <Separator />

                <div className="flex justify-between gap-4">
                    <Typography variant="h3">{labels.totalLabel}</Typography>
                    <Typography variant="h2" className="text-primary whitespace-nowrap shrink-0">
                        <Price price={total} />
                    </Typography>
                </div>
            </div>

            {(primaryButton || secondaryButton) && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-3">
                        {primaryButton && renderButton(primaryButton, 'default', LinkComponent)}
                        {secondaryButton && renderButton(secondaryButton, 'outline', LinkComponent)}
                    </div>
                </>
            )}
        </div>
    );
};
