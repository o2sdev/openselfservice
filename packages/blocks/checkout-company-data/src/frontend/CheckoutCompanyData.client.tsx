'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { object as YupObject, string as YupString } from 'yup';

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

    const defaultErrors = errorMessages ?? {
        required: 'This field is required',
        invalidNip: 'Invalid tax ID',
        invalidPostalCode: 'Invalid postal code',
    };

    const validationSchema = YupObject().shape({
        companyName: fields.companyName.required ? YupString().required(defaultErrors.required) : YupString(),
        nip: fields.nip.required
            ? YupString()
                  .required(defaultErrors.required)
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{10}$/, defaultErrors.invalidNip)
            : YupString()
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{10}$|^$/, defaultErrors.invalidNip),
        street: fields.address.street.required ? YupString().required(defaultErrors.required) : YupString(),
        city: fields.address.city.required ? YupString().required(defaultErrors.required) : YupString(),
        postalCode: fields.address.postalCode.required
            ? YupString()
                  .required(defaultErrors.required)
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{5}$/, defaultErrors.invalidPostalCode)
            : YupString()
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{5}$|^$/, defaultErrors.invalidPostalCode),
        country: fields.address.country.required ? YupString().required(defaultErrors.required) : YupString(),
    });

    const initialValues = {
        companyName: '',
        nip: '',
        street: '',
        city: '',
        postalCode: '',
        country: '',
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
                <div className="lg:col-span-2">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            localStorage.setItem('checkoutCompanyData', JSON.stringify(values));
                            router.push(buttons.next.path);
                        }}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        <Form className="w-full flex flex-col gap-6">
                            <Separator />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <Label htmlFor="companyName">
                                        {fields.companyName.label}
                                        {fields.companyName.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="companyName">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="companyName"
                                                    {...field}
                                                    placeholder={fields.companyName.placeholder}
                                                    className={
                                                        touched.companyName && errors.companyName
                                                            ? 'border-destructive'
                                                            : ''
                                                    }
                                                />
                                                <ErrorMessage name="companyName">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <Label htmlFor="nip">
                                        {fields.nip.label}
                                        {fields.nip.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="nip">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="nip"
                                                    {...field}
                                                    placeholder={fields.nip.placeholder}
                                                    className={touched.nip && errors.nip ? 'border-destructive' : ''}
                                                />
                                                <ErrorMessage name="nip">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
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
                                    <Field name="street">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="street"
                                                    {...field}
                                                    placeholder={fields.address.street.placeholder}
                                                    className={
                                                        touched.street && errors.street ? 'border-destructive' : ''
                                                    }
                                                />
                                                <ErrorMessage name="street">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="city">
                                        {fields.address.city.label}
                                        {fields.address.city.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="city">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="city"
                                                    {...field}
                                                    placeholder={fields.address.city.placeholder}
                                                    className={touched.city && errors.city ? 'border-destructive' : ''}
                                                />
                                                <ErrorMessage name="city">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="postalCode">
                                        {fields.address.postalCode.label}
                                        {fields.address.postalCode.required && (
                                            <span className="text-destructive"> *</span>
                                        )}
                                    </Label>
                                    <Field name="postalCode">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="postalCode"
                                                    {...field}
                                                    placeholder={fields.address.postalCode.placeholder ?? 'XX-XXX'}
                                                    className={
                                                        touched.postalCode && errors.postalCode
                                                            ? 'border-destructive'
                                                            : ''
                                                    }
                                                />
                                                <ErrorMessage name="postalCode">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <Label htmlFor="country">
                                        {fields.address.country.label}
                                        {fields.address.country.required && (
                                            <span className="text-destructive"> *</span>
                                        )}
                                    </Label>
                                    <Field name="country">
                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                            <>
                                                <Input
                                                    id="country"
                                                    {...field}
                                                    placeholder={fields.address.country.placeholder}
                                                    className={
                                                        touched.country && errors.country ? 'border-destructive' : ''
                                                    }
                                                />
                                                <ErrorMessage name="country">
                                                    {(msg) => (
                                                        <Typography variant="small" className="text-destructive">
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            </>
                                        )}
                                    </Field>
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
                        </Form>
                    </Formik>
                </div>

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
