'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Carts, Models } from '@o2s/framework/modules';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { AddressFields } from '@o2s/ui/components/Checkout/AddressFields';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Input } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Separator } from '@o2s/ui/elements/separator';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Textarea } from '@o2s/ui/elements/textarea';
import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '../sdk';

import { CheckoutCompanyDataPureProps } from './CheckoutCompanyData.types';

const CART_ID_KEY = 'cartId';
const FORM_ID = 'checkout-company-form';

export const CheckoutCompanyDataPure: React.FC<Readonly<CheckoutCompanyDataPureProps>> = ({
    locale,
    accessToken,
    routing,
    title,
    subtitle,
    stepIndicator,
    fields,
    buttons,
    errors,
    summaryLabels,
    billingInfoNote,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const router = useRouter();

    const [totals, setTotals] = useState<{
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
        discountTotal?: Models.Price.Price;
    } | null>(null);
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>(undefined);
    const [isTotalsLoading, setIsTotalsLoading] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState({
        companyName: '',
        taxId: '',
        streetName: '',
        streetNumber: '',
        apartment: '',
        city: '',
        postalCode: '',
        country: '',
        notes: '',
    });

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsTotalsLoading(true);
        (async () => {
            try {
                const cart = await sdk.carts.getCart(cartId, { 'x-locale': locale }, accessToken);
                if (cart.subtotal && cart.taxTotal && cart.total) {
                    setTotals({
                        subtotal: cart.subtotal,
                        tax: cart.taxTotal,
                        total: cart.total,
                        discountTotal: cart.discountTotal,
                    });
                }
                setCartPromotions(cart.promotions);
                if (cart.billingAddress) {
                    const addr = cart.billingAddress;
                    setInitialFormValues({
                        companyName: addr.companyName ?? '',
                        taxId: addr.taxId ?? '',
                        streetName: addr.streetName ?? '',
                        streetNumber: addr.streetNumber ?? '',
                        apartment: addr.apartment ?? '',
                        city: addr.city ?? '',
                        postalCode: addr.postalCode ?? '',
                        country: addr.country ?? '',
                        notes: cart.notes ?? '',
                    });
                }
            } catch {
                // totals remain null — sidebar will not show amounts
            } finally {
                setIsTotalsLoading(false);
            }
        })();
    }, [locale, accessToken]);

    if (!title || !fields || !buttons || !summaryLabels || !errors) {
        return null;
    }

    const validationSchema = YupObject().shape({
        companyName: fields.companyName.required ? YupString().required(errors.required) : YupString(),
        taxId: fields.taxId.required
            ? YupString()
                  .required(errors.required)
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{10}$/, errors.invalidTaxId)
            : YupString()
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{10}$|^$/, errors.invalidTaxId),
        streetName: fields.address.streetName.required ? YupString().required(errors.required) : YupString(),
        streetNumber: fields.address.streetNumber?.required ? YupString().required(errors.required) : YupString(),
        apartment: YupString(),
        city: fields.address.city.required ? YupString().required(errors.required) : YupString(),
        postalCode: fields.address.postalCode.required
            ? YupString()
                  .required(errors.required)
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{5}$/, errors.invalidPostalCode)
            : YupString()
                  .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                  .matches(/^\d{5}$|^$/, errors.invalidPostalCode),
        country: fields.address.country.required ? YupString().required(errors.required) : YupString(),
    });

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
                        initialValues={initialFormValues}
                        enableReinitialize
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            setIsFormSubmitting(true);
                            const cartId = localStorage.getItem(CART_ID_KEY);
                            if (cartId) {
                                try {
                                    await sdk.checkout.setAddresses(
                                        cartId,
                                        {
                                            billingAddress: {
                                                companyName: values.companyName,
                                                taxId: values.taxId,
                                                streetName: values.streetName,
                                                streetNumber: values.streetNumber || undefined,
                                                apartment: values.apartment || undefined,
                                                city: values.city,
                                                postalCode: values.postalCode,
                                                country: values.country,
                                            },
                                            notes: values.notes || undefined,
                                        },
                                        { 'x-locale': locale },
                                        accessToken,
                                    );
                                } catch {
                                    // proceed to next step even if call fails
                                } finally {
                                    setSubmitting(false);
                                    setIsFormSubmitting(false);
                                }
                            }
                            router.push(buttons.next.path);
                        }}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        {() => (
                            <Form id={FORM_ID} className="w-full flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 flex flex-col gap-2">
                                        <Label htmlFor="companyName">
                                            {fields.companyName.label}
                                            {fields.companyName.required && (
                                                <span className="text-destructive"> *</span>
                                            )}
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
                                        <Label htmlFor="taxId">
                                            {fields.taxId.label}
                                            {fields.taxId.required && <span className="text-destructive"> *</span>}
                                        </Label>
                                        <Field name="taxId">
                                            {({ field, form: { touched, errors } }: FieldProps<string>) => (
                                                <>
                                                    <Input
                                                        id="taxId"
                                                        {...field}
                                                        placeholder={fields.taxId.placeholder}
                                                        className={
                                                            touched.taxId && errors.taxId ? 'border-destructive' : ''
                                                        }
                                                    />
                                                    <ErrorMessage name="taxId">
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

                                    <div className="md:col-span-2 w-full">
                                        <AddressFields fields={fields.address} />
                                    </div>
                                </div>

                                {billingInfoNote && (
                                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg border border-border">
                                        {billingInfoNote.icon && (
                                            <DynamicIcon
                                                name={billingInfoNote.icon}
                                                size={16}
                                                className="mt-0.5 text-muted-foreground shrink-0"
                                            />
                                        )}
                                        <Typography variant="small" className="text-muted-foreground">
                                            {billingInfoNote.text}
                                        </Typography>
                                    </div>
                                )}

                                {fields.notes && (
                                    <>
                                        <Separator />
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="notes">
                                                {fields.notes.label}
                                                {fields.notes.required && <span className="text-destructive"> *</span>}
                                            </Label>
                                            <Field name="notes">
                                                {({ field }: FieldProps<string>) => (
                                                    <Textarea
                                                        id="notes"
                                                        {...field}
                                                        placeholder={fields.notes!.placeholder}
                                                        rows={4}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="lg:col-span-1">
                    {isTotalsLoading ? (
                        <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-6 w-full" />
                        </div>
                    ) : totals ? (
                        <CartSummary
                            subtotal={totals.subtotal}
                            tax={totals.tax}
                            total={totals.total}
                            discountTotal={totals.discountTotal}
                            promotions={cartPromotions}
                            labels={summaryLabels}
                            LinkComponent={LinkComponent}
                            primaryButton={{
                                label: buttons.next.label,
                                disabled: isFormSubmitting,
                                action: { type: 'submit', form: FORM_ID },
                            }}
                            secondaryButton={{
                                label: buttons.back.label,
                                action: { type: 'link', url: buttons.back.path },
                            }}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
