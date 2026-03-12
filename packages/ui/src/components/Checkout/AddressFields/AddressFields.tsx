import { ErrorMessage, Field, FieldProps } from 'formik';
import React from 'react';

import { FormField } from '@o2s/ui/components/Checkout/FormField';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Typography } from '@o2s/ui/elements/typography';

import type { AddressFieldsProps } from './AddressFields.types';

const COUNTRY_CODES = ['PL', 'DE', 'GB'] as const;

export const AddressFields: React.FC<Readonly<AddressFieldsProps>> = ({ fields, idPrefix = '', locale }) => {
    const countryNames = new Intl.DisplayNames([locale], { type: 'region' });
    const name = (fieldName: string) =>
        idPrefix ? `${idPrefix}${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}` : fieldName;

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
                <FormField name={name('streetName')} field={fields.streetName} />
            </div>

            {(fields.streetNumber || fields.apartment) && (
                <>
                    {fields.streetNumber && <FormField name={name('streetNumber')} field={fields.streetNumber} />}

                    {fields.apartment && <FormField name={name('apartment')} field={fields.apartment} />}
                </>
            )}

            <FormField name={name('city')} field={fields.city} />

            <FormField name={name('postalCode')} field={fields.postalCode} />

            <div className="md:col-span-2">
                <Field name={name('country')}>
                    {({ field, form: { touched, errors, setFieldValue } }: FieldProps<string>) => {
                        const fieldName = name('country');
                        const fieldTouched = (touched as Record<string, boolean>)[fieldName];
                        const fieldError = (errors as Record<string, string>)[fieldName];
                        const hasError = !!(fieldTouched && fieldError);

                        return (
                            <div className="grid gap-2">
                                <Select value={field.value} onValueChange={(value) => setFieldValue(fieldName, value)}>
                                    <SelectTrigger id={fieldName} hasError={hasError}>
                                        <SelectValue placeholder={fields.country.placeholder} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {COUNTRY_CODES.map((code) => (
                                            <SelectItem key={code} value={code}>
                                                {countryNames.of(code)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <ErrorMessage name={fieldName}>
                                    {(msg) => (
                                        <Typography variant="small" className="text-destructive">
                                            {msg}
                                        </Typography>
                                    )}
                                </ErrorMessage>
                            </div>
                        );
                    }}
                </Field>
            </div>
        </div>
    );
};
