import React from 'react';

import { sdk } from '@/api/sdk';

import { PaymentsSummaryDynamic } from './PaymentsSummary.dynamic';
import { PaymentsSummaryProps } from './PaymentsSummary.types';

export const PaymentsSummary: React.FC<PaymentsSummaryProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getPaymentsSummary(
        {
            id,
            limit: 1000,
            offset: 0,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <PaymentsSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};
