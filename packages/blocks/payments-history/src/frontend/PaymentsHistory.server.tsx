import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/payments-history.client';
import { sdk } from '../sdk';

import { PaymentsHistoryProps } from './PaymentsHistory.types';

export const PaymentsHistoryDynamic = dynamic(() =>
    import('./PaymentsHistory.client').then((module) => module.PaymentsHistoryPure),
);

export const PaymentsHistory: React.FC<PaymentsHistoryProps> = async ({ id, accessToken, locale, hasPriority }) => {
    let data: Model.PaymentsHistoryBlock;
    try {
        data = await sdk.blocks.getPaymentsHistory(
            {
                id,
                offset: 0,
                limit: 1000,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <PaymentsHistoryDynamic {...data} id={id} accessToken={accessToken} locale={locale} hasPriority={hasPriority} />
    );
};
