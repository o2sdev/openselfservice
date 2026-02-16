import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-summary.client';

export interface CheckoutData {
    companyData?: {
        companyName: string;
        nip: string;
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    shippingAddress?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
        sameAsCompanyAddress: boolean;
        shippingMethod: string;
        shippingMethodLabel?: string;
    };
    billingPayment?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
        sameAsShippingAddress: boolean;
        paymentMethod: string;
        paymentMethodLabel?: string;
    };
}

export interface CreateOrderResult {
    success: boolean;
    orderId?: string;
    order?: { id: string; [key: string]: unknown };
    error?: string;
}

export interface CheckoutSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    /** Called when user confirms order. When not provided, confirm button is disabled. */
    onConfirm?: (params: {
        cartItems: Model.CheckoutSummaryItem[];
        checkoutData: CheckoutData;
        notes: { comment: string; specialInstructions: string };
    }) => Promise<CreateOrderResult>;
}

export type CheckoutSummaryPureProps = CheckoutSummaryProps & Model.CheckoutSummaryBlock;

export type CheckoutSummaryRendererProps = Omit<CheckoutSummaryProps, ''> & {
    slug: string[];
};
