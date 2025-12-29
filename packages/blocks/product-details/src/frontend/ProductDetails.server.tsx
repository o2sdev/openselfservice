import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { sdk } from '../sdk';

import { ProductDetailsProps } from './ProductDetails.types';

export const ProductDetailsDynamic = dynamic(() =>
    import('./ProductDetails.client').then((module) => module.ProductDetailsPure),
);

export const ProductDetails: React.FC<ProductDetailsProps> = async ({
    id,
    cmsBlockId = 'product-details-1',
    locale,
    routing,
    includePopularOffers,
    hasPriority,
}) => {
    try {
        const data = await sdk.blocks.getProductDetails(
            { id },
            { id: cmsBlockId, locale, includePopularOffers },
            { 'x-locale': locale },
        );

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailsDynamic {...data} id={id} locale={locale} routing={routing} hasPriority={hasPriority} />
            </Suspense>
        );
    } catch (error) {
        console.error('Error fetching ProductDetails block', error);
        return null;
    }
};
