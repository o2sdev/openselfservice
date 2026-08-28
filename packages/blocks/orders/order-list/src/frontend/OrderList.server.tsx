import dynamic from 'next/dynamic';
import React from 'react';

import { parseFiltersFromSearchParams } from '@o2s/ui/hooks/use-url-filters.utils';

import type { Model, Request } from '../api-harmonization/order-list.client';
import { sdk } from '../sdk';

import { OrderListProps } from './OrderList.types';

/** Filter keys the block query understands, as the client writes them (`?order_sort=…`). */
const FILTER_KEYS = ['sort', 'status', 'paymentStatus', 'dateFrom', 'dateTo'] as const;

const NAMESPACE = 'order';

export const OrderListDynamic = dynamic(() => import('./OrderList.client').then((module) => module.OrderListPure));

export const OrderList: React.FC<OrderListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    searchParams,
}) => {
    let data: Model.OrderListBlock;
    try {
        data = await sdk.blocks.getOrderList(
            {
                id,
                ...parseFiltersFromSearchParams<Request.GetOrderListBlockQuery>(searchParams, {
                    namespace: NAMESPACE,
                    keys: FILTER_KEYS,
                }),
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return (
        <OrderListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
