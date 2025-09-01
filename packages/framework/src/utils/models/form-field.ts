export class FormFieldBase {
    id!: string;
    name!: string;
    label!: string;
    placeholder?: string;
    description?: string;
    caption?: string;
    errorMessages?: ErrorMessage[];
}

export type FormField = Input | Select | Switch;

export class Input extends FormFieldBase {
    __typename!: 'Input';
}

export class Select extends FormFieldBase {
    __typename!: 'Select';
    options!: Option<string>[];
}

export class Switch extends FormFieldBase {
    __typename!: 'Switch';
    options!: [Option<boolean>, Option<boolean>];
}

export class Option<T> {
    value!: T;
    label!: string;
    isDefault?: boolean;
}

export class ErrorMessage {
    id!: string;
    name!: string;
    type!: string;
    description!: string;
}

export class PatternValidation {
    type!: string;
    label!: string;
    pattern!: string;
}
