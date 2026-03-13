import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/order-list.client';

export interface OrderListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    enableRowSelection?: boolean;
}

export type OrderListRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>> &
    Pick<OrderListProps, 'enableRowSelection'>;

export type OrderListPureProps = OrderListProps & Model.OrderListBlock;
