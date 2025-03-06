import React from 'react';

import { sdk } from '@/api/sdk';

import { PaymentsHistoryDynamic } from './PaymentsHistory.dynamic';
import { PaymentsHistoryProps } from './PaymentsHistory.types';

export const PaymentsHistory: React.FC<PaymentsHistoryProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getPaymentsHistory(
        {
            id,
            offset: 0,
            limit: 1000,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <PaymentsHistoryDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};
