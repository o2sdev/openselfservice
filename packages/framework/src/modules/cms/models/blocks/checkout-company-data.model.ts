import { Block } from '@/utils/models';

interface CheckoutFieldConfig {
    label: string;
    placeholder?: string;
    required: boolean;
}

export class CheckoutCompanyDataBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    fields?: {
        companyName: CheckoutFieldConfig;
        taxId: CheckoutFieldConfig;
        address: {
            streetName: CheckoutFieldConfig;
            streetNumber?: CheckoutFieldConfig;
            apartment?: CheckoutFieldConfig;
            city: CheckoutFieldConfig;
            postalCode: CheckoutFieldConfig;
            country: CheckoutFieldConfig;
        };
    };
    buttons?: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors?: {
        required: string;
        invalidTaxId: string;
        invalidPostalCode: string;
    };
    summaryLabels?: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    continueShopping?: { label: string; path: string };
    stepIndicator?: { steps: string[]; currentStep: number };
    billingInfoNote?: { icon?: string; text: string };
}
