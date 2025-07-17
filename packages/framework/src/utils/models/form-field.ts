export class FormField {
    id!: string;
    name!: string;
    label!: string;
    placeholder?: string;
    description?: string;
    caption?: string;
    errorMessages?: ErrorMessage[];
}

export class ErrorMessage {
    id!: string;
    name!: string;
    type!: string;
    description!: string;
}
