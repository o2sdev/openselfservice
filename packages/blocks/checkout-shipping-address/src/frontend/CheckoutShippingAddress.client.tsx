'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { boolean as YupBoolean, object as YupObject, string as YupString } from 'yup';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { Price } from '@o2s/ui/components/Price';

import { Button } from '@o2s/ui/elements/button';
import { Checkbox } from '@o2s/ui/elements/checkbox';
import { Input } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CheckoutShippingAddressPureProps } from './CheckoutShippingAddress.types';

export const CheckoutShippingAddressPure: React.FC<Readonly<CheckoutShippingAddressPureProps>> = ({
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
        invalidPostalCode: 'Invalid postal code',
    };

    const validationSchema = YupObject().shape({
        street: YupString().when('sameAsCompanyAddress', {
            is: false,
            then: (schema) => (fields.address.street.required ? schema.required(defaultErrors.required) : schema),
        }),
        city: YupString().when('sameAsCompanyAddress', {
            is: false,
            then: (schema) => (fields.address.city.required ? schema.required(defaultErrors.required) : schema),
        }),
        postalCode: YupString().when('sameAsCompanyAddress', {
            is: false,
            then: (schema) =>
                fields.address.postalCode.required
                    ? schema
                          .required(defaultErrors.required)
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$/, defaultErrors.invalidPostalCode)
                    : schema
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$|^$/, defaultErrors.invalidPostalCode),
        }),
        country: YupString().when('sameAsCompanyAddress', {
            is: false,
            then: (schema) => (fields.address.country.required ? schema.required(defaultErrors.required) : schema),
        }),
        sameAsCompanyAddress: YupBoolean(),
        shippingMethod: fields.shippingMethod.required ? YupString().required(defaultErrors.required) : YupString(),
    });

    const initialValues = {
        street: '',
        city: '',
        postalCode: '',
        country: '',
        sameAsCompanyAddress: false,
        shippingMethod: '',
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
                            const shippingMethodOption = fields.shippingMethod.options.find(
                                (opt) => opt.value === values.shippingMethod,
                            );
                            const shippingMethodLabel = shippingMethodOption?.label ?? values.shippingMethod;
                            localStorage.setItem(
                                'checkoutShippingAddress',
                                JSON.stringify({
                                    ...values,
                                    shippingMethodLabel,
                                }),
                            );
                            router.push(buttons.next.path);
                        }}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        {({ values, setFieldValue }) => (
                            <Form className="w-full flex flex-col gap-6">
                                <Separator />

                                <div className="flex flex-col gap-4">
                                    <Field name="sameAsCompanyAddress">
                                        {({ field }: FieldProps<boolean>) => (
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    id="sameAsCompanyAddress"
                                                    checked={field.value}
                                                    onCheckedChange={(checked) =>
                                                        setFieldValue('sameAsCompanyAddress', checked === true)
                                                    }
                                                />
                                                <Label htmlFor="sameAsCompanyAddress" className="cursor-pointer">
                                                    {fields.sameAsCompanyAddress.label}
                                                </Label>
                                            </div>
                                        )}
                                    </Field>

                                    {!values.sameAsCompanyAddress && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2 flex flex-col gap-2">
                                                <Label htmlFor="street">
                                                    {fields.address.street.label}
                                                    {fields.address.street.required && (
                                                        <span className="text-destructive"> *</span>
                                                    )}
                                                </Label>
                                                <Field name="street">
                                                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                        <>
                                                            <Input
                                                                id="street"
                                                                {...field}
                                                                placeholder={fields.address.street.placeholder}
                                                                className={
                                                                    touched.street && errors.street
                                                                        ? 'border-destructive'
                                                                        : ''
                                                                }
                                                            />
                                                            <ErrorMessage name="street">
                                                                {(msg) => (
                                                                    <Typography
                                                                        variant="small"
                                                                        className="text-destructive"
                                                                    >
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
                                                    {fields.address.city.required && (
                                                        <span className="text-destructive"> *</span>
                                                    )}
                                                </Label>
                                                <Field name="city">
                                                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                        <>
                                                            <Input
                                                                id="city"
                                                                {...field}
                                                                placeholder={fields.address.city.placeholder}
                                                                className={
                                                                    touched.city && errors.city
                                                                        ? 'border-destructive'
                                                                        : ''
                                                                }
                                                            />
                                                            <ErrorMessage name="city">
                                                                {(msg) => (
                                                                    <Typography
                                                                        variant="small"
                                                                        className="text-destructive"
                                                                    >
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
                                                                placeholder={
                                                                    fields.address.postalCode.placeholder ?? 'XX-XXX'
                                                                }
                                                                className={
                                                                    touched.postalCode && errors.postalCode
                                                                        ? 'border-destructive'
                                                                        : ''
                                                                }
                                                            />
                                                            <ErrorMessage name="postalCode">
                                                                {(msg) => (
                                                                    <Typography
                                                                        variant="small"
                                                                        className="text-destructive"
                                                                    >
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
                                                                    touched.country && errors.country
                                                                        ? 'border-destructive'
                                                                        : ''
                                                                }
                                                            />
                                                            <ErrorMessage name="country">
                                                                {(msg) => (
                                                                    <Typography
                                                                        variant="small"
                                                                        className="text-destructive"
                                                                    >
                                                                        {msg}
                                                                    </Typography>
                                                                )}
                                                            </ErrorMessage>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="shippingMethod">
                                        {fields.shippingMethod.label}
                                        {fields.shippingMethod.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="shippingMethod">
                                        {({ field, form: { touched, errors, setFieldValue } }: FieldProps<string>) => (
                                            <>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={(value) => setFieldValue('shippingMethod', value)}
                                                >
                                                    <SelectTrigger
                                                        id="shippingMethod"
                                                        className={
                                                            touched.shippingMethod && errors.shippingMethod
                                                                ? 'border-destructive'
                                                                : ''
                                                        }
                                                    >
                                                        <SelectValue placeholder={fields.shippingMethod.placeholder} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {fields.shippingMethod.options.map((option) => (
                                                            <SelectItem key={option.value} value={option.value}>
                                                                {option.label}
                                                                {option.price && (
                                                                    <>
                                                                        {' - '}
                                                                        <Price price={option.price} />
                                                                    </>
                                                                )}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <ErrorMessage name="shippingMethod">
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
                        )}
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
