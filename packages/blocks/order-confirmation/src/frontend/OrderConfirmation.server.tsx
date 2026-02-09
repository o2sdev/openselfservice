import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/order-confirmation.client';
import { sdk } from '../sdk';

import { OrderConfirmationProps } from './OrderConfirmation.types';

export const OrderConfirmationDynamic = dynamic(() =>
    import('./OrderConfirmation.client').then((module) => module.OrderConfirmationPure),
);

export const OrderConfirmation: React.FC<OrderConfirmationProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.OrderConfirmationBlock;
    try {
        data = await sdk.blocks.getOrderConfirmation(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching OrderConfirmation block', error);
        return null;
    }

    return <OrderConfirmationDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
