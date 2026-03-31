import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/order-list.client';
import { sdk } from '../sdk';

import { OrderListProps } from './OrderList.types';

export const OrderListDynamic = dynamic(() => import('./OrderList.client').then((module) => module.OrderListPure));

export const OrderList: React.FC<OrderListProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.OrderListBlock;
    try {
        data = await sdk.blocks.getOrderList(
            {
                id,
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
