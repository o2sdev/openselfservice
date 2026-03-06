'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { Mappings, Utils } from '@o2s/utils.frontend';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { OrderConfirmationPureProps } from './OrderConfirmation.types';

const formatStreetAddress = (addr: { streetName: string; streetNumber?: string; apartment?: string }) => {
    let street = addr.streetName;
    if (addr.streetNumber) street += ` ${addr.streetNumber}`;
    if (addr.apartment) street += `, ${addr.apartment}`;
    return street;
};

export const OrderConfirmationPure: React.FC<Readonly<OrderConfirmationPureProps>> = ({
    locale,
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
    discountLabel,
    shippingLabel,
    totalLabel,
    shippingSection,
    billingSection,
    message,
    buttons,
    viewOrdersPath,
    continueShoppingPath,
    statusLabels,
    order,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    if (!title || !order) {
        return null;
    }

    const shippingAddress = order.shippingAddress;
    const billingAddress = order.billingAddress;
    const shippingMethods = order.shippingMethods;

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                        <DynamicIcon name="CircleCheckBig" size={40} className="text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Typography variant="h1">{title}</Typography>
                        <div className="flex flex-wrap items-center gap-2">
                            <Typography variant="body" className="text-muted-foreground">
                                {orderNumberLabel} <strong>{order.id}</strong>
                            </Typography>
                            {order.status && (
                                <Badge
                                    variant={
                                        Mappings.OrderBadge.orderBadgeVariants[
                                            order.status as keyof typeof Mappings.OrderBadge.orderBadgeVariants
                                        ] ?? 'outline'
                                    }
                                >
                                    {statusLabels?.[order.status] ?? order.status}
                                </Badge>
                            )}
                        </div>
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
                <div className="flex flex-col gap-3">
                    <Typography variant="h2">
                        {productsTitle}
                        {productsCountLabel && ` (${order.items.total})`}
                    </Typography>
                    <div className="flex flex-col gap-1">
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

                {shippingSection && (shippingAddress || (shippingMethods && shippingMethods.length > 0)) && (
                    <>
                        <Separator />
                        <div className="flex flex-col gap-3">
                            <Typography variant="h2">{shippingSection.title}</Typography>
                            <div className="flex flex-col gap-1">
                                {shippingAddress && (
                                    <>
                                        {shippingSection.addressLabel && (
                                            <Typography variant="small" className="font-bold text-muted-foreground">
                                                {shippingSection.addressLabel}
                                            </Typography>
                                        )}
                                        <Typography variant="small">{formatStreetAddress(shippingAddress)}</Typography>
                                        <Typography variant="small">
                                            {shippingAddress.postalCode} {shippingAddress.city}
                                        </Typography>
                                        <Typography variant="small">
                                            {Utils.FormatCountry.formatCountryCode(shippingAddress.country, locale)}
                                        </Typography>
                                        {(shippingAddress.firstName || shippingAddress.lastName) && (
                                            <Typography variant="small" className="mt-2">
                                                {[shippingAddress.firstName, shippingAddress.lastName]
                                                    .filter(Boolean)
                                                    .join(' ')}
                                            </Typography>
                                        )}
                                        {shippingAddress.phone && (
                                            <Typography variant="small">{shippingAddress.phone}</Typography>
                                        )}
                                    </>
                                )}
                                {shippingMethods && shippingMethods.length > 0 && (
                                    <Typography variant="small" className="mt-2">
                                        <strong>{shippingSection.methodLabel}</strong>{' '}
                                        {shippingMethods.map((m) => m.name).join(', ')}
                                    </Typography>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {billingSection && billingAddress && (
                    <>
                        <Separator />
                        <div className="flex flex-col gap-3">
                            <Typography variant="h2">{billingSection.title}</Typography>
                            <div className="flex flex-col gap-1">
                                {billingSection.addressLabel && (
                                    <Typography variant="small" className="font-bold text-muted-foreground">
                                        {billingSection.addressLabel}
                                    </Typography>
                                )}
                                {billingAddress.companyName && (
                                    <Typography variant="small">{billingAddress.companyName}</Typography>
                                )}
                                {billingAddress.taxId && (
                                    <Typography variant="small" className="text-muted-foreground">
                                        {billingSection.taxIdLabel ? `${billingSection.taxIdLabel}: ` : ''}
                                        {billingAddress.taxId}
                                    </Typography>
                                )}
                                <Typography variant="small">{formatStreetAddress(billingAddress)}</Typography>
                                <Typography variant="small">
                                    {billingAddress.postalCode} {billingAddress.city}
                                </Typography>
                                <Typography variant="small">
                                    {Utils.FormatCountry.formatCountryCode(billingAddress.country, locale)}
                                </Typography>
                                {(billingAddress.firstName || billingAddress.lastName) && (
                                    <Typography variant="small" className="mt-2">
                                        {[billingAddress.firstName, billingAddress.lastName].filter(Boolean).join(' ')}
                                    </Typography>
                                )}
                                {(billingAddress.email || order.email) && (
                                    <Typography variant="small">{billingAddress.email || order.email}</Typography>
                                )}
                                {billingAddress.phone && (
                                    <Typography variant="small">{billingAddress.phone}</Typography>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <Separator />

                {/* Summary Section */}
                <div className="flex flex-col gap-3">
                    <Typography variant="h2">{summaryTitle}</Typography>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <Typography variant="small" className="text-muted-foreground">
                                {subtotalLabel}
                            </Typography>
                            <Typography variant="small">
                                <Price price={order.subtotal} />
                            </Typography>
                        </div>
                        {order.tax && (
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {taxLabel}
                                </Typography>
                                <Typography variant="small">
                                    <Price price={order.tax} />
                                </Typography>
                            </div>
                        )}
                        {shippingLabel && order.shippingTotal && order.shippingTotal.value > 0 && (
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {shippingLabel}
                                </Typography>
                                <Typography variant="small">
                                    <Price price={order.shippingTotal} />
                                </Typography>
                            </div>
                        )}
                        {discountLabel && order.discountTotal && order.discountTotal.value > 0 && (
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {discountLabel}
                                </Typography>
                                <Typography variant="small" className="text-green-600">
                                    -<Price price={order.discountTotal} />
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
                        {(order.email || billingAddress?.email) && (
                            <>
                                {' '}
                                <strong>{order.email || billingAddress?.email}</strong>
                            </>
                        )}
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
