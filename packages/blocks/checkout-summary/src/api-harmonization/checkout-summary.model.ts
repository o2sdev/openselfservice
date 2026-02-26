import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class CheckoutSummaryBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutSummaryBlock';
    title!: string;
    subtitle?: string;
    sections!: {
        products: {
            title: string;
            labels: { quantity: string; price: string; total: string };
        };
        company: {
            title: string;
            addressLabel?: string;
            companyNameLabel?: string;
            taxIdLabel?: string;
        };
        shipping: { title: string; addressLabel?: string; methodLabel?: string };
        billing: { title: string; methodLabel?: string };
        summary: {
            title: string;
            subtotalLabel: string;
            taxLabel: string;
            discountLabel?: string;
            shippingLabel: string;
            freeLabel?: string;
            totalLabel: string;
            notesTitle?: string;
        };
    };
    buttons!: {
        back: { label: string; path: string };
        confirm: { label: string; path: string };
    };
    loading!: { confirming: string };
    placeholders!: {
        companyData: string;
        shippingAddress: string;
        sameAsBillingAddress: string;
        billingAddress: string;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
}
