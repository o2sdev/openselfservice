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

/** Company data from checkout step 1 */
export interface CheckoutSummaryCompanyData {
    companyName: string;
    nip: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
}

/** Shipping address from checkout step 2 */
export interface CheckoutSummaryShippingAddress {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    sameAsCompanyAddress: boolean;
    shippingMethod: string;
    shippingMethodLabel?: string;
}

/** Billing/payment from checkout step 3 */
export interface CheckoutSummaryBillingPayment {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    sameAsShippingAddress: boolean;
    paymentMethod: string;
    paymentMethodLabel?: string;
}

/** Checkout data (company, shipping, billing) - from API or previous steps */
export interface CheckoutSummaryCheckoutData {
    companyData?: CheckoutSummaryCompanyData;
    shippingAddress?: CheckoutSummaryShippingAddress;
    billingPayment?: CheckoutSummaryBillingPayment;
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
        shipping: { title: string; addressLabel?: string; methodLabel?: string };
        billing: { title: string; addressLabel?: string; methodLabel?: string };
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
    /** Checkout data (company, shipping, billing) - from API or previous checkout steps */
    checkoutData?: CheckoutSummaryCheckoutData;
    /** Checkout step indicator (steps labels + current step index 1-based) */
    stepIndicator?: { steps: string[]; currentStep: number };
}
