import React from 'react';

import { InputWithDetails } from '@o2s/ui/components/input';

import { InputValidations } from '@/components/InputValidations/InputValidations';

import { FormFieldProps } from './FormField.types';

export const FormField: React.FC<Readonly<FormFieldProps>> = ({
    field,
    touched,
    errors,
    name,
    label,
    labelAdornment,
    placeholder = '',
    type = 'text',
    disabled = false,
    adornment,
    adornmentProps,
    description,
    validations,
}) => {
    const hasError = !!(touched[name] && errors[name]);

    return (
        <div className="flex flex-col gap-2">
            <InputWithDetails
                id={field.name}
                type={type}
                placeholder={placeholder}
                aria-invalid={hasError}
                name={field.name}
                value={field.value}
                disabled={disabled}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label={label}
                labelAdornment={labelAdornment}
                adornment={adornment}
                adornmentProps={adornmentProps}
                description={description}
                hasError={hasError}
                errorMessage={errors[name]}
            />

            {validations && (
                <InputValidations targetInputName={field.name} validations={validations} value={field.value} />
            )}
        </div>
    );
};
