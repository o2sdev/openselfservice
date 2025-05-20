import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { OrderDetailsProps } from './OrderDetails.types';

export const OrderDetailsDynamic = dynamic(() =>
    import('./OrderDetails.client').then((module) => module.OrderDetailsPure),
);

export const OrderDetails: React.FC<OrderDetailsProps> = async ({ id, orderId, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getOrderDetails(
            {
                id: orderId,
            },
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <OrderDetailsDynamic {...data} id={id} orderId={orderId} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
