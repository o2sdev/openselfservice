export interface AddressFieldConfig {
    label: string;
    placeholder?: string;
    required: boolean;
}

export interface AddressFieldsProps {
    fields: {
        street: AddressFieldConfig;
        city: AddressFieldConfig;
        postalCode: AddressFieldConfig;
        country: AddressFieldConfig;
    };
    /** Prefix for element ids (e.g. 'billing' -> billingStreet, billingCity...) */
    idPrefix?: string;
}
