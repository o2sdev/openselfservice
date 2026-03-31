import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import React from 'react';

import type { Model } from '../api-harmonization/order-confirmation.client';
import { sdk } from '../sdk';

import { OrderConfirmationProps } from './OrderConfirmation.types';
import { OrderConfirmationError } from './OrderConfirmationError.client';

export const OrderConfirmationDynamic = dynamic(() =>
    import('./OrderConfirmation.client').then((module) => module.OrderConfirmationPure),
);

function getHttpStatus(err: unknown): number | undefined {
    const e = err as { status?: number; response?: { status?: number } };
    return e?.status ?? e?.response?.status;
}

function getErrorMessage(err: unknown): string | undefined {
    const e = err as { message?: string; data?: { message?: string } };
    return e?.message ?? e?.data?.message;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = async ({
    id,
    orderId,
    accessToken,
    locale,
    routing,
}) => {
    let data: Model.OrderConfirmationBlock;
    try {
        data = await sdk.blocks.getOrderConfirmation(
            {
                id,
                orderId,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        const status = getHttpStatus(error);
        if (status === 401 || status === 404) {
            redirect('/orders');
        }
        return <OrderConfirmationError routing={routing} message={getErrorMessage(error)} redirectPath="/" />;
    }

    return (
        <OrderConfirmationDynamic
            {...data}
            id={id}
            orderId={orderId}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
        />
    );
};
