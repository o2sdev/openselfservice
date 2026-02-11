import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/checkout-summary.client';
import { sdk } from '../sdk';

import { CheckoutSummaryProps } from './CheckoutSummary.types';

export const CheckoutSummaryDynamic = dynamic(() =>
    import('./CheckoutSummary.client').then((module) => module.CheckoutSummaryPure),
);

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    onConfirm,
}) => {
    let data: Model.CheckoutSummaryBlock;
    try {
        data = await sdk.blocks.getCheckoutSummary(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CheckoutSummary block', error);
        return null;
    }

    return (
        <CheckoutSummaryDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            onConfirm={onConfirm}
        />
    );
};
