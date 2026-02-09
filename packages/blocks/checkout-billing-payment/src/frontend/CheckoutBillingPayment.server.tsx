import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/checkout-billing-payment.client';
import { sdk } from '../sdk';

import { CheckoutBillingPaymentProps } from './CheckoutBillingPayment.types';

export const CheckoutBillingPaymentDynamic = dynamic(() =>
    import('./CheckoutBillingPayment.client').then((module) => module.CheckoutBillingPaymentPure),
);

export const CheckoutBillingPayment: React.FC<CheckoutBillingPaymentProps> = async ({
    id,
    accessToken,
    locale,
    routing,
}) => {
    let data: Model.CheckoutBillingPaymentBlock;
    try {
        data = await sdk.blocks.getCheckoutBillingPayment(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CheckoutBillingPayment block', error);
        return null;
    }

    return (
        <CheckoutBillingPaymentDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />
    );
};
