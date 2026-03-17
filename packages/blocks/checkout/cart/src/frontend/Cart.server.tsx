import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/cart.client';
import { sdk } from '../sdk';

import { CartProps } from './Cart.types';

export const CartDynamic = dynamic(() => import('./Cart.client').then((module) => module.CartPure));

export const Cart: React.FC<CartProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.CartBlock;
    try {
        data = await sdk.blocks.getCart(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching Cart block', error);
        return null;
    }

    return (
        <CartDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
