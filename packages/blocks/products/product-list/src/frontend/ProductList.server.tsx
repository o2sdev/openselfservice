import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListProps } from './ProductList.types';

export const ProductListDynamic = dynamic(() =>
    import('./ProductList.client').then((module) => module.ProductListPure),
);

export const ProductList: React.FC<ProductListProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.ProductListBlock;
    try {
        data = await sdk.blocks.getProductList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Failed to fetch ProductList block data:', error);
        }
        return null;
    }

    if (!data?.products?.data || !data?.table?.columns || !data?.noResults || !data?.labels) {
        return null;
    }

    return (
        <ProductListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            cartIdLocalStorageKey={process.env.CART_ID_LOCAL_STORAGE_KEY}
        />
    );
};
