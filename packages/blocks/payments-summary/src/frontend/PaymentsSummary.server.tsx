import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { PaymentsSummaryProps } from './PaymentsSummary.types';

export const PaymentsSummaryDynamic = dynamic(() =>
    import('./PaymentsSummary.client').then((module) => module.PaymentsSummaryPure),
);

export const PaymentsSummary: React.FC<PaymentsSummaryProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data;
    try {
        data = await sdk.blocks.getPaymentsSummary(
            {
                id,
                limit: 1000,
                offset: 0,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <PaymentsSummaryDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
