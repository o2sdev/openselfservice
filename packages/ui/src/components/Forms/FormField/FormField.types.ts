import { Models } from '@o2s/framework/modules';
import { FieldProps } from 'formik';
import React from 'react';

export interface FormFieldProps {
    field: FieldProps['field'];
    touched: Record<string, boolean>;
    errors: Record<string, string>;
    name: string;
    label: string;
    labelAdornment?: React.ReactNode;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    description?: string;
    adornment?: React.ReactNode;
    adornmentProps?: {
        behavior: 'append' | 'prepend';
    };
    validations?: Models.FormField.PatternValidation[];
    isRequired?: boolean;
    requiredLabel?: string;
    optionalLabel?: string;
    readOnly?: boolean;
    hasError?: boolean;
    autoComplete?: HTMLInputElement['autocomplete'];
    ref?: React.Ref<HTMLInputElement>;
}

export interface CheckboxFormFieldProps {
    field: FieldProps['field'];
    touched: Record<string, boolean>;
    errors: Record<string, string>;
    name: string;
    label: string;
    disabled?: boolean;
    description?: string;
    isRequired?: boolean;
    requiredLabel?: string;
    optionalLabel?: string;
    hasError?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
}
