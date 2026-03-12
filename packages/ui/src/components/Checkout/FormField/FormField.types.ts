export interface FieldConfig {
    label: string;
    placeholder?: string;
    required: boolean;
}

export interface FormFieldProps {
    name: string;
    field: FieldConfig;
    type?: 'text' | 'email' | 'tel' | 'number';
    disabled?: boolean;
    className?: string;
}
