import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Product info for cart item display */
export interface CheckoutSummaryItemProduct {
    name: string;
    subtitle?: string;
    image?: { url: string; alt?: string };
}

/** Cart item for checkout summary */
export interface CheckoutSummaryItem {
    id: string;
    productId: string;
    quantity: number;
    price: Models.Price.Price;
    total: Models.Price.Price;
    product?: CheckoutSummaryItemProduct;
}

/** Totals with optional shipping */
export interface CheckoutSummaryTotals {
    subtotal: Models.Price.Price;
    tax: Models.Price.Price;
    shipping: Models.Price.Price;
    total: Models.Price.Price;
}

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
            nipLabel?: string;
        };
        shipping: { title: string; methodLabel?: string };
        billing: { title: string; methodLabel?: string };
        summary: {
            title: string;
            subtotalLabel: string;
            taxLabel: string;
            shippingLabel: string;
            totalLabel: string;
        };
        notes?: {
            title: string;
            comment: { label: string; placeholder?: string };
            specialInstructions: { label: string; placeholder?: string };
        };
    };
    buttons!: {
        back: { label: string; path: string };
        confirm: string;
    };
    loading?: { confirming: string };
    /** Placeholder messages when no checkout data */
    placeholders?: {
        companyData: string;
        shippingAddress: string;
        billingAddress: string;
        sameAsCompanyAddress: string;
        sameAsShippingAddress: string;
    };
    items!: CheckoutSummaryItem[];
    totals!: CheckoutSummaryTotals;
}
