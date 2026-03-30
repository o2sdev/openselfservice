import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/checkout-company-data.client';
import { sdk } from '../sdk';

import { CheckoutCompanyDataProps } from './CheckoutCompanyData.types';

export const CheckoutCompanyDataDynamic = dynamic(() =>
    import('./CheckoutCompanyData.client').then((module) => module.CheckoutCompanyDataPure),
);

export const CheckoutCompanyData: React.FC<CheckoutCompanyDataProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.CheckoutCompanyDataBlock;
    try {
        data = await sdk.blocks.getCheckoutCompanyData(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CheckoutCompanyData block', error);
        return null;
    }

    return <CheckoutCompanyDataDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
