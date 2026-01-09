import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ProductDetailsProps } from './ProductDetails.types';

export const ProductDetailsDynamic = dynamic(() =>
    import('./ProductDetails.client').then((module) => module.ProductDetailsPure),
);

export const ProductDetails: React.FC<ProductDetailsProps> = async ({
    id,
    productId,
    locale,
    routing,
    hasPriority,
}) => {
    try {
        const data = await sdk.blocks.getProductDetails({ id: productId }, { id, locale }, { 'x-locale': locale });

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
    } catch (error) {
        console.error('Error fetching ProductDetails block', error);
        return null;
    }
};
