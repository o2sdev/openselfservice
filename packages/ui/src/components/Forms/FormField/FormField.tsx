import React from 'react';

import { InputWithDetails } from '@o2s/ui/elements/input';

import { InputValidations } from '../InputValidations';

import { FormFieldProps } from './FormField.types';

export const FormField: React.FC<FormFieldProps> = ({
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
    isRequired = false,
    requiredLabel,
    optionalLabel,
    readOnly = false,
    hasError: hasErrorProp = false,
    autoComplete,
    ref,
}) => {
    const hasError = !!(touched[name] && errors[name]) || hasErrorProp;

    return (
        <div className="flex flex-col gap-2">
            <InputWithDetails
                ref={ref}
                id={field.name}
                type={type}
                placeholder={placeholder}
                aria-invalid={hasError}
                name={name}
                value={field.value}
                disabled={disabled}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label={label}
                labelAdornment={labelAdornment}
                adornment={adornment}
                adornmentProps={adornmentProps}
                caption={description}
                hasError={hasError}
                errorMessage={errors[name]}
                required={isRequired}
                isRequired={isRequired}
                requiredLabel={requiredLabel}
                optionalLabel={optionalLabel}
                readOnly={readOnly}
                autoComplete={autoComplete}
                labelWrapperClassName="sr-only"
            />

            {validations && (
                <InputValidations targetInputName={field.name} validations={validations} value={field.value} />
            )}
        </div>
    );
};
