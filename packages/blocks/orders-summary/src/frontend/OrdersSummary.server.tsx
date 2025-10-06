import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import React from 'react';

import { Request } from '../api-harmonization/orders-summary.client';
import { sdk } from '../sdk';

import { OrdersSummaryProps } from './OrdersSummary.types';

export const OrdersSummaryDynamic = dynamic(() =>
    import('./OrdersSummary.client').then((module) => module.OrdersSummaryPure),
);

export const OrdersSummary: React.FC<OrdersSummaryProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    try {
        const data = await sdk.blocks.getOrdersSummary(
            {
                id,
                dateFrom: dayjs().subtract(6, 'months').toISOString(),
                dateTo: dayjs().toISOString(),
                range: 'month',
            } as Request.GetOrdersSummaryBlockQuery,
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <OrdersSummaryDynamic
                {...data}
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        );
    } catch (_error) {
        console.error(_error);
        return null;
    }
};
