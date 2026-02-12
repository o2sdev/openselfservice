'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState } from 'react';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Label } from '@o2s/ui/elements/label';
import { Separator } from '@o2s/ui/elements/separator';
import { Textarea } from '@o2s/ui/elements/textarea';
import { Typography } from '@o2s/ui/elements/typography';

import { CheckoutDataFromStorage, CheckoutSummaryPureProps } from './CheckoutSummary.types';

export const CheckoutSummaryPure: React.FC<Readonly<CheckoutSummaryPureProps>> = ({
    locale: _locale,
    accessToken: _accessToken,
    routing,
    onConfirm,
    title,
    subtitle,
    stepIndicator,
    sections,
    buttons,
    loading: loadingLabels,
    placeholders,
    items,
    totals,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notes, setNotes] = useState({ comment: '', specialInstructions: '' });

    const [checkoutData, setCheckoutData] = useState<CheckoutDataFromStorage>({});

    useEffect(() => {
        const companyData = localStorage.getItem('checkoutCompanyData');
        const shippingAddress = localStorage.getItem('checkoutShippingAddress');
        const billingPayment = localStorage.getItem('checkoutBillingPayment');

        setCheckoutData({
            companyData: companyData ? JSON.parse(companyData) : undefined,
            shippingAddress: shippingAddress ? JSON.parse(shippingAddress) : undefined,
            billingPayment: billingPayment ? JSON.parse(billingPayment) : undefined,
        });
    }, []);

    const handleConfirm = async () => {
        if (!onConfirm) return;
        setIsSubmitting(true);
        try {
            const result = await onConfirm({
                cartItems: items,
                checkoutData,
                notes,
            });

            if (result.success) {
                // Future: API will return orderId/redirectUrl - then redirect to OrderConfirmation page
                console.log('confirmation');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error ?? 'Failed to place order',
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error instanceof Error ? error.message : 'Failed to place order',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!title || !sections || !buttons || !items || !totals) {
        return null;
    }

    const ph = placeholders ?? {
        companyData: 'Company data will be displayed here',
        shippingAddress: 'Shipping address will be displayed here',
        billingAddress: 'Billing address will be displayed here',
        sameAsCompanyAddress: 'Shipping address is same as company address',
        sameAsShippingAddress: 'Billing address is same as shipping address',
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
                    <div className="flex flex-col gap-4">
                        <Typography variant="h2">{sections.products.title}</Typography>
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
                                            <Typography variant="h3">{product?.name ?? 'Product'}</Typography>
                                            <div className="flex items-end justify-between gap-4 h-full">
                                                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                                    <span>
                                                        {sections.products.labels.quantity}: {item.quantity}
                                                    </span>
                                                    <span>
                                                        {sections.products.labels.price}: <Price price={item.price} />
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
                    </div>

                    <Separator />

                    {/* Company data */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.company.title}</Typography>
                        {checkoutData.companyData ? (
                            <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                <Typography variant="body">
                                    <strong>{sections.company.companyNameLabel ?? 'Company'}: </strong>
                                    {checkoutData.companyData.companyName}
                                </Typography>
                                <Typography variant="body">
                                    {sections.company.nipLabel ?? 'NIP'}: {checkoutData.companyData.nip}
                                </Typography>
                                <div className="mt-2 pt-2 border-t border-border">
                                    {sections.company.addressLabel && (
                                        <Typography variant="small" className="text-muted-foreground mb-1">
                                            {sections.company.addressLabel}
                                        </Typography>
                                    )}
                                    <Typography variant="body">{checkoutData.companyData.street}</Typography>
                                    <Typography variant="body">
                                        {checkoutData.companyData.postalCode} {checkoutData.companyData.city}
                                    </Typography>
                                    <Typography variant="body">{checkoutData.companyData.country}</Typography>
                                </div>
                            </div>
                        ) : (
                            <Typography variant="body" className="text-muted-foreground">
                                {ph.companyData}
                            </Typography>
                        )}
                    </div>

                    {/* Shipping address */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.shipping.title}</Typography>
                        {checkoutData.shippingAddress ? (
                            checkoutData.shippingAddress.sameAsCompanyAddress ? (
                                <Typography variant="body" className="text-muted-foreground">
                                    {ph.sameAsCompanyAddress}
                                </Typography>
                            ) : (
                                <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                    <Typography variant="body">{checkoutData.shippingAddress.street}</Typography>
                                    <Typography variant="body">
                                        {checkoutData.shippingAddress.postalCode} {checkoutData.shippingAddress.city}
                                    </Typography>
                                    <Typography variant="body">{checkoutData.shippingAddress.country}</Typography>
                                    {checkoutData.shippingAddress.shippingMethod && (
                                        <div className="mt-2 pt-2 border-t border-border">
                                            <Typography variant="small" className="text-muted-foreground">
                                                <strong>{sections.shipping.methodLabel ?? 'Shipping method:'}</strong>{' '}
                                                {checkoutData.shippingAddress.shippingMethodLabel ??
                                                    checkoutData.shippingAddress.shippingMethod}
                                            </Typography>
                                        </div>
                                    )}
                                </div>
                            )
                        ) : (
                            <Typography variant="body" className="text-muted-foreground">
                                {ph.shippingAddress}
                            </Typography>
                        )}
                    </div>

                    {/* Billing address */}
                    <div className="flex flex-col gap-2">
                        <Typography variant="h2">{sections.billing.title}</Typography>
                        {checkoutData.billingPayment ? (
                            checkoutData.billingPayment.sameAsShippingAddress ? (
                                <Typography variant="body" className="text-muted-foreground">
                                    {ph.sameAsShippingAddress}
                                </Typography>
                            ) : (
                                <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border border-border">
                                    <Typography variant="body">{checkoutData.billingPayment.street}</Typography>
                                    <Typography variant="body">
                                        {checkoutData.billingPayment.postalCode} {checkoutData.billingPayment.city}
                                    </Typography>
                                    <Typography variant="body">{checkoutData.billingPayment.country}</Typography>
                                    {checkoutData.billingPayment.paymentMethod && (
                                        <div className="mt-2 pt-2 border-t border-border">
                                            <Typography variant="small" className="text-muted-foreground">
                                                <strong>{sections.billing.methodLabel ?? 'Payment method:'}</strong>{' '}
                                                {checkoutData.billingPayment.paymentMethodLabel ??
                                                    checkoutData.billingPayment.paymentMethod}
                                            </Typography>
                                        </div>
                                    )}
                                    {checkoutData.billingPayment.purchaseOrderNumber && (
                                        <div className="mt-1">
                                            <Typography variant="small" className="text-muted-foreground">
                                                <strong>Numer zamówienia:</strong>{' '}
                                                {checkoutData.billingPayment.purchaseOrderNumber}
                                            </Typography>
                                        </div>
                                    )}
                                </div>
                            )
                        ) : (
                            <Typography variant="body" className="text-muted-foreground">
                                {ph.billingAddress}
                            </Typography>
                        )}
                    </div>
                </div>

                {/* Right column - Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 flex flex-col gap-6 p-6 bg-card rounded-lg border border-border">
                        <Typography variant="h2">{sections.summary.title}</Typography>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {sections.summary.subtotalLabel}
                                </Typography>
                                <Typography variant="body">
                                    <Price price={totals.subtotal} />
                                </Typography>
                            </div>
                            <div className="flex items-center justify-between">
                                <Typography variant="small" className="text-muted-foreground">
                                    {sections.summary.taxLabel}
                                </Typography>
                                <Typography variant="body">
                                    <Price price={totals.tax} />
                                </Typography>
                            </div>
                            {totals.shipping.value > 0 && (
                                <div className="flex items-center justify-between">
                                    <Typography variant="small" className="text-muted-foreground">
                                        {sections.summary.shippingLabel}
                                    </Typography>
                                    <Typography variant="body">
                                        <Price price={totals.shipping} />
                                    </Typography>
                                </div>
                            )}
                            <Separator />
                            <div className="flex items-center justify-between">
                                <Typography variant="h3">{sections.summary.totalLabel}</Typography>
                                <Typography variant="h2" className="text-primary">
                                    <Price price={totals.total} />
                                </Typography>
                            </div>
                        </div>

                        {sections.notes && (
                            <>
                                <Separator />
                                <div className="flex flex-col gap-4">
                                    <Typography variant="h3">{sections.notes.title}</Typography>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="comment">{sections.notes.comment.label}</Label>
                                            <Textarea
                                                id="comment"
                                                value={notes.comment}
                                                onChange={(e) =>
                                                    setNotes((prev) => ({ ...prev, comment: e.target.value }))
                                                }
                                                placeholder={sections.notes.comment.placeholder}
                                                rows={4}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="specialInstructions">
                                                {sections.notes.specialInstructions.label}
                                            </Label>
                                            <Textarea
                                                id="specialInstructions"
                                                value={notes.specialInstructions}
                                                onChange={(e) =>
                                                    setNotes((prev) => ({
                                                        ...prev,
                                                        specialInstructions: e.target.value,
                                                    }))
                                                }
                                                placeholder={sections.notes.specialInstructions.placeholder}
                                                rows={4}
                                            />
                                        </div>
                                    </div>
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
                                disabled={isSubmitting || !onConfirm}
                            >
                                {isSubmitting ? (
                                    <>
                                        <DynamicIcon name="Loader2" size={20} className="mr-2 animate-spin" />
                                        {loadingLabels?.confirming ?? 'Processing...'}
                                    </>
                                ) : (
                                    buttons.confirm
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
