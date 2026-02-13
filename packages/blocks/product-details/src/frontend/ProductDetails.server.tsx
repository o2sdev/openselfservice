import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/product-details.client';
import { sdk } from '../sdk';

import { ProductDetailsProps } from './ProductDetails.types';

export const ProductDetailsDynamic = dynamic(() =>
    import('./ProductDetails.client').then((module) => module.ProductDetailsPure),
);

export const ProductDetails: React.FC<ProductDetailsProps> = async ({
    id,
    productId,
    variantSlug,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.ProductDetailsBlock;
    try {
        data = await sdk.blocks.getProductDetails(
            { id: productId, variantSlug },
            { id, locale },
            { 'x-locale': locale },
        );
    } catch (error) {
        console.error('Error fetching ProductDetails block', error);
        return null;
    }

    return (
        <ProductDetailsDynamic
            {...data}
            id={id}
            productId={productId}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
