'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { boolean as YupBoolean, object as YupObject, string as YupString } from 'yup';

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

    const defaultErrors = errorMessages ?? {
        required: 'This field is required',
        invalidPostalCode: 'Invalid postal code',
    };

    const validationSchema = YupObject().shape({
        street: YupString().when('sameAsShippingAddress', {
            is: false,
            then: (schema) =>
                fields.billingAddress.street.required ? schema.required(defaultErrors.required) : schema,
        }),
        city: YupString().when('sameAsShippingAddress', {
            is: false,
            then: (schema) => (fields.billingAddress.city.required ? schema.required(defaultErrors.required) : schema),
        }),
        postalCode: YupString().when('sameAsShippingAddress', {
            is: false,
            then: (schema) =>
                fields.billingAddress.postalCode.required
                    ? schema
                          .required(defaultErrors.required)
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$/, defaultErrors.invalidPostalCode)
                    : schema
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$|^$/, defaultErrors.invalidPostalCode),
        }),
        country: YupString().when('sameAsShippingAddress', {
            is: false,
            then: (schema) =>
                fields.billingAddress.country.required ? schema.required(defaultErrors.required) : schema,
        }),
        sameAsShippingAddress: YupBoolean(),
        paymentMethod: fields.paymentMethod.required ? YupString().required(defaultErrors.required) : YupString(),
    });

    const initialValues = {
        street: '',
        city: '',
        postalCode: '',
        country: '',
        sameAsShippingAddress: false,
        paymentMethod: '',
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
                            const paymentMethodOption = fields.paymentMethod.options.find(
                                (opt) => opt.value === values.paymentMethod,
                            );
                            const paymentMethodLabel = paymentMethodOption?.label ?? values.paymentMethod;
                            localStorage.setItem(
                                'checkoutBillingPayment',
                                JSON.stringify({
                                    ...values,
                                    paymentMethodLabel,
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

                                <div className="flex flex-col gap-6">
                                    <div>
                                        {fields.billingAddressSectionTitle && (
                                            <Typography variant="h3" className="mb-4">
                                                {fields.billingAddressSectionTitle}
                                            </Typography>
                                        )}
                                        <Field name="sameAsShippingAddress">
                                            {({ field }: FieldProps<boolean>) => (
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Checkbox
                                                        id="sameAsShippingAddress"
                                                        checked={field.value}
                                                        onCheckedChange={(checked) =>
                                                            setFieldValue('sameAsShippingAddress', checked === true)
                                                        }
                                                    />
                                                    <Label htmlFor="sameAsShippingAddress" className="cursor-pointer">
                                                        {fields.sameAsShippingAddress.label}
                                                    </Label>
                                                </div>
                                            )}
                                        </Field>

                                        {!values.sameAsShippingAddress && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="md:col-span-2 flex flex-col gap-2">
                                                    <Label htmlFor="billingStreet">
                                                        {fields.billingAddress.street.label}
                                                        {fields.billingAddress.street.required && (
                                                            <span className="text-destructive"> *</span>
                                                        )}
                                                    </Label>
                                                    <Field name="street">
                                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                            <>
                                                                <Input
                                                                    id="billingStreet"
                                                                    {...field}
                                                                    placeholder={
                                                                        fields.billingAddress.street.placeholder
                                                                    }
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
                                                    <Label htmlFor="billingCity">
                                                        {fields.billingAddress.city.label}
                                                        {fields.billingAddress.city.required && (
                                                            <span className="text-destructive"> *</span>
                                                        )}
                                                    </Label>
                                                    <Field name="city">
                                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                            <>
                                                                <Input
                                                                    id="billingCity"
                                                                    {...field}
                                                                    placeholder={fields.billingAddress.city.placeholder}
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
                                                    <Label htmlFor="billingPostalCode">
                                                        {fields.billingAddress.postalCode.label}
                                                        {fields.billingAddress.postalCode.required && (
                                                            <span className="text-destructive"> *</span>
                                                        )}
                                                    </Label>
                                                    <Field name="postalCode">
                                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                            <>
                                                                <Input
                                                                    id="billingPostalCode"
                                                                    {...field}
                                                                    placeholder={
                                                                        fields.billingAddress.postalCode.placeholder ??
                                                                        'XX-XXX'
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
                                                    <Label htmlFor="billingCountry">
                                                        {fields.billingAddress.country.label}
                                                        {fields.billingAddress.country.required && (
                                                            <span className="text-destructive"> *</span>
                                                        )}
                                                    </Label>
                                                    <Field name="country">
                                                        {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                            <>
                                                                <Input
                                                                    id="billingCountry"
                                                                    {...field}
                                                                    placeholder={
                                                                        fields.billingAddress.country.placeholder
                                                                    }
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
                                        <Label htmlFor="paymentMethod">
                                            {fields.paymentMethod.label}
                                            {fields.paymentMethod.required && (
                                                <span className="text-destructive"> *</span>
                                            )}
                                        </Label>
                                        <Field name="paymentMethod">
                                            {({
                                                field,
                                                form: { touched, errors, setFieldValue },
                                            }: FieldProps<string>) => (
                                                <>
                                                    <Select
                                                        value={field.value}
                                                        onValueChange={(value) => setFieldValue('paymentMethod', value)}
                                                    >
                                                        <SelectTrigger
                                                            id="paymentMethod"
                                                            className={
                                                                touched.paymentMethod && errors.paymentMethod
                                                                    ? 'border-destructive'
                                                                    : ''
                                                            }
                                                        >
                                                            <SelectValue
                                                                placeholder={fields.paymentMethod.placeholder}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {fields.paymentMethod.options.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <ErrorMessage name="paymentMethod">
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
