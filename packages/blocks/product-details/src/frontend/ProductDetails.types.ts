import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/product-details.client';

export interface ProductDetailsProps {
    id: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    includePopularOffers?: boolean;
    hasPriority?: boolean;
}

export type ProductDetailsPureProps = ProductDetailsProps & Model.ProductDetailsBlock;

export type ProductDetailsRendererProps = {
    id: string;
    routing: ReturnType<typeof defineRouting>;
    locale?: string;
    includePopularOffers?: boolean;
    hasPriority?: boolean;
};
