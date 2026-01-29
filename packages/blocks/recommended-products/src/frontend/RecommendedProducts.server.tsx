import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/recommended-products.client';
import { sdk } from '../sdk';

import { RecommendedProductsProps } from './RecommendedProducts.types';

export const RecommendedProductsDynamic = dynamic(() =>
    import('./RecommendedProducts.client').then((module) => module.RecommendedProductsPure),
);

export const RecommendedProducts: React.FC<RecommendedProductsProps> = async ({
    id,
    excludeProductId,
    locale,
    routing,
}) => {
    let data: Model.RecommendedProductsBlock;
    try {
        data = await sdk.blocks.getRecommendedProducts(
            { id },
            {
                excludeProductId,
            },
            { 'x-locale': locale },
        );
    } catch (error) {
        console.error('Error fetching RecommendedProducts block', error);
        return null;
    }

    return (
        <RecommendedProductsDynamic
            {...data}
            id={id}
            excludeProductId={excludeProductId}
            locale={locale}
            routing={routing}
        />
    );
};
