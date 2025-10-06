import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { PaymentsHistoryProps } from './PaymentsHistory.types';

export const PaymentsHistoryDynamic = dynamic(() =>
    import('./PaymentsHistory.client').then((module) => module.PaymentsHistoryPure),
);

export const PaymentsHistory: React.FC<PaymentsHistoryProps> = async ({ id, accessToken, locale, hasPriority }) => {
    try {
        const data = await sdk.blocks.getPaymentsHistory(
            {
                id,
                offset: 0,
                limit: 1000,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <PaymentsHistoryDynamic
                {...data}
                id={id}
                accessToken={accessToken}
                locale={locale}
                hasPriority={hasPriority}
            />
        );
    } catch (_error) {
        return null;
    }
};
