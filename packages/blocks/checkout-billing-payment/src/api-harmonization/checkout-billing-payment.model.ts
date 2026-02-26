import { Models as ApiModels } from '@o2s/utils.api-harmonization';

/** Labels for cart summary sidebar */
export interface CheckoutBillingPaymentSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
    discountLabel?: string;
    shippingLabel?: string;
    freeLabel?: string;
}

export class CheckoutBillingPaymentBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutBillingPaymentBlock';
    title!: string;
    subtitle?: string;
    fields!: {
        paymentMethod: {
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
    };
    summaryLabels!: CheckoutBillingPaymentSummaryLabels;
    stepIndicator?: { steps: string[]; currentStep: number };
}
