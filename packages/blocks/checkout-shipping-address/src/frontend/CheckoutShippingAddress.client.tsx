'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState } from 'react';
import { boolean as YupBoolean, object as YupObject, string as YupString } from 'yup';

import { Carts, Models, Orders } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { AddressFields } from '@o2s/ui/components/Checkout/AddressFields';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { Price } from '@o2s/ui/components/Price';

import { Checkbox } from '@o2s/ui/elements/checkbox';
import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Separator } from '@o2s/ui/elements/separator';
import { Skeleton } from '@o2s/ui/elements/skeleton';
import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '../sdk';

import { CheckoutShippingAddressPureProps } from './CheckoutShippingAddress.types';

const CART_ID_KEY = 'cartId';
const FORM_ID = 'checkout-shipping-form';

export const CheckoutShippingAddressPure: React.FC<Readonly<CheckoutShippingAddressPureProps>> = ({
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
}) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const { toast } = useToast();

    const [totals, setTotals] = useState<{
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
        discountTotal?: Models.Price.Price;
    } | null>(null);
    const [shippingOptions, setShippingOptions] = useState<Orders.Model.ShippingMethod[]>([]);
    const [cartShippingMethod, setCartShippingMethod] = useState<
        { name: string; total: Models.Price.Price } | undefined
    >(undefined);
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState({
        streetName: '',
        streetNumber: '',
        apartment: '',
        city: '',
        postalCode: '',
        country: '',
        sameAsBillingAddress: false,
        shippingMethod: '',
    });

    useEffect(() => {
        const cartId = localStorage.getItem(CART_ID_KEY);
        if (!cartId) {
            toast({ description: errors?.cartNotFound, variant: 'destructive' });
            router.replace(cartPath ?? '/');
            return;
        }

        setIsLoading(true);
        (async () => {
            try {
                const [cart, options] = await Promise.all([
                    sdk.carts.getCart(cartId, { 'x-locale': locale }, accessToken),
                    sdk.checkout.getShippingOptions(cartId, { 'x-locale': locale }, accessToken),
                ]);
                if (cart.subtotal && cart.taxTotal && cart.total) {
                    setTotals({
                        subtotal: cart.subtotal,
                        tax: cart.taxTotal,
                        total: cart.total,
                        discountTotal: cart.discountTotal,
                    });
                }
                setShippingOptions(options.data ?? []);
                setCartPromotions(cart.promotions);
                if (cart.shippingMethod) {
                    setCartShippingMethod({
                        name: cart.shippingMethod.name,
                        total: cart.shippingMethod.total ?? { value: 0, currency: cart.currency },
                    });
                }
                setInitialFormValues((prev) => ({
                    ...prev,
                    sameAsBillingAddress: cart.metadata?.sameAsBillingAddress === true,
                    ...(cart.shippingAddress
                        ? {
                              streetName: cart.shippingAddress.streetName ?? '',
                              streetNumber: cart.shippingAddress.streetNumber ?? '',
                              apartment: cart.shippingAddress.apartment ?? '',
                              city: cart.shippingAddress.city ?? '',
                              postalCode: cart.shippingAddress.postalCode ?? '',
                              country: cart.shippingAddress.country ?? '',
                          }
                        : {}),
                    ...(cart.shippingMethod ? { shippingMethod: cart.shippingMethod.id } : {}),
                }));
            } catch (error) {
                const status = (error as { status?: number }).status;
                if (status === 401 || status === 404) {
                    localStorage.removeItem(CART_ID_KEY);
                    toast({ description: errors?.cartNotFound, variant: 'destructive' });
                    router.replace(cartPath ?? '/');
                }
            } finally {
                setIsLoading(false);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, accessToken]);

    if (!title || !fields || !buttons || !summaryLabels || !errors) {
        return null;
    }

    const validationSchema = YupObject().shape({
        streetName: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.streetName.required ? schema.required(errors.required) : schema),
        }),
        streetNumber: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.streetNumber?.required ? schema.required(errors.required) : schema),
        }),
        apartment: YupString(),
        city: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.city.required ? schema.required(errors.required) : schema),
        }),
        postalCode: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) =>
                fields.address.postalCode.required
                    ? schema
                          .required(errors.required)
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$/, errors.invalidPostalCode)
                    : schema
                          .transform((v) => v?.replace(/[-\s]/g, '') ?? '')
                          .matches(/^\d{5}$|^$/, errors.invalidPostalCode),
        }),
        country: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.country.required ? schema.required(errors.required) : schema),
        }),
        sameAsBillingAddress: YupBoolean(),
        shippingMethod: fields.shippingMethod.required ? YupString().required(errors.required) : YupString(),
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
                                            sameAsBillingAddress: values.sameAsBillingAddress,
                                            ...(!values.sameAsBillingAddress && {
                                                shippingAddress: {
                                                    streetName: values.streetName,
                                                    streetNumber: values.streetNumber || undefined,
                                                    apartment: values.apartment || undefined,
                                                    city: values.city,
                                                    postalCode: values.postalCode,
                                                    country: values.country,
                                                },
                                            }),
                                        },
                                        { 'x-locale': locale },
                                        accessToken,
                                    );
                                    const selectedOption = shippingOptions.find((o) => o.id === values.shippingMethod);
                                    await sdk.checkout.setShippingMethod(
                                        cartId,
                                        { shippingOptionId: values.shippingMethod },
                                        { 'x-locale': locale },
                                        accessToken,
                                    );
                                    if (selectedOption) {
                                        setCartShippingMethod({
                                            name: selectedOption.name,
                                            total: selectedOption.total ?? {
                                                value: 0,
                                                currency: 'EUR' as Models.Price.Currency,
                                            },
                                        });
                                    }
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
                        {({ values, setFieldValue }) => (
                            <Form id={FORM_ID} className="w-full flex flex-col gap-6">
                                <Separator />

                                <div className="flex flex-col gap-4">
                                    <Field name="sameAsBillingAddress">
                                        {({ field }: FieldProps<boolean>) => (
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    id="sameAsBillingAddress"
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => {
                                                        const isChecked = checked === true;
                                                        setFieldValue('sameAsBillingAddress', isChecked);
                                                        if (!isChecked) {
                                                            setFieldValue('streetName', '');
                                                            setFieldValue('streetNumber', '');
                                                            setFieldValue('apartment', '');
                                                            setFieldValue('city', '');
                                                            setFieldValue('postalCode', '');
                                                            setFieldValue('country', '');
                                                        }
                                                    }}
                                                />
                                                <Label htmlFor="sameAsBillingAddress" className="cursor-pointer">
                                                    {fields.sameAsBillingAddress.label}
                                                </Label>
                                            </div>
                                        )}
                                    </Field>

                                    {!values.sameAsBillingAddress && <AddressFields fields={fields.address} />}
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="shippingMethod">
                                        {fields.shippingMethod.label}
                                        {fields.shippingMethod.required && <span className="text-destructive"> *</span>}
                                    </Label>
                                    <Field name="shippingMethod">
                                        {({
                                            field,
                                            form: { touched, errors, setFieldValue: setFV },
                                        }: FieldProps<string>) => (
                                            <>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={(value) => setFV('shippingMethod', value)}
                                                >
                                                    <SelectTrigger
                                                        id="shippingMethod"
                                                        className={
                                                            touched.shippingMethod && errors.shippingMethod
                                                                ? 'border-destructive'
                                                                : ''
                                                        }
                                                    >
                                                        <SelectValue
                                                            placeholder={
                                                                isLoading ? '...' : fields.shippingMethod.placeholder
                                                            }
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {shippingOptions.map((option) => (
                                                            <SelectItem key={option.id} value={option.id}>
                                                                {option.name}
                                                                {option.total && (
                                                                    <>
                                                                        {' — '}
                                                                        <Price price={option.total} />
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
