'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { ProductCarousel } from '@o2s/ui/components/ProductCarousel';

import { RecommendedProductsPureProps } from './RecommendedProducts.types';

export const RecommendedProductsPure: React.FC<RecommendedProductsPureProps> = ({ locale, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { products, labels } = component;

    if (!products || products.length === 0) {
        return null;
    }

    return (
        <ProductCarousel
            products={products}
            title={labels.title}
            LinkComponent={LinkComponent}
            linkDetailsLabel={labels.detailsLabel}
            keyboardControlMode="managed"
            keyboardCarouselId="recommended-products-carousel"
            carouselConfig={{ loop: true }}
        />
    );
};
