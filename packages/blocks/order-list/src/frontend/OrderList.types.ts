import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/order-list.client';

export interface OrderListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    enableRowSelection?: boolean;
}

export interface OrderListRendererProps extends Omit<OrderListProps, ''> {
    slug: string[];
}

export type OrderListPureProps = OrderListProps & Model.OrderListBlock;
