import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/order-details.client';

export interface OrderDetailsProps {
    id: string;
    orderId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type OrderDetailsPureProps = OrderDetailsProps & Model.OrderDetailsBlock;

export interface OrderDetailsRendererProps extends Omit<OrderDetailsProps, 'orderId'> {
    slug: string[];
}
