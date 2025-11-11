import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/product-list.client';

export interface ProductListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type ProductListPureProps = ProductListProps & Model.ProductListBlock;

export type ProductListRendererProps = Omit<ProductListProps, ''> & {
    slug: string[];
};
