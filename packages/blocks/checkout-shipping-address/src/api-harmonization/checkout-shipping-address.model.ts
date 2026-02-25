import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Field config with label, placeholder, required */
interface CheckoutShippingAddressField {
    label: string;
    placeholder?: string;
    required: boolean;
}

/** Shipping method option (from API) */
export interface CheckoutShippingAddressShippingOption {
    id: string;
    name: string;
    description?: string;
    total?: Models.Price.Price;
}

/** Labels for cart summary sidebar */
export interface CheckoutShippingAddressSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
}

export class CheckoutShippingAddressBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutShippingAddressBlock';
    title!: string;
    subtitle?: string;
    fields!: {
        sameAsBillingAddress: { label: string };
        address: {
            streetName: CheckoutShippingAddressField;
            streetNumber?: CheckoutShippingAddressField;
            apartment?: CheckoutShippingAddressField;
            city: CheckoutShippingAddressField;
            postalCode: CheckoutShippingAddressField;
            country: CheckoutShippingAddressField;
        };
        shippingMethod: {
            label: string;
            placeholder?: string;
            required: boolean;
        };
    };
    buttons!: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors!: {
        required: string;
        invalidPostalCode: string;
    };
    summaryLabels!: CheckoutShippingAddressSummaryLabels;
    totals?: {
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
}
