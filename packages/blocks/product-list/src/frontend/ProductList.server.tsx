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
    } catch (_error) {
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return <ProductListDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
