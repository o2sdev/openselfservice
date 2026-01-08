import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { RecommendedProductsProps } from './RecommendedProducts.types';

export const RecommendedProductsDynamic = dynamic(() =>
    import('./RecommendedProducts.client').then((module) => module.RecommendedProductsPure),
);

export const RecommendedProducts: React.FC<RecommendedProductsProps> = async ({
    id,
    excludeProductId,
    limit,
    locale,
    routing,
}) => {
    try {
        const data = await sdk.blocks.getRecommendedProducts(
            { id },
            {
                excludeProductId,
                limit,
            },
            { 'x-locale': locale },
        );

        return (
            <RecommendedProductsDynamic
                {...data}
                id={id}
                excludeProductId={excludeProductId}
                limit={limit}
                locale={locale}
                routing={routing}
            />
        );
    } catch (error) {
        console.error('Error fetching RecommendedProducts block', error);
        return null;
    }
};
