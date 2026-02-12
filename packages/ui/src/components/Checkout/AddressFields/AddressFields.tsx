import { ErrorMessage, Field, FieldProps } from 'formik';
import React from 'react';

import { Input } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Typography } from '@o2s/ui/elements/typography';

import type { AddressFieldsProps } from './AddressFields.types';

export const AddressFields: React.FC<Readonly<AddressFieldsProps>> = ({ fields, idPrefix = '' }) => {
    const id = (name: string) => (idPrefix ? `${idPrefix}${name.charAt(0).toUpperCase() + name.slice(1)}` : name);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 flex flex-col gap-2">
                <Label htmlFor={id('street')}>
                    {fields.street.label}
                    {fields.street.required && <span className="text-destructive"> *</span>}
                </Label>
                <Field name="street">
                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                        <>
                            <Input
                                id={id('street')}
                                {...field}
                                placeholder={fields.street.placeholder}
                                className={touched.street && errors.street ? 'border-destructive' : ''}
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
                <Label htmlFor={id('city')}>
                    {fields.city.label}
                    {fields.city.required && <span className="text-destructive"> *</span>}
                </Label>
                <Field name="city">
                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                        <>
                            <Input
                                id={id('city')}
                                {...field}
                                placeholder={fields.city.placeholder}
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
                <Label htmlFor={id('postalCode')}>
                    {fields.postalCode.label}
                    {fields.postalCode.required && <span className="text-destructive"> *</span>}
                </Label>
                <Field name="postalCode">
                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                        <>
                            <Input
                                id={id('postalCode')}
                                {...field}
                                placeholder={fields.postalCode.placeholder ?? 'XX-XXX'}
                                className={touched.postalCode && errors.postalCode ? 'border-destructive' : ''}
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
                <Label htmlFor={id('country')}>
                    {fields.country.label}
                    {fields.country.required && <span className="text-destructive"> *</span>}
                </Label>
                <Field name="country">
                    {({ field, form: { touched, errors } }: FieldProps<string>) => (
                        <>
                            <Input
                                id={id('country')}
                                {...field}
                                placeholder={fields.country.placeholder}
                                className={touched.country && errors.country ? 'border-destructive' : ''}
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
    );
};
