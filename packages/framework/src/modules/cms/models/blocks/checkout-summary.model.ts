import { Block } from '@/utils/models';

export class CheckoutSummaryBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    sections!: {
        products: {
            title: string;
            labels: { quantity: string; price: string; total: string };
        };
        company: {
            title: string;
            companyNameLabel: string;
            taxIdLabel: string;
            addressLabel?: string;
        };
        shipping: {
            title: string;
            addressLabel?: string;
            methodLabel: string;
        };
        billing: {
            title: string;
            addressLabel?: string;
            methodLabel: string;
        };
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
        confirm: { label: string; path: string };
        back: { label: string; path: string };
    };
    errors!: {
        cartNotFound: string;
    };
    loading!: {
        confirming: string;
    };
    placeholders!: {
        companyData: string;
        shippingAddress: string;
        sameAsBillingAddress: string;
        billingAddress: string;
    };
    stepIndicator?: { steps: string[]; currentStep: number };
    cartPath?: string;
}
