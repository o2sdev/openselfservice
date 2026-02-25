import { Block } from '@/utils/models';

interface CheckoutFieldConfig {
    label: string;
    placeholder?: string;
    required: boolean;
}

export class CheckoutShippingAddressBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    fields!: {
        sameAsBillingAddress: { label: string };
        address: {
            streetName: CheckoutFieldConfig;
            streetNumber?: CheckoutFieldConfig;
            apartment?: CheckoutFieldConfig;
            city: CheckoutFieldConfig;
            postalCode: CheckoutFieldConfig;
            country: CheckoutFieldConfig;
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
    summaryLabels!: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
}
