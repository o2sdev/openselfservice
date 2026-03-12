'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Carts, Models } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { AddressFields } from '@o2s/ui/components/Checkout/AddressFields';
import { FormField } from '@o2s/ui/components/Checkout/FormField';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

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
    cartPath,
}) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const { toast } = useToast();

    const [totals, setTotals] = useState<
        | {
              subtotal: Models.Price.Price;
              tax: Models.Price.Price;
              total: Models.Price.Price;
              discountTotal?: Models.Price.Price;
          }
        | undefined
    >();
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>();
    const [isInitialLoadPending, startInitialLoadTransition] = useTransition();
    const [isSubmitPending, startSubmitTransition] = useTransition();
    const [initialFormValues, setInitialFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
        if (!cartId) {
            toast({ description: errors.cartNotFound, variant: 'destructive' });
            router.replace(cartPath);
            return;
        }

        startInitialLoadTransition(async () => {
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
                setInitialFormValues((prev) => ({
                    ...prev,
                    notes: cart.notes ?? '',
                    email: cart.email ?? prev.email,
                    ...(cart.billingAddress
                        ? {
                              firstName: cart.billingAddress.firstName ?? '',
                              lastName: cart.billingAddress.lastName ?? '',
                              email: cart.billingAddress.email ?? cart.email ?? '',
                              phone: cart.billingAddress.phone ?? '',
                              companyName: cart.billingAddress.companyName ?? '',
                              taxId: cart.billingAddress.taxId ?? '',
                              streetName: cart.billingAddress.streetName ?? '',
                              streetNumber: cart.billingAddress.streetNumber ?? '',
                              apartment: cart.billingAddress.apartment ?? '',
                              city: cart.billingAddress.city ?? '',
                              postalCode: cart.billingAddress.postalCode ?? '',
                              country: cart.billingAddress.country ?? '',
                          }
                        : {}),
                }));
            } catch {
                toast({ description: errors.cartNotFound, variant: 'destructive' });
                router.replace(cartPath);
            }
        });
    }, [locale, accessToken, toast, errors.cartNotFound, router, cartPath]);

    const handleSubmit = (values: typeof initialFormValues) => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) {
            toast({ description: errors.cartNotFound, variant: 'destructive' });
            return;
        }

        startSubmitTransition(async () => {
            try {
                await sdk.checkout.setAddresses(
                    cartId,
                    {
                        billingAddress: {
                            firstName: values.firstName || undefined,
                            lastName: values.lastName || undefined,
                            email: values.email || undefined,
                            phone: values.phone || undefined,
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
                        email: values.email || undefined,
                    },
                    { 'x-locale': locale },
                    accessToken,
                );
                router.push(buttons.next.path);
            } catch {
                toast({ variant: 'destructive', description: errors.submitError });
            }
        });
    };

    const validationSchema = YupObject().shape({
        firstName: fields.firstName.required ? YupString().required(errors.required) : YupString(),
        lastName: fields.lastName.required ? YupString().required(errors.required) : YupString(),
        email: fields.email.required
            ? YupString().required(errors.required).email(errors.invalidEmail)
            : YupString().email(errors.invalidEmail).optional(),
        phone: fields.phone.required ? YupString().required(errors.required) : YupString(),
        companyName: fields.companyName.required ? YupString().required(errors.required) : YupString(),
        taxId: fields.taxId.required ? YupString().required(errors.required) : YupString(),
        streetName: fields.address.streetName.required ? YupString().required(errors.required) : YupString(),
        streetNumber: fields.address.streetNumber.required ? YupString().required(errors.required) : YupString(),
        apartment: YupString(),
        city: fields.address.city.required ? YupString().required(errors.required) : YupString(),
        postalCode: fields.address.postalCode.required ? YupString().required(errors.required) : YupString(),
        country: fields.address.country.required ? YupString().required(errors.required) : YupString(),
    });

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
                <div className="lg:col-span-2">
                    <Formik
                        initialValues={initialFormValues}
                        enableReinitialize
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        {() => (
                            <Form id={FORM_ID} className="w-full flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField name="firstName" field={fields.firstName} />
                                    <FormField name="lastName" field={fields.lastName} />
                                    <FormField name="email" type="email" field={fields.email} />
                                    <FormField name="phone" type="tel" field={fields.phone} />
                                    <div className="md:col-span-2">
                                        <FormField name="companyName" field={fields.companyName} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <FormField name="taxId" field={fields.taxId} />
                                    </div>
                                    <div className="md:col-span-2 w-full">
                                        <AddressFields fields={fields.address} locale={locale} />
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
                    {isInitialLoadPending ? (
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
                                disabled: isSubmitPending,
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
