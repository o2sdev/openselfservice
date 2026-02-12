'use client';

import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';

import { Button } from '@o2s/ui/elements/button';
import { Input } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CheckoutCompanyDataPureProps } from './CheckoutCompanyData.types';

export const CheckoutCompanyDataPure: React.FC<Readonly<CheckoutCompanyDataPureProps>> = ({
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
        companyName: '',
        nip: '1234567890',
        street: '',
        city: '',
        postalCode: '00-000',
        country: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const validateNip = (nip: string): boolean => {
        const cleaned = nip.replace(/[-\s]/g, '');
        return /^\d{10}$/.test(cleaned);
    };

    const validatePostalCode = (code: string): boolean => {
        const cleaned = code.replace(/[-\s]/g, '');
        return /^\d{5}$/.test(cleaned);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const defaultErrors = errorMessages ?? {
            required: 'This field is required',
            invalidNip: 'Invalid tax ID',
            invalidPostalCode: 'Invalid postal code',
        };
        const newErrors: Record<string, string> = {};

        if (fields.companyName.required && !formData.companyName.trim()) {
            newErrors.companyName = defaultErrors.required;
        }

        if (fields.nip.required && !formData.nip.trim()) {
            newErrors.nip = defaultErrors.required;
        } else if (formData.nip && !validateNip(formData.nip)) {
            newErrors.nip = defaultErrors.invalidNip;
        }

        if (fields.address.street.required && !formData.street.trim()) {
            newErrors.street = defaultErrors.required;
        }

        if (fields.address.city.required && !formData.city.trim()) {
            newErrors.city = defaultErrors.required;
        }

        if (fields.address.postalCode.required && !formData.postalCode.trim()) {
            newErrors.postalCode = defaultErrors.required;
        } else if (formData.postalCode && !validatePostalCode(formData.postalCode)) {
            newErrors.postalCode = defaultErrors.invalidPostalCode;
        }

        if (fields.address.country.required && !formData.country.trim()) {
            newErrors.country = defaultErrors.required;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        localStorage.setItem('checkoutCompanyData', JSON.stringify(formData));
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <Label htmlFor="companyName">
                                    {fields.companyName.label}
                                    {fields.companyName.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="companyName"
                                    value={formData.companyName}
                                    onChange={(e) => handleChange('companyName', e.target.value)}
                                    placeholder={fields.companyName.placeholder}
                                    className={errors.companyName ? 'border-destructive' : ''}
                                />
                                {errors.companyName && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.companyName}
                                    </Typography>
                                )}
                            </div>

                            <div className="md:col-span-2 flex flex-col gap-2">
                                <Label htmlFor="nip">
                                    {fields.nip.label}
                                    {fields.nip.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="nip"
                                    value={formData.nip}
                                    onChange={(e) => handleChange('nip', e.target.value)}
                                    placeholder={fields.nip.placeholder}
                                    className={errors.nip ? 'border-destructive' : ''}
                                />
                                {errors.nip && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.nip}
                                    </Typography>
                                )}
                            </div>

                            {fields.addressSectionTitle && (
                                <div className="md:col-span-2">
                                    <Typography variant="h3" className="mb-4">
                                        {fields.addressSectionTitle}
                                    </Typography>
                                </div>
                            )}

                            <div className="md:col-span-2 flex flex-col gap-2">
                                <Label htmlFor="street">
                                    {fields.address.street.label}
                                    {fields.address.street.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="street"
                                    value={formData.street}
                                    onChange={(e) => handleChange('street', e.target.value)}
                                    placeholder={fields.address.street.placeholder}
                                    className={errors.street ? 'border-destructive' : ''}
                                />
                                {errors.street && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.street}
                                    </Typography>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="city">
                                    {fields.address.city.label}
                                    {fields.address.city.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="city"
                                    value={formData.city}
                                    onChange={(e) => handleChange('city', e.target.value)}
                                    placeholder={fields.address.city.placeholder}
                                    className={errors.city ? 'border-destructive' : ''}
                                />
                                {errors.city && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.city}
                                    </Typography>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="postalCode">
                                    {fields.address.postalCode.label}
                                    {fields.address.postalCode.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="postalCode"
                                    value={formData.postalCode}
                                    onChange={(e) => handleChange('postalCode', e.target.value)}
                                    placeholder={fields.address.postalCode.placeholder ?? 'XX-XXX'}
                                    className={errors.postalCode ? 'border-destructive' : ''}
                                />
                                {errors.postalCode && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.postalCode}
                                    </Typography>
                                )}
                            </div>

                            <div className="md:col-span-2 flex flex-col gap-2">
                                <Label htmlFor="country">
                                    {fields.address.country.label}
                                    {fields.address.country.required && <span className="text-destructive"> *</span>}
                                </Label>
                                <Input
                                    id="country"
                                    value={formData.country}
                                    onChange={(e) => handleChange('country', e.target.value)}
                                    placeholder={fields.address.country.placeholder}
                                    className={errors.country ? 'border-destructive' : ''}
                                />
                                {errors.country && (
                                    <Typography variant="small" className="text-destructive">
                                        {errors.country}
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
