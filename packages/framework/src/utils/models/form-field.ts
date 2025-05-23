export class FormField {
    id!: string;
    name!: string;
    label!: string;
    placeholder?: string;
    description?: string;
    errorMessages?: ErrorMessage[];
    regexValidations?: RegexValidation[];
}

export class ErrorMessage {
    id!: string;
    name!: string;
    type!: string;
    description!: string;
}

export class RegexValidation {
    id!: string;
    type!: 'min' | 'lowercase' | 'uppercase' | 'digit' | 'special' | 'nospace';
    label!: string;
    regex!: string;
}
