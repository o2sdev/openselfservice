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
        firstName: CheckoutFieldConfig;
        lastName: CheckoutFieldConfig;
        phone: CheckoutFieldConfig;
        address: {
            streetName: CheckoutFieldConfig;
            streetNumber: CheckoutFieldConfig;
            apartment: CheckoutFieldConfig;
            city: CheckoutFieldConfig;
            postalCode: CheckoutFieldConfig;
            country: CheckoutFieldConfig;
        };
        shippingMethod: CheckoutFieldConfig;
    };
    buttons!: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors!: {
        required: string;
        invalidPostalCode: string;
        cartNotFound: string;
        submitError: string;
    };
    summaryLabels!: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
        discountLabel: string;
        shippingLabel: string;
        freeLabel: string;
    };
    stepIndicator!: { steps: string[]; currentStep: number };
    cartPath!: string;
}
