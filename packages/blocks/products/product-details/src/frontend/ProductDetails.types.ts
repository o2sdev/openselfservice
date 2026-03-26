import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import * as Client from '../api-harmonization/product-details.client';

export interface ProductDetailsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    productId: string;
    variantSlug?: string;
    cartIdLocalStorageKey?: string;
}

export type ProductDetailsPureProps = ProductDetailsProps & Client.Model.ProductDetailsBlock;

export type ProductDetailsRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>> &
    Pick<ProductDetailsProps, 'variantSlug'>;
