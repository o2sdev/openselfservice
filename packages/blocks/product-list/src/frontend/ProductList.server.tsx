import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ProductListProps } from './ProductList.types';


export const ProductListDynamic = dynamic(() =>
    import('./ProductList.client').then((module) => module.ProductListPure),
);

export const ProductList: React.FC<ProductListProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getProductList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <ProductListDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (error) {
        console.error('Error fetching ProductList block', error);
        return null;
    }
};
