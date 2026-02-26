'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState } from 'react';

import { Checkout } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '../sdk';

import { CheckoutSummaryPureProps } from './CheckoutSummary.types';

const CART_ID_KEY = 'cartId';

export const CheckoutSummaryPure: React.FC<Readonly<CheckoutSummaryPureProps>> = ({
    locale,
    accessToken,
    routing,
    title,
    subtitle,
    stepIndicator,
    sections,
    buttons,
    loading: loadingLabels,
    placeholders,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { toast } = useToast();

    const [summaryData, setSummaryData] = useState<Checkout.Model.CheckoutSummary | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsLoading(true);
        (async () => {
            try {
                const data = await sdk.checkout.getCheckoutSummary(cartId, { 'x-locale': locale }, accessToken);
                setSummaryData(data);
            } catch {
                // show empty state
            } finally {
                setIsLoading(false);
            }
        })();
    }, [locale, accessToken]);

    if (!title || !sections || !buttons) {
        return null;
    }

    const handleConfirm = async () => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsSubmitting(true);
        try {
            const result = await sdk.checkout.placeOrder(cartId, {}, { 'x-locale': locale }, accessToken);

            if (result.order?.id) {
                const redirectUrl = result.paymentRedirectUrl || `${buttons.confirm.path}/${result.order.id}`;
                window.location.href = redirectUrl;
                return;
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error instanceof Error ? error.message : undefined,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!title || !sections || !buttons) {
        return null;
    }

    const billingAddress = summaryData?.billingAddress;
    const shippingAddress = summaryData?.shippingAddress;
    const shippingMethod = summaryData?.shippingMethod;
    const paymentMethod = summaryData?.paymentMethod;
    const items = summaryData?.cart.items?.data ?? [];
    const totals = summaryData?.totals;
    const isFreeShipping = summaryData?.cart.promotions?.some((p) => p.type === 'FREE_SHIPPING');

    const formatStreetAddress = (addr: { streetName: string; streetNumber?: string; apartment?: string }) => {
        let street = addr.streetName;
        if (addr.streetNumber) street += ` ${addr.streetNumber}`;
        if (addr.apartment) street += `, ${addr.apartment}`;
        return street;
    };

    return (
        <div className="w-full flex flex-col gap-8">
            {stepIndicator && <StepIndicator steps={stepIndicator.steps} currentStep={stepIndicator.currentStep} />}
            <div className="flex flex-col gap-2">
                <Typography variant="h1">{title}</Typography>
                {subtitle && (
                    <Typography variant="large" className="text-muted-foreground">
                        {subtitle}
                    </Typography>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Order details */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Products */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.products.title}</Typography>
                        {isLoading ? (
                            <div className="flex flex-col gap-3">
                                <Skeleton className="h-24 w-full" />
                                <Skeleton className="h-24 w-full" />
                            </div>
                        ) : items.length > 0 ? (
                            <div className="flex flex-col gap-4">
                                {items.map((item) => {
                                    const product = item.product;
                                    const itemTotal = item.total;

                                    return (
                                        <div
                                            key={item.id}
                                            className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-lg border border-border"
                                        >
                                            {product?.image && (
                                                <div className="relative w-full sm:w-24 h-24 shrink-0 rounded-md overflow-hidden">
                                                    <Image
                                                        src={product.image.url}
                                                        alt={product.image.alt ?? product.name}
                                                        fill
                                                        sizes="96px"
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 flex flex-col gap-2">
                                                <Typography variant="h3">{product?.name}</Typography>
                                                <div className="flex items-end justify-between gap-4 h-full">
                                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                                        <span>
                                                            {sections.products.labels.quantity}: {item.quantity}
                                                        </span>
                                                        <span>
                                                            {sections.products.labels.price}:{' '}
                                                            <Price price={item.price} />
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <Typography variant="small" className="text-muted-foreground">
                                                            {sections.products.labels.total}
                                                        </Typography>
                                                        <Typography variant="h3" className="text-primary">
                                                            <Price price={itemTotal} />
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>

                    {/* Company data */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.company.title}</Typography>
                        {isLoading ? (
                            <Skeleton className="h-24 w-full" />
                        ) : billingAddress ? (
                            <div className="flex flex-col p-4 bg-card rounded-lg border border-border">
                                {billingAddress.companyName && (
                                    <Typography variant="small">
                                        <strong>{sections.company.companyNameLabel}: </strong>
                                        {billingAddress.companyName}
                                    </Typography>
                                )}
                                {billingAddress.taxId && (
                                    <Typography variant="small">
                                        <strong>{sections.company.taxIdLabel}: </strong>
                                        {billingAddress.taxId}
                                    </Typography>
                                )}
                                <div className="mt-2 pt-2 border-t border-border">
                                    {sections.company.addressLabel && (
                                        <Typography variant="small" className="mb-1 font-bold">
                                            {sections.company.addressLabel}
                                        </Typography>
                                    )}
                                    <Typography variant="small">{formatStreetAddress(billingAddress)}</Typography>
                                    <Typography variant="small">
                                        {billingAddress.postalCode} {billingAddress.city}
                                    </Typography>
                                    <Typography variant="small">{billingAddress.country}</Typography>
                                </div>
                            </div>
                        ) : (
                            <Typography variant="body">{placeholders?.companyData}</Typography>
                        )}
                    </div>

                    {/* Shipping address */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.shipping.title}</Typography>
                        {isLoading ? (
                            <Skeleton className="h-24 w-full" />
                        ) : shippingAddress ? (
                            <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                <div>
                                    {sections.shipping.addressLabel && (
                                        <Typography variant="small" className="mb-1 font-bold">
                                            {sections.shipping.addressLabel}
                                        </Typography>
                                    )}
                                    <Typography variant="small">{formatStreetAddress(shippingAddress)}</Typography>
                                    <Typography variant="small">
                                        {shippingAddress.postalCode} {shippingAddress.city}
                                    </Typography>
                                    <Typography variant="small">{shippingAddress.country}</Typography>
                                </div>
                                {shippingMethod && (
                                    <div className="mt-2 pt-2 border-t border-border">
                                        <Typography variant="small">
                                            <strong>{sections.shipping.methodLabel}</strong> {shippingMethod.name}
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Typography variant="body">{placeholders?.shippingAddress}</Typography>
                        )}
                    </div>

                    {/* Payment */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.billing.title}</Typography>
                        {isLoading ? (
                            <Skeleton className="h-12 w-full" />
                        ) : paymentMethod ? (
                            <div className="flex flex-col p-4 bg-card rounded-lg border border-border">
                                <Typography variant="small">
                                    <strong>{sections.billing.methodLabel}</strong> {paymentMethod.name}
                                </Typography>
                            </div>
                        ) : (
                            <Typography variant="body">{placeholders?.billingAddress}</Typography>
                        )}
                    </div>
                </div>

                {/* Right column - Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 flex flex-col gap-6 p-6 bg-card rounded-lg border border-border">
                        <Typography variant="h2">{sections.summary.title}</Typography>

                        {isLoading ? (
                            <div className="flex flex-col gap-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-6 w-full" />
                            </div>
                        ) : totals ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <Typography variant="small">{sections.summary.subtotalLabel}</Typography>
                                        <Typography variant="body">
                                            <Price price={totals.subtotal} />
                                        </Typography>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Typography variant="small">{sections.summary.taxLabel}</Typography>
                                        <Typography variant="body">
                                            <Price price={totals.tax} />
                                        </Typography>
                                    </div>
                                    {totals.discount.value > 0 && sections.summary.discountLabel && (
                                        <div className="flex items-center justify-between">
                                            <Typography variant="small">{sections.summary.discountLabel}</Typography>
                                            <Typography variant="body" className="text-green-600">
                                                -<Price price={totals.discount} />
                                            </Typography>
                                        </div>
                                    )}
                                    {shippingMethod && (
                                        <div className="flex items-center justify-between">
                                            <Typography variant="small">{sections.summary.shippingLabel}</Typography>
                                            <Typography variant="body">
                                                {isFreeShipping ? (
                                                    <span className="text-green-600">{sections.summary.freeLabel}</span>
                                                ) : (
                                                    <Price price={totals.shipping} />
                                                )}
                                            </Typography>
                                        </div>
                                    )}
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <Typography variant="h3">{sections.summary.totalLabel}</Typography>
                                    <Typography variant="h2" className="text-primary">
                                        <Price price={totals.total} />
                                    </Typography>
                                </div>
                            </div>
                        ) : null}

                        {sections.summary.notesTitle && summaryData?.notes && (
                            <>
                                <Separator />
                                <div className="flex flex-col gap-2">
                                    <Typography variant="h3">{sections.summary.notesTitle}</Typography>
                                    <Typography variant="small" className="text-muted-foreground">
                                        {summaryData.notes}
                                    </Typography>
                                </div>
                            </>
                        )}

                        <Separator />

                        <div className="flex flex-col gap-3">
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full"
                                onClick={handleConfirm}
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting ? (
                                    <>
                                        <DynamicIcon name="Loader2" size={20} className="mr-2 animate-spin" />
                                        {loadingLabels?.confirming}
                                    </>
                                ) : (
                                    buttons.confirm.label
                                )}
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full">
                                <LinkComponent href={buttons.back.path}>{buttons.back.label}</LinkComponent>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
