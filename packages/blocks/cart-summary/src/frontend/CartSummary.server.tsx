import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/cart-summary.client';
import { sdk } from '../sdk';

import { CartSummaryProps } from './CartSummary.types';

export const CartSummaryDynamic = dynamic(() =>
    import('./CartSummary.client').then((module) => module.CartSummaryPure),
);

export const CartSummary: React.FC<CartSummaryProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.CartSummaryBlock;
    try {
        data = await sdk.blocks.getCartSummary(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CartSummary block', error);
        return null;
    }

    return <CartSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
