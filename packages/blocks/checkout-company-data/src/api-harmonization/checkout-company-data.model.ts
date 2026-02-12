import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Field config with label, placeholder, required */
interface CheckoutCompanyDataField {
    label: string;
    placeholder?: string;
    required: boolean;
}

/** Labels for cart summary sidebar */
export interface CheckoutCompanyDataSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
}

export class CheckoutCompanyDataBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutCompanyDataBlock';
    title!: string;
    subtitle?: string;
    fields!: {
        companyName: CheckoutCompanyDataField;
        nip: CheckoutCompanyDataField;
        addressSectionTitle?: string;
        address: {
            street: CheckoutCompanyDataField;
            city: CheckoutCompanyDataField;
            postalCode: CheckoutCompanyDataField;
            country: CheckoutCompanyDataField;
        };
    };
    buttons!: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors?: {
        required: string;
        invalidNip: string;
        invalidPostalCode: string;
    };
    /** Cart summary for sidebar */
    summaryLabels!: CheckoutCompanyDataSummaryLabels;
    totals!: {
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
    };
    /** Back to cart link (shown in CartSummary) */
    continueShopping?: { label: string; path: string };
    /** Proceed to next step (shown in CartSummary, optional) */
    checkoutButton?: { label: string; path: string; icon?: string };
    /** Checkout step indicator (steps labels + current step index 1-based) */
    stepIndicator?: { steps: string[]; currentStep: number };
}
