import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/product-list.client';

export interface ProductListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    enableRowSelection?: boolean;
    cartIdLocalStorageKey: string;
}

export type ProductListPureProps = ProductListProps & Model.ProductListBlock;

export type ProductListRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>> &
    Pick<ProductListProps, 'enableRowSelection'>;
