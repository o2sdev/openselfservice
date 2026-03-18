'use client';

import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/Media/DynamicIcon';
import { Price } from '@o2s/ui/components/Products/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

import { CartSummaryButton, CartSummaryProps } from './CartSummary.types';

const renderButton = (
    btn: CartSummaryButton,
    variant: 'default' | 'outline',
    LinkComponent?: CartSummaryProps['LinkComponent'],
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

    if (btn.action.type === 'click') {
        return (
            <Button variant={variant} size="lg" className="w-full" onClick={btn.action.onClick} disabled={btn.disabled}>
                {btn.icon && <DynamicIcon name={btn.icon} size={20} className="mr-2" />}
                {btn.label}
            </Button>
        );
    }

    if (!LinkComponent) return null;

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
    shippingTotal,
    promotions,
    notes,
    labels,
    LinkComponent,
    primaryButton,
    secondaryButton,
}) => {
    const hasDiscount = discountTotal && discountTotal.value > 0;
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

                    {shippingTotal && (
                        <div className="flex justify-between gap-4">
                            <Typography variant="small" className="text-muted-foreground">
                                {labels.shippingLabel}
                            </Typography>
                            <Typography variant="body" className="whitespace-nowrap shrink-0">
                                {isFreeShipping ? (
                                    <span className="text-green-600">{labels.freeLabel}</span>
                                ) : (
                                    <Price price={shippingTotal} />
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

            {promotions && promotions.length > 0 && labels.activePromoCodesTitle && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-2">
                        <Typography variant="h3">{labels.activePromoCodesTitle}</Typography>
                        <ul className="flex flex-col gap-2 list-none">
                            {promotions.map((promo) => (
                                <li
                                    key={promo.code}
                                    className="flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 dark:bg-green-950/20"
                                >
                                    <DynamicIcon name="Tag" size={14} className="shrink-0 text-green-600" />
                                    <Typography variant="small" className="text-green-600">
                                        {promo.code}
                                        {promo.name && ` — ${promo.name}`}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}

            {notes && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-2">
                        <Typography variant="h3">{notes.title}</Typography>
                        <Typography variant="small" className="text-muted-foreground">
                            {notes.content}
                        </Typography>
                    </div>
                </>
            )}

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

export const CartSummarySkeleton: React.FC = () => (
    <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
    </div>
);
