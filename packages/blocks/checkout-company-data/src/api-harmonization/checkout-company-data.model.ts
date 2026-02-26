import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

interface CheckoutCompanyDataField {
    label: string;
    placeholder?: string;
    required: boolean;
}

export interface CheckoutCompanyDataSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
    discountLabel?: string;
    shippingLabel?: string;
    freeLabel?: string;
}

export class CheckoutCompanyDataBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutCompanyDataBlock';
    title!: string;
    subtitle?: string;
    fields!: {
        companyName: CheckoutCompanyDataField;
        taxId: CheckoutCompanyDataField;
        notes?: CheckoutCompanyDataField;
        address: {
            streetName: CheckoutCompanyDataField;
            streetNumber?: CheckoutCompanyDataField;
            apartment?: CheckoutCompanyDataField;
            city: CheckoutCompanyDataField;
            postalCode: CheckoutCompanyDataField;
            country: CheckoutCompanyDataField;
        };
    };
    buttons!: {
        back: { label: string; path: string };
        next: { label: string; path: string };
    };
    errors!: {
        required: string;
        invalidTaxId: string;
        invalidPostalCode: string;
    };
    summaryLabels!: CheckoutCompanyDataSummaryLabels;
    totals?: {
        subtotal: Models.Price.Price;
        tax: Models.Price.Price;
        total: Models.Price.Price;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
    billingInfoNote?: { icon?: string; text: string };
}
