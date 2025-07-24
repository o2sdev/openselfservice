import { Blocks } from '@o2s/api-harmonization';
import { defineRouting } from 'next-intl/routing';

export interface PaymentsSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type PaymentsSummaryPureProps = PaymentsSummaryProps & Blocks.PaymentsSummary.Model.PaymentsSummaryBlock;

export interface PaymentsSummaryRendererProps extends Omit<PaymentsSummaryProps, ''> {
    slug: string[];
}
