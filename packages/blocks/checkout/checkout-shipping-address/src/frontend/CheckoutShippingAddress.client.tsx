'use client';

import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { createNavigation } from 'next-intl/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import { boolean as YupBoolean, object as YupObject, string as YupString } from 'yup';

import { Carts, Models, Orders } from '@o2s/framework/modules';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { CartSummary, CartSummarySkeleton } from '@o2s/ui/components/Cart/CartSummary';
import { AddressFields } from '@o2s/ui/components/Checkout/AddressFields';
import { FormField } from '@o2s/ui/components/Checkout/FormField';
import { StepIndicator } from '@o2s/ui/components/Checkout/StepIndicator';
import { RadioTileGroup } from '@o2s/ui/components/Forms/RadioTile';
import { Price } from '@o2s/ui/components/Products/Price';

import { Checkbox } from '@o2s/ui/elements/checkbox';
import { Label } from '@o2s/ui/elements/label';
import { Separator } from '@o2s/ui/elements/separator';
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
    const [shippingOptions, setShippingOptions] = useState<Orders.Model.ShippingMethod[]>([]);
    const [cartPromotions, setCartPromotions] = useState<Carts.Model.Promotion[] | undefined>();
    const [isInitialLoadPending, startInitialLoadTransition] = useTransition();
    const [isSubmitPending, startSubmitTransition] = useTransition();
    const [initialFormValues, setInitialFormValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
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
            toast({ description: errors.cartNotFound, variant: 'destructive' });
            router.replace(cartPath);
            return;
        }

        startInitialLoadTransition(async () => {
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
                        shippingTotal: cart.shippingMethod?.total,
                    });
                }
                setShippingOptions(options.data ?? []);
                setCartPromotions(cart.promotions);
                const sameAsBilling = cart.metadata?.sameAsBillingAddress === true;
                const sourceAddress = sameAsBilling ? cart.billingAddress : cart.shippingAddress;
                setInitialFormValues((prev) => ({
                    ...prev,
                    sameAsBillingAddress: sameAsBilling,
                    ...(sourceAddress
                        ? {
                              firstName: sourceAddress.firstName ?? '',
                              lastName: sourceAddress.lastName ?? '',
                              phone: sourceAddress.phone ?? '',
                              streetName: sourceAddress.streetName ?? '',
                              streetNumber: sourceAddress.streetNumber ?? '',
                              apartment: sourceAddress.apartment ?? '',
                              city: sourceAddress.city ?? '',
                              postalCode: sourceAddress.postalCode ?? '',
                              country: sourceAddress.country ?? '',
                          }
                        : {}),
                    ...(cart.shippingMethod ? { shippingMethod: cart.shippingMethod.id } : {}),
                }));
            } catch {
                toast({ description: errors.cartNotFound, variant: 'destructive' });
                router.replace(cartPath);
            }
        });
    }, [locale, accessToken, toast, errors.cartNotFound, router, cartPath]);

    const handleSubmit = (values: typeof initialFormValues) => {
        startSubmitTransition(async () => {
            const cartId = localStorage.getItem(CART_ID_KEY);
            if (!cartId) return;
            try {
                await sdk.checkout.setAddresses(
                    cartId,
                    {
                        sameAsBillingAddress: values.sameAsBillingAddress,
                        ...(!values.sameAsBillingAddress && {
                            shippingAddress: {
                                firstName: values.firstName || undefined,
                                lastName: values.lastName || undefined,
                                phone: values.phone || undefined,
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
                await sdk.checkout.setShippingMethod(
                    cartId,
                    { shippingOptionId: values.shippingMethod },
                    { 'x-locale': locale },
                    accessToken,
                );
                setTotals(
                    (prev) =>
                        prev && {
                            ...prev,
                            shippingTotal: shippingOptions.find((o) => o.id === values.shippingMethod)?.total,
                        },
                );
                router.push(buttons.next.path);
            } catch {
                toast({ variant: 'destructive', description: errors.submitError });
            }
        });
    };

    const validationSchema = YupObject().shape({
        firstName: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.firstName.required ? schema.required(errors.required) : schema),
        }),
        lastName: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.lastName.required ? schema.required(errors.required) : schema),
        }),
        phone: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.phone.required ? schema.required(errors.required) : schema),
        }),
        streetName: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.streetName.required ? schema.required(errors.required) : schema),
        }),
        streetNumber: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.streetNumber.required ? schema.required(errors.required) : schema),
        }),
        apartment: YupString(),
        city: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.city.required ? schema.required(errors.required) : schema),
        }),
        postalCode: YupString().when('sameAsBillingAddress', {
            is: false,
            then: (schema) => (fields.address.postalCode.required ? schema.required(errors.required) : schema),
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
                                                            setFieldValue('firstName', '');
                                                            setFieldValue('lastName', '');
                                                            setFieldValue('phone', '');
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

                                    {!values.sameAsBillingAddress && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <FormField name="firstName" field={fields.firstName} />
                                                <FormField name="lastName" field={fields.lastName} />
                                            </div>
                                            <FormField name="phone" type="tel" field={fields.phone} />
                                            <AddressFields fields={fields.address} locale={locale} />
                                        </>
                                    )}
                                </div>

                                <Separator />

                                <fieldset className="flex flex-col gap-2">
                                    <legend className="text-sm font-medium leading-none mb-2">
                                        {fields.shippingMethod.label}
                                        {fields.shippingMethod.required && <span className="text-destructive"> *</span>}
                                    </legend>
                                    <Field name="shippingMethod">
                                        {({
                                            field,
                                            form: { touched, errors, setFieldValue: setFV },
                                        }: FieldProps<string>) => (
                                            <>
                                                <RadioTileGroup
                                                    value={field.value}
                                                    onValueChange={(value) => setFV('shippingMethod', value)}
                                                    hasError={!!(touched.shippingMethod && errors.shippingMethod)}
                                                    options={shippingOptions.map((option) => ({
                                                        id: option.id,
                                                        label: option.name,
                                                        description: option.description,
                                                        extra: option.total ? (
                                                            <Typography
                                                                variant="small"
                                                                className="text-muted-foreground"
                                                            >
                                                                <Price price={option.total} />
                                                            </Typography>
                                                        ) : undefined,
                                                    }))}
                                                />
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
