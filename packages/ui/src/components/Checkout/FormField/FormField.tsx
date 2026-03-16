import { Field, FieldProps } from 'formik';
import React from 'react';

import { InputWithDetails } from '@o2s/ui/elements/input';

import type { FormFieldProps } from './FormField.types';

export const FormField: React.FC<Readonly<FormFieldProps>> = ({
    name,
    field: fieldConfig,
    type = 'text',
    disabled = false,
    className,
}) => {
    return (
        <Field name={name}>
            {({ field, form: { touched, errors } }: FieldProps<string>) => {
                const fieldTouched = (touched as Record<string, boolean>)[name];
                const fieldError = (errors as Record<string, string>)[name];
                const hasError = !!(fieldTouched && fieldError);

                return (
                    <InputWithDetails
                        id={name}
                        type={type}
                        label={fieldConfig.label}
                        placeholder={fieldConfig.placeholder}
                        isRequired={fieldConfig.required}
                        disabled={disabled}
                        hasError={hasError}
                        errorMessage={hasError ? String(fieldError) : undefined}
                        className={className}
                        {...field}
                    />
                );
            }}
        </Field>
    );
};
