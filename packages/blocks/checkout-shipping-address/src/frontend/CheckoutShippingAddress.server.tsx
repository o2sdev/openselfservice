import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/checkout-shipping-address.client';
import { sdk } from '../sdk';

import { CheckoutShippingAddressProps } from './CheckoutShippingAddress.types';

export const CheckoutShippingAddressDynamic = dynamic(() =>
    import('./CheckoutShippingAddress.client').then((module) => module.CheckoutShippingAddressPure),
);

export const CheckoutShippingAddress: React.FC<CheckoutShippingAddressProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.CheckoutShippingAddressBlock;
    try {
        data = await sdk.blocks.getCheckoutShippingAddress(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CheckoutShippingAddress block', error);
        return null;
    }

    return <CheckoutShippingAddressDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
