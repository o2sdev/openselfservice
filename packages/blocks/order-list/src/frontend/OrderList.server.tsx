import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { OrderListProps } from './OrderList.types';

export const OrderListDynamic = dynamic(() => import('./OrderList.client').then((module) => module.OrderListPure));

export const OrderList = async ({ id, accessToken, locale, routing, hasPriority }: OrderListProps) => {
    try {
        const data = await sdk.blocks.getOrderList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (_error) {
        return null;
    }
};
