'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Carts, Models, Payments } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { CartSummary, CartSummarySkeleton } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { RadioTileGroup } from '@o2s/ui/components/Forms/RadioTile';

import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '../sdk';

import { CheckoutBillingPaymentPureProps } from './CheckoutBillingPayment.types';

const FORM_ID = 'checkout-billing-form';

const cartIdLocalStorageKey = process.env.NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY!.trim();

export const CheckoutBillingPaymentPure: React.FC<Readonly<CheckoutBillingPaymentPureProps>> = ({
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
    cartPath,
    orderConfirmationPath,
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
              shippingTotal?: Models.Price.Price;
          }
        | undefined
    >();
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>();
    const [paymentProviders, setPaymentProviders] = useState<Payments.Model.PaymentProvider[]>([]);
    const [isInitialLoadPending, startInitialLoadTransition] = useTransition();
    const [isSubmitPending, startSubmitTransition] = useTransition();
    const [initialFormValues, setInitialFormValues] = useState({
        paymentMethod: '',
    });

    useEffect(() => {
        const cartId = localStorage.getItem(cartIdLocalStorageKey);
        if (!cartId) {
            toast({ description: errors?.cartNotFound, variant: 'destructive' });
            router.replace(cartPath ?? '/');
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
                        shippingTotal: cart.shippingMethod?.total,
                    });
                }
                setCartPromotions(cart.promotions);
                const providers = await sdk.payments.getProviders(
                    { regionId: cart.regionId },
                    { 'x-locale': locale },
                    accessToken,
                );
                setPaymentProviders(providers.data ?? []);

                if (cart.paymentMethod) {
                    setInitialFormValues({ paymentMethod: cart.paymentMethod.id });
                }
            } catch {
                toast({ description: errors?.cartNotFound, variant: 'destructive' });
                router.replace(cartPath ?? '/');
            }
        });
    }, [locale, accessToken, toast, errors?.cartNotFound, router, cartPath]);

    const validationSchema = YupObject().shape({
        paymentMethod: fields.paymentMethod.required ? YupString().required(errors.required) : YupString(),
    });

    const handleSubmit = (values: { paymentMethod: string }) => {
        const cartId = localStorage.getItem(cartIdLocalStorageKey);
        if (!cartId) return;

        startSubmitTransition(async () => {
            try {
                const returnUrl = `${window.location.origin}${orderConfirmationPath}`;
                const cancelUrl = window.location.href;
                await sdk.checkout.setPayment(
                    cartId,
                    {
                        providerId: values.paymentMethod,
                        returnUrl,
                        cancelUrl,
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
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        {() => (
                            <Form id={FORM_ID} className="w-full flex flex-col gap-6">
                                <fieldset className="flex flex-col gap-2">
                                    <legend className="text-sm font-medium leading-none mb-2">
                                        {fields.paymentMethod.label}
                                        {fields.paymentMethod.required && <span className="text-destructive"> *</span>}
                                    </legend>
                                    <Field name="paymentMethod">
                                        {({ field, form: { touched, errors, setFieldValue } }: FieldProps<string>) => (
                                            <>
                                                <RadioTileGroup
                                                    value={field.value}
                                                    onValueChange={(value) => setFieldValue('paymentMethod', value)}
                                                    hasError={!!(touched.paymentMethod && errors.paymentMethod)}
                                                    options={paymentProviders.map((provider) => ({
                                                        id: provider.id,
                                                        label: provider.name,
                                                    }))}
                                                />
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
                                </fieldset>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="lg:col-span-1">
                    {isInitialLoadPending ? (
                        <CartSummarySkeleton />
                    ) : totals ? (
                        <CartSummary
                            subtotal={totals.subtotal}
                            tax={totals.tax}
                            total={totals.total}
                            discountTotal={totals.discountTotal}
                            shippingTotal={totals.shippingTotal}
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
