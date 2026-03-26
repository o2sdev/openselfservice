import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import { Model } from '../api-harmonization/recommended-products.client';

export interface RecommendedProductsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    excludeProductId?: string;
    limit?: number;
}

export type RecommendedProductsPureProps = RecommendedProductsProps &
    Model.RecommendedProductsBlock & { cartIdLocalStorageKey: string };

export type RecommendedProductsRendererProps = Omit<
    Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>,
    'locale'
> &
    Pick<RecommendedProductsProps, 'excludeProductId' | 'limit'> & {
        locale?: string;
    };
