import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Field config with label, placeholder, required */
interface CheckoutShippingAddressField {
    label: string;
    placeholder?: string;
    required: boolean;
}

/** Shipping method option */
export interface CheckoutShippingAddressShippingOption {
    value: string;
    label: string;
    price?: Models.Price.Price;
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
        sameAsCompanyAddress: { label: string };
        address: {
            street: CheckoutShippingAddressField;
            city: CheckoutShippingAddressField;
            postalCode: CheckoutShippingAddressField;
            country: CheckoutShippingAddressField;
        };
        shippingMethod: {
            label: string;
            placeholder: string;
            required: boolean;
            options: CheckoutShippingAddressShippingOption[];
        };
    };
    buttons!: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors?: {
        required: string;
        invalidPostalCode: string;
    };
    /** Cart summary for sidebar */
    summaryLabels!: CheckoutShippingAddressSummaryLabels;
    totals!: {
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
    };
    continueShopping?: { label: string; path: string };
    checkoutButton?: { label: string; path: string; icon?: string };
    /** Checkout step indicator (steps labels + current step index 1-based) */
    stepIndicator?: { steps: string[]; currentStep: number };
}
