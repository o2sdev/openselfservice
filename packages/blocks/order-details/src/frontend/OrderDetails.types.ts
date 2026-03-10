import { VariantProps } from 'class-variance-authority';
import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import { baseVariant } from '@o2s/ui/lib/utils';

import type { Model } from '../api-harmonization/order-details.client';

export interface OrderDetailsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    orderId: string;
}

export type OrderDetailsPureProps = OrderDetailsProps & Model.OrderDetailsBlock;

export interface OrderDetailsRendererProps extends Omit<OrderDetailsProps, 'orderId'> {
    slug: string[];
}

export type Action = {
    variant: VariantProps<typeof baseVariant>['variant'];
    className?: string;
} & ({ label: string; icon?: string } | { label?: string; icon: string });
