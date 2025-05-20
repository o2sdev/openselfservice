import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { OrdersSummaryProps } from './OrdersSummary.types';

export const OrdersSummaryDynamic = dynamic(() =>
    import('./OrdersSummary.client').then((module) => module.OrdersSummaryPure),
);

export const OrdersSummary: React.FC<OrdersSummaryProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getOrdersSummary(
            {
                id,
                dateFrom: dayjs().subtract(6, 'months').toISOString(),
                dateTo: dayjs().toISOString(),
                range: 'month',
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <OrdersSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        console.error(_error);
        return null;
    }
};
