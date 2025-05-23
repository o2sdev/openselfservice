import { ErrorMessage } from 'formik';
import { CircleAlert } from 'lucide-react';
import React from 'react';

import { Alert, AlertDescription } from '@o2s/ui/components/alert';
import { InputWithDetails } from '@o2s/ui/components/input';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

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
    return (
        <div className="flex flex-col gap-2">
            <InputWithDetails
                id={field.name}
                type={type}
                placeholder={placeholder}
                aria-invalid={!!(touched[name] && errors[name])}
                name={field.name}
                value={field.value}
                disabled={disabled}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label={label}
                labelAdornment={labelAdornment}
                labelClassName={cn(errors[name] && 'text-destructive')}
                adornment={adornment}
                adornmentProps={adornmentProps}
                description={description}
            />

            <ErrorMessage name={name}>
                {(msg) => (
                    <Typography variant="small" className="mb-1 text-destructive font-medium">
                        {msg}
                    </Typography>
                )}
            </ErrorMessage>
            {validations && (
                <InputValidations targetInputName={field.name} validations={validations} value={field.value} />
            )}
        </div>
    );
};
