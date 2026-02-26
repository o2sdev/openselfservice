'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';

import { Carts, Models, Payments } from '@o2s/framework/modules';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';

import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '../sdk';

import { CheckoutBillingPaymentPureProps } from './CheckoutBillingPayment.types';

const CART_ID_KEY = 'cartId';
const FORM_ID = 'checkout-billing-form';

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
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const router = useRouter();

    const [totals, setTotals] = useState<{
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
        discountTotal?: Models.Price.Price;
    } | null>(null);
    const [cartShippingMethod, setCartShippingMethod] = useState<
        { name: string; total: Models.Price.Price } | undefined
    >(undefined);
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>(undefined);
    const [paymentProviders, setPaymentProviders] = useState<Payments.Model.PaymentProvider[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState({
        paymentMethod: '',
    });

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) return;

        setIsLoading(true);
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
                if (cart.shippingMethod?.total) {
                    setCartShippingMethod({
                        name: cart.shippingMethod.name,
                        total: cart.shippingMethod.total,
                    });
                }
                setCartPromotions(cart.promotions);
                if (cart.regionId) {
                    const providers = await sdk.payments.getProviders(
                        { regionId: cart.regionId },
                        { 'x-locale': locale },
                        accessToken,
                    );
                    setPaymentProviders(providers.data ?? []);
                }
                if (cart.paymentMethod) {
                    setInitialFormValues({ paymentMethod: cart.paymentMethod.id });
                }
            } catch {
                // proceed with empty state
            } finally {
                setIsLoading(false);
            }
        })();
    }, [locale, accessToken]);

    if (!title || !fields || !buttons || !summaryLabels || !errors) {
        return null;
    }

    const validationSchema = YupObject().shape({
        paymentMethod: fields.paymentMethod.required ? YupString().required(errors.required) : YupString(),
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
                                    const returnUrl = `${window.location.origin}${buttons.next.path}`;
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
                                } catch {
                                    // proceed to next step
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
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="paymentMethod">
                                        {fields.paymentMethod.label}
                                        {fields.paymentMethod.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="paymentMethod">
                                        {({ field, form: { touched, errors, setFieldValue } }: FieldProps<string>) => (
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
                                                            placeholder={
                                                                isLoading ? '...' : fields.paymentMethod.placeholder
                                                            }
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {paymentProviders.map((provider) => (
                                                            <SelectItem key={provider.id} value={provider.id}>
                                                                {provider.name}
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
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="lg:col-span-1">
                    {isLoading ? (
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
                            shippingMethod={cartShippingMethod}
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
