export class FormField {
    id!: string;
    name!: string;
    label!: string;
    placeholder?: string;
    errorMessages?: ErrorMessage[];
}

export class ErrorMessage {
    id!: string;
    name!: string;
    type!: string;
    description!: string;
}
