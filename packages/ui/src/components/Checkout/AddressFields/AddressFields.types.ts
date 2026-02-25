export interface AddressFieldConfig {
    label: string;
    placeholder?: string;
    required: boolean;
}

export interface AddressFieldsProps {
    fields: {
        streetName: AddressFieldConfig;
        streetNumber?: AddressFieldConfig;
        apartment?: AddressFieldConfig;
        city: AddressFieldConfig;
        postalCode: AddressFieldConfig;
        country: AddressFieldConfig;
    };
    /** Prefix for element ids (e.g. 'billing' -> billingStreetName, billingCity...) */
    idPrefix?: string;
}
