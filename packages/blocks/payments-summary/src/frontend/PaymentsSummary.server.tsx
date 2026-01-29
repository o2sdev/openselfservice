import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/payments-summary.client';
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
    let data: Model.PaymentsSummaryBlock;
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

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
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
