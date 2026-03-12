'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';

import { Utils } from '@o2s/utils.frontend';

import { Checkout } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { CartSummary, CartSummarySkeleton } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';

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
    errors,
    cartPath,
    loading: loadingLabels,
    placeholders,
}) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const { toast } = useToast();

    const [summaryData, setSummaryData] = useState<Checkout.Model.CheckoutSummary | undefined>();
    const [isInitialLoadPending, startInitialLoadTransition] = useTransition();
    const [isSubmitPending, startSubmitTransition] = useTransition();

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) {
            toast({ description: errors.cartNotFound, variant: 'destructive' });
            router.replace(cartPath);
            return;
        }

        startInitialLoadTransition(async () => {
            try {
                const data = await sdk.checkout.getCheckoutSummary(cartId, { 'x-locale': locale }, accessToken);
                setSummaryData(data);
            } catch (error) {
                const err = error as { status?: number; response?: { status?: number } };
                const status = err.status ?? err.response?.status;
                if (status === 401 || status === 404) {
                    toast({ description: errors.cartNotFound, variant: 'destructive' });
                    router.replace(cartPath);
                } else {
                    toast({ description: errors.loadError, variant: 'destructive' });
                }
            }
        });
    }, [locale, accessToken, toast, errors.cartNotFound, errors.loadError, router, cartPath]);

    const handleConfirm = () => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) {
            toast({ description: errors.cartNotFound, variant: 'destructive' });
            router.replace(cartPath);
            return;
        }

        startSubmitTransition(async () => {
            try {
                const email = summaryData?.billingAddress?.email || summaryData?.email;
                const result = await sdk.checkout.placeOrder(cartId, { email }, { 'x-locale': locale }, accessToken);

                if (result.order?.id) {
                    const redirectUrl = result.paymentRedirectUrl || `${buttons.confirm.path}/${result.order.id}`;
                    localStorage.removeItem(CART_ID_KEY);
                    window.location.href = redirectUrl;
                    return;
                }
            } catch {
                toast({
                    variant: 'destructive',
                    description: errors.placeOrderError,
                });
            }
        });
    };

    const billingAddress = summaryData?.billingAddress;
    const shippingAddress = summaryData?.shippingAddress;
    const shippingMethod = summaryData?.shippingMethod;
    const paymentMethod = summaryData?.paymentMethod;
    const items = summaryData?.cart.items?.data ?? [];
    const totals = summaryData?.totals;
    const promotions = summaryData?.cart.promotions ?? [];
    const { formatStreetAddress } = Utils.FormatAddress;

    return (
        <div className="w-full flex flex-col gap-8">
            <StepIndicator steps={stepIndicator.steps} currentStep={stepIndicator.currentStep} />
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
                        {isInitialLoadPending ? (
                            <div className="flex flex-col gap-3">
                                <Skeleton className="h-24 w-full" />
                                <Skeleton className="h-24 w-full" />
                            </div>
                        ) : items.length > 0 ? (
                            <ul className="flex flex-col gap-4">
                                {items.map((item) => {
                                    const product = item.product;
                                    const itemTotal = item.total;

                                    return (
                                        <li
                                            key={item.id}
                                            className="flex flex-row gap-4 p-4 bg-card rounded-lg border border-border"
                                        >
                                            {product?.image && (
                                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-md overflow-hidden bg-muted">
                                                    <Image
                                                        src={product.image.url}
                                                        alt={product.image.alt ?? product.name}
                                                        fill
                                                        sizes="(max-width: 640px) 96px, 128px"
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1 flex flex-col gap-2">
                                                <Typography variant="h3">{product?.name}</Typography>
                                                <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 h-full">
                                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                                        <span>
                                                            {sections.products.labels.quantity}: {item.quantity}
                                                        </span>
                                                        <span className="whitespace-nowrap">
                                                            {sections.products.labels.price}:{' '}
                                                            <Price price={item.price} />
                                                        </span>
                                                    </div>
                                                    <div className="ml-auto flex flex-col items-end shrink-0">
                                                        <Typography variant="small" className="text-muted-foreground">
                                                            {sections.products.labels.total}
                                                        </Typography>
                                                        <Typography
                                                            variant="h3"
                                                            className="text-primary whitespace-nowrap"
                                                        >
                                                            <Price price={itemTotal} />
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                    </div>

                    {/* Company data */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.company.title}</Typography>
                        {isInitialLoadPending ? (
                            <Skeleton className="h-24 w-full" />
                        ) : billingAddress ? (
                            <div className="flex flex-col p-4 bg-card rounded-lg border border-border">
                                {(billingAddress.firstName || billingAddress.lastName) && (
                                    <Typography variant="small">
                                        {[billingAddress.firstName, billingAddress.lastName].filter(Boolean).join(' ')}
                                    </Typography>
                                )}
                                {(billingAddress.email || summaryData?.email) && (
                                    <Typography variant="small">
                                        {billingAddress.email || summaryData?.email}
                                    </Typography>
                                )}
                                {billingAddress.phone && (
                                    <Typography variant="small">{billingAddress.phone}</Typography>
                                )}
                                {billingAddress.companyName && (
                                    <Typography variant="small">{billingAddress.companyName}</Typography>
                                )}
                                {billingAddress.taxId && (
                                    <Typography variant="small">
                                        <strong>{sections.company.taxIdLabel}: </strong>
                                        {billingAddress.taxId}
                                    </Typography>
                                )}
                            </div>
                        ) : (
                            <Typography variant="body">{placeholders.companyData}</Typography>
                        )}
                    </div>

                    {/* Shipping address */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.shipping.title}</Typography>
                        {isInitialLoadPending ? (
                            <Skeleton className="h-24 w-full" />
                        ) : shippingAddress ? (
                            <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                <div>
                                    <Typography variant="small" className="mb-1 font-bold">
                                        {sections.shipping.addressLabel}
                                    </Typography>
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
                            <Typography variant="body">{placeholders.shippingAddress}</Typography>
                        )}
                    </div>

                    {/* Payment */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.billing.title}</Typography>
                        {isInitialLoadPending ? (
                            <Skeleton className="h-24 w-full" />
                        ) : billingAddress || paymentMethod ? (
                            <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                {billingAddress && (
                                    <div>
                                        <Typography variant="small" className="mb-1 font-bold">
                                            {sections.company.addressLabel}
                                        </Typography>
                                        <Typography variant="small">{formatStreetAddress(billingAddress)}</Typography>
                                        <Typography variant="small">
                                            {billingAddress.postalCode} {billingAddress.city}
                                        </Typography>
                                        <Typography variant="small">
                                            {Utils.FormatCountry.formatCountryCode(billingAddress.country, locale)}
                                        </Typography>
                                    </div>
                                )}
                                {paymentMethod && (
                                    <div className={billingAddress ? 'mt-2 pt-2 border-t border-border' : ''}>
                                        <Typography variant="small">
                                            <strong>{sections.billing.methodLabel}</strong> {paymentMethod.name}
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Typography variant="body">{placeholders.billingAddress}</Typography>
                        )}
                    </div>
                </div>

                {/* Right column - Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6">
                        {isInitialLoadPending ? (
                            <CartSummarySkeleton />
                        ) : totals ? (
                            <CartSummary
                                subtotal={totals.subtotal}
                                tax={totals.tax}
                                total={totals.total}
                                discountTotal={totals.discount}
                                shippingTotal={shippingMethod ? totals.shipping : undefined}
                                promotions={promotions}
                                notes={
                                    summaryData?.notes
                                        ? { title: sections.summary.notesTitle, content: summaryData.notes }
                                        : undefined
                                }
                                labels={{
                                    title: sections.summary.title,
                                    subtotalLabel: sections.summary.subtotalLabel,
                                    taxLabel: sections.summary.taxLabel,
                                    totalLabel: sections.summary.totalLabel,
                                    discountLabel: sections.summary.discountLabel,
                                    shippingLabel: sections.summary.shippingLabel,
                                    freeLabel: sections.summary.freeLabel,
                                    activePromoCodesTitle: sections.summary.activePromoCodesTitle,
                                }}
                                primaryButton={{
                                    label: isSubmitPending ? loadingLabels.confirming : buttons.confirm.label,
                                    icon: isSubmitPending ? 'Loader2' : undefined,
                                    disabled: isSubmitPending || isInitialLoadPending,
                                    action: { type: 'click', onClick: handleConfirm },
                                }}
                                secondaryButton={{
                                    label: buttons.back.label,
                                    action: { type: 'link', url: buttons.back.path },
                                }}
                                LinkComponent={LinkComponent}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
