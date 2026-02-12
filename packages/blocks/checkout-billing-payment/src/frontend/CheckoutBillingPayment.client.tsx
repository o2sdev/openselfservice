'use client';

import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';

import { Button } from '@o2s/ui/elements/button';
import { Checkbox } from '@o2s/ui/elements/checkbox';
import { Input } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CheckoutBillingPaymentPureProps } from './CheckoutBillingPayment.types';

export const CheckoutBillingPaymentPure: React.FC<Readonly<CheckoutBillingPaymentPureProps>> = ({
    locale: _locale,
    accessToken: _accessToken,
    routing,
    title,
    subtitle,
    stepIndicator,
    fields,
    buttons,
    errors: errorMessages,
    summaryLabels,
    totals,
    continueShopping,
    checkoutButton,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const router = useRouter();

    const [formData, setFormData] = useState({
        street: '',
        city: '',
        postalCode: '',
        country: '',
        sameAsShippingAddress: false,
        paymentMethod: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const validatePostalCode = (code: string): boolean => {
        const cleaned = code.replace(/[-\s]/g, '');
        return /^\d{5}$/.test(cleaned);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const defaultErrors = errorMessages ?? {
            required: 'This field is required',
            invalidPostalCode: 'Invalid postal code',
        };
        const newErrors: Record<string, string> = {};

        if (!formData.sameAsShippingAddress) {
            if (fields.billingAddress.street.required && !formData.street.trim()) {
                newErrors.street = defaultErrors.required;
            }

            if (fields.billingAddress.city.required && !formData.city.trim()) {
                newErrors.city = defaultErrors.required;
            }

            if (fields.billingAddress.postalCode.required && !formData.postalCode.trim()) {
                newErrors.postalCode = defaultErrors.required;
            } else if (formData.postalCode && !validatePostalCode(formData.postalCode)) {
                newErrors.postalCode = defaultErrors.invalidPostalCode;
            }

            if (fields.billingAddress.country.required && !formData.country.trim()) {
                newErrors.country = defaultErrors.required;
            }
        }

        if (fields.paymentMethod.required && !formData.paymentMethod.trim()) {
            newErrors.paymentMethod = defaultErrors.required;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const paymentMethodOption = fields.paymentMethod.options.find((opt) => opt.value === formData.paymentMethod);
        const paymentMethodLabel = paymentMethodOption?.label ?? formData.paymentMethod;

        localStorage.setItem(
            'checkoutBillingPayment',
            JSON.stringify({
                ...formData,
                sameAsShippingAddress: formData.sameAsShippingAddress,
                paymentMethodLabel,
            }),
        );

        router.push(buttons.next.path);
    };

    if (!title || !fields || !buttons || !summaryLabels || !totals) {
        return null;
    }

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
                {/* Form */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                        <Separator />

                        <div className="flex flex-col gap-6">
                            <div>
                                {fields.billingAddressSectionTitle && (
                                    <Typography variant="h3" className="mb-4">
                                        {fields.billingAddressSectionTitle}
                                    </Typography>
                                )}
                                <div className="flex items-center gap-2 mb-4">
                                    <Checkbox
                                        id="sameAsShippingAddress"
                                        checked={formData.sameAsShippingAddress}
                                        onCheckedChange={(checked) =>
                                            handleChange('sameAsShippingAddress', checked === true)
                                        }
                                    />
                                    <Label htmlFor="sameAsShippingAddress" className="cursor-pointer">
                                        {fields.sameAsShippingAddress.label}
                                    </Label>
                                </div>

                                {!formData.sameAsShippingAddress && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2 flex flex-col gap-2">
                                            <Label htmlFor="billingStreet">
                                                {fields.billingAddress.street.label}
                                                {fields.billingAddress.street.required && (
                                                    <span className="text-destructive"> *</span>
                                                )}
                                            </Label>
                                            <Input
                                                id="billingStreet"
                                                value={formData.street}
                                                onChange={(e) => handleChange('street', e.target.value)}
                                                placeholder={fields.billingAddress.street.placeholder}
                                                className={errors.street ? 'border-destructive' : ''}
                                            />
                                            {errors.street && (
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.street}
                                                </Typography>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="billingCity">
                                                {fields.billingAddress.city.label}
                                                {fields.billingAddress.city.required && (
                                                    <span className="text-destructive"> *</span>
                                                )}
                                            </Label>
                                            <Input
                                                id="billingCity"
                                                value={formData.city}
                                                onChange={(e) => handleChange('city', e.target.value)}
                                                placeholder={fields.billingAddress.city.placeholder}
                                                className={errors.city ? 'border-destructive' : ''}
                                            />
                                            {errors.city && (
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.city}
                                                </Typography>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="billingPostalCode">
                                                {fields.billingAddress.postalCode.label}
                                                {fields.billingAddress.postalCode.required && (
                                                    <span className="text-destructive"> *</span>
                                                )}
                                            </Label>
                                            <Input
                                                id="billingPostalCode"
                                                value={formData.postalCode}
                                                onChange={(e) => handleChange('postalCode', e.target.value)}
                                                placeholder={fields.billingAddress.postalCode.placeholder ?? 'XX-XXX'}
                                                className={errors.postalCode ? 'border-destructive' : ''}
                                            />
                                            {errors.postalCode && (
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.postalCode}
                                                </Typography>
                                            )}
                                        </div>

                                        <div className="md:col-span-2 flex flex-col gap-2">
                                            <Label htmlFor="billingCountry">
                                                {fields.billingAddress.country.label}
                                                {fields.billingAddress.country.required && (
                                                    <span className="text-destructive"> *</span>
                                                )}
                                            </Label>
                                            <Input
                                                id="billingCountry"
                                                value={formData.country}
                                                onChange={(e) => handleChange('country', e.target.value)}
                                                placeholder={fields.billingAddress.country.placeholder}
                                                className={errors.country ? 'border-destructive' : ''}
                                            />
                                            {errors.country && (
                                                <Typography variant="small" className="text-destructive">
                                                    {errors.country}
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Separator />

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="paymentMethod">
                                    {fields.paymentMethod.label}
                                    {fields.paymentMethod.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Select
                                    value={formData.paymentMethod}
                                    onValueChange={(value) => handleChange('paymentMethod', value)}
                                >
                                    <SelectTrigger
                                        id="paymentMethod"
                                        className={errors.paymentMethod ? 'border-destructive' : ''}
                                    >
                                        <SelectValue placeholder={fields.paymentMethod.placeholder} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {fields.paymentMethod.options.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.paymentMethod && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.paymentMethod}
                                    </Typography>
                                )}
                            </div>
                        </div>

                        <Separator />

                        <div className="flex flex-col sm:flex-row gap-4 justify-between">
                            <Button asChild variant="outline" type="button">
                                <LinkComponent href={buttons.back.path}>{buttons.back.label}</LinkComponent>
                            </Button>
                            <Button type="submit" variant="default">
                                {buttons.next.label}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                    <CartSummary
                        subtotal={totals.subtotal}
                        tax={totals.tax}
                        total={totals.total}
                        labels={summaryLabels}
                        LinkComponent={LinkComponent}
                        checkoutButton={
                            checkoutButton
                                ? {
                                      url: checkoutButton.path,
                                      label: checkoutButton.label,
                                      icon: checkoutButton.icon,
                                  }
                                : undefined
                        }
                        continueShopping={
                            continueShopping
                                ? {
                                      url: continueShopping.path,
                                      label: continueShopping.label,
                                  }
                                : undefined
                        }
                    />
                </div>
            </div>
        </div>
    );
};
