import { ErrorMessage } from 'formik';
import { CircleAlert } from 'lucide-react';
import React from 'react';

import { Alert, AlertDescription } from '@o2s/ui/components/alert';
import { InputWithLabelAndDescription } from '@o2s/ui/components/input';
import { Typography } from '@o2s/ui/components/typography';

import { InputValidations } from '@/components/InputValidation/InputValidation';

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
            <InputWithLabelAndDescription
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
                adornment={adornment}
                adornmentProps={adornmentProps}
                description={description}
            />

            <ErrorMessage name={name}>
                {(msg) => (
                    <Alert variant="destructive">
                        <CircleAlert className="h-4 w-4 mt-1" />
                        <AlertDescription>
                            <Typography variant="small" className="mt-1">
                                {msg}
                            </Typography>
                        </AlertDescription>
                    </Alert>
                )}
            </ErrorMessage>
            {validations && (
                <InputValidations targetInputName={field.name} validations={validations} value={field.value} />
            )}
        </div>
    );
};
