import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-summary.client';

export interface CheckoutSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutSummaryPureProps = CheckoutSummaryProps &
    Model.CheckoutSummaryBlock & { cartIdLocalStorageKey: string };

export type CheckoutSummaryRendererProps = Omit<CheckoutSummaryProps, ''> & {
    slug: string[];
};
