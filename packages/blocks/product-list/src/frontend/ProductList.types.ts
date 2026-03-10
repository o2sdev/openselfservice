import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/product-list.client';

export interface ProductListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    enableRowSelection?: boolean;
}

export type ProductListPureProps = ProductListProps & Model.ProductListBlock;

export type ProductListRendererProps = Omit<ProductListProps, ''> & {
    slug: string[];
};
