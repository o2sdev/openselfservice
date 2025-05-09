import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { OrderListProps } from './OrderList.types';

export const OrderListDynamic = dynamic(() => import('./OrderList.client').then((module) => module.OrderListPure));

export const OrderList: React.FC<OrderListProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.blocks.getOrderList(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <OrderListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};
