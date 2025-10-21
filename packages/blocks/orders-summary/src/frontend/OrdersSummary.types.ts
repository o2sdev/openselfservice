import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/orders-summary.client';

export interface OrdersSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type OrdersSummaryPureProps = OrdersSummaryProps & Model.OrdersSummaryBlock;

export interface OrdersSummaryRendererProps extends Omit<OrdersSummaryProps, ''> {
    slug: string[];
}
