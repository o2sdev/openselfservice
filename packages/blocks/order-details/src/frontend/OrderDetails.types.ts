import { VariantProps } from 'class-variance-authority';
import { defineRouting } from 'next-intl/routing';

import { baseVariant } from '@o2s/ui/lib/utils';

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

export type Action = {
    label?: string;
    icon?: string;
    variant: VariantProps<typeof baseVariant>['variant'];
    className?: string;
};
