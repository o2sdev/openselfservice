import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-billing-payment.client';

export interface CheckoutBillingPaymentProps {
    /** True when Next.js draft mode is on (CMS preview). */
    isDraftModeEnabled?: boolean;
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutBillingPaymentPureProps = CheckoutBillingPaymentProps & Model.CheckoutBillingPaymentBlock;

export type CheckoutBillingPaymentRendererProps = Omit<CheckoutBillingPaymentProps, ''> & {
    slug: string[];
};
