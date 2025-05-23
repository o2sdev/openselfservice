import { FieldProps } from 'formik';

import { InputValidationsRegExpLabel } from '@/components/InputValidations/InputValidations.types';

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
    validations?: InputValidationsRegExpLabel[];
}

export interface PasswordFormFieldProps extends Omit<FormFieldProps, 'type' | 'adornment' | 'adornmentProps'> {
    showLabel: string;
    hideLabel: string;
}
