import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/order-confirmation.client';

export interface OrderConfirmationProps {
    id: string;
    orderId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type OrderConfirmationPureProps = OrderConfirmationProps & Model.OrderConfirmationBlock;

export type OrderConfirmationRendererProps = Omit<OrderConfirmationProps, 'orderId'> & {
    slug: string[];
};
