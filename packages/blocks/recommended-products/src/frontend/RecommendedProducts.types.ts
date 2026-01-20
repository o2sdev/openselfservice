import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/recommended-products.client';

export interface RecommendedProductsProps {
    id: string;
    excludeProductId?: string;
    limit?: number;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type RecommendedProductsPureProps = RecommendedProductsProps & Model.RecommendedProductsBlock;

export type RecommendedProductsRendererProps = Omit<RecommendedProductsProps, 'locale'> & {
    slug: string[];
    locale?: string;
};
