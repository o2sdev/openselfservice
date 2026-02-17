'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { OrderConfirmationPureProps } from './OrderConfirmation.types';

export const OrderConfirmationPure: React.FC<Readonly<OrderConfirmationPureProps>> = ({
    locale: _locale,
    accessToken: _accessToken,
    routing,
    orderId: _orderId,
    title,
    subtitle,
    orderNumberLabel,
    productsTitle,
    productsCountLabel,
    summaryTitle,
    subtotalLabel,
    taxLabel,
    totalLabel,
    message,
    buttons,
    viewOrdersPath,
    continueShoppingPath,
    order,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    if (!title || !order) {
        return null;
    }

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                        <DynamicIcon name="CircleCheckBig" size={40} className="text-green-500" />
                    </div>
                    <div>
                        <Typography variant="h1">{title}</Typography>
                        <Typography variant="body" className="text-muted-foreground mt-1">
                            {orderNumberLabel} <strong>{order.id}</strong>
                        </Typography>
                        {subtitle && (
                            <Typography variant="body" className="text-muted-foreground mt-1">
                                {subtitle}
                            </Typography>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
                {/* Products Section */}
                <div className="flex flex-col gap-4">
                    <Typography variant="h2">
                        {productsTitle}
                        {productsCountLabel && ` (${order.items.total})`}
                    </Typography>
                    <div className="flex flex-col gap-2">
                        {order.items.data.map((item) => (
                            <div key={item.id} className="flex items-center justify-between text-sm">
                                <span>
                                    {item.productName ?? item.productId} × {item.quantity}
                                </span>
                                <Price price={item.total} />
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Summary Section */}
                <div className="flex flex-col gap-4">
                    <Typography variant="h2">{summaryTitle}</Typography>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <Typography variant="small" className="text-muted-foreground">
                                {subtotalLabel}
                            </Typography>
                            <Typography variant="body">
                                <Price price={order.subtotal} />
                            </Typography>
                        </div>
                        {order.tax && (
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {taxLabel}
                                </Typography>
                                <Typography variant="body">
                                    <Price price={order.tax} />
                                </Typography>
                            </div>
                        )}
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <Typography variant="h3">{totalLabel}</Typography>
                        <Typography variant="h2" className="text-primary">
                            <Price price={order.total} />
                        </Typography>
                    </div>
                </div>
            </div>

            {message && (
                <div className="rounded-lg bg-muted/50 p-4 flex items-start gap-3">
                    <DynamicIcon name="Info" size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                    <Typography variant="small" className="text-muted-foreground">
                        {message}
                    </Typography>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                    <LinkComponent href={continueShoppingPath}>{buttons.continueShopping}</LinkComponent>
                </Button>
                <Button asChild variant="default" className="w-full sm:w-auto">
                    <LinkComponent href={viewOrdersPath}>{buttons.viewOrders}</LinkComponent>
                </Button>
            </div>
        </div>
    );
};
