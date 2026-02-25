import { Block } from '@/utils/models';

export class CheckoutBillingPaymentBlock extends Block.Block {
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
    summaryLabels!: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
}
