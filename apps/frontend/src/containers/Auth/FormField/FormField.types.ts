import { FieldProps } from 'formik';

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
    validations?: {
        id: string;
        type: string;
        label: string;
        regex: string;
    }[];
}

export interface PasswordFormFieldProps extends Omit<FormFieldProps, 'type' | 'adornment' | 'adornmentProps'> {
    showLabel: string;
    hideLabel: string;
}
