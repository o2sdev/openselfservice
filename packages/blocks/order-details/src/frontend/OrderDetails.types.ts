import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/order-details.client';

export interface OrderDetailsProps {
    id: string;
    orderId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type OrderDetailsPureProps = OrderDetailsProps & Model.OrderDetailsBlock;

export interface OrderDetailsRendererProps extends Omit<OrderDetailsProps, 'orderId'> {
    slug: string[];
}
