import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Field config with label, placeholder, required */
interface CheckoutBillingPaymentField {
    label: string;
    placeholder?: string;
    required: boolean;
}

/** Payment method option */
export interface CheckoutBillingPaymentMethodOption {
    value: string;
    label: string;
}

/** Labels for cart summary sidebar */
export interface CheckoutBillingPaymentSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
}

export class CheckoutBillingPaymentBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutBillingPaymentBlock';
    title!: string;
    subtitle?: string;
    fields!: {
        billingAddressSectionTitle?: string;
        sameAsShippingAddress: { label: string };
        billingAddress: {
            street: CheckoutBillingPaymentField;
            city: CheckoutBillingPaymentField;
            postalCode: CheckoutBillingPaymentField;
            country: CheckoutBillingPaymentField;
        };
        paymentMethod: {
            label: string;
            placeholder?: string;
            required: boolean;
            options: CheckoutBillingPaymentMethodOption[];
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
    summaryLabels!: CheckoutBillingPaymentSummaryLabels;
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
