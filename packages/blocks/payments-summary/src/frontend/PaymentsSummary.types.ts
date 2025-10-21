import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/payments-summary.client';

export interface PaymentsSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type PaymentsSummaryPureProps = PaymentsSummaryProps & Model.PaymentsSummaryBlock;

export interface PaymentsSummaryRendererProps extends Omit<PaymentsSummaryProps, ''> {
    slug: string[];
}
