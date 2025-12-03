import dynamic from 'next/dynamic';
import React from 'react';

import { Request } from '../api-harmonization/order-details.client';
import { sdk } from '../sdk';

import { OrderDetailsProps } from './OrderDetails.types';

export const OrderDetailsDynamic = dynamic(() =>
    import('./OrderDetails.client').then((module) => module.OrderDetailsPure),
);

export const OrderDetails = async ({ id, orderId, accessToken, locale, routing, hasPriority }: OrderDetailsProps) => {
    try {
        const data = await sdk.blocks.getOrderDetails(
            {
                id: orderId,
            },
            {
                id,
            } as Request.GetOrderDetailsBlockQuery,
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <OrderDetailsDynamic
                {...data}
                id={id}
                orderId={orderId}
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
