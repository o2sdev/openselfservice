import { defineRouting } from 'next-intl/routing';

import * as Client from '../api-harmonization/product-details.client';

export interface ProductDetailsProps {
    id: string;
    productId: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type ProductDetailsPureProps = ProductDetailsProps & Client.Model.ProductDetailsBlock;

export type ProductDetailsRendererProps = Omit<ProductDetailsProps, 'productId'> & {
    slug: string[];
};
