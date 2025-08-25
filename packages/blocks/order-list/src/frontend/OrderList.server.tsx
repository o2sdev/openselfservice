import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { OrderListProps } from './OrderList.types';

export const OrderListDynamic = dynamic(() => import('./OrderList.client').then((module) => module.OrderListPure));

export const OrderList: React.FC<OrderListProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getOrderList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <OrderListDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (_error) {
        return null;
    }
};
