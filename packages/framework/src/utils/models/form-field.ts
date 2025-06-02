export class FormField {
    id!: string;
    name!: string;
    label!: string;
    placeholder?: string;
    description?: string;
    errorMessages?: ErrorMessage[];
}

export class FormFieldWithRegex extends FormField {
    regexValidations!: RegexValidation[];
}

export class SelectFormField extends FormField {
    options: { label: string; value: string }[] = [];
}

export class ErrorMessage {
    id!: string;
    name!: string;
    type!: string;
    description!: string;
}

export class RegexValidation {
    type!: string;
    label!: string;
    regex!: string;
}
