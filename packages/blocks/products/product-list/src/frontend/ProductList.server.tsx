import dynamic from 'next/dynamic';
import React from 'react';

import { parseFiltersFromSearchParams } from '@o2s/ui/hooks/use-url-filters.utils';

import type { Model, Request } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListProps } from './ProductList.types';

/**
 * Filter keys the block query understands. This list has no namespace prefix: the product list is
 * public and indexed, so its params stay plain and linkable (`?category=TOOLS`).
 */
const FILTER_KEYS = ['category', 'sort', 'type'] as const;

export const ProductListDynamic = dynamic(() =>
    import('./ProductList.client').then((module) => module.ProductListPure),
);

export const ProductList: React.FC<ProductListProps> = async ({ id, accessToken, locale, routing, searchParams }) => {
    let data: Model.ProductListBlock;
    try {
        data = await sdk.blocks.getProductList(
            {
                id,
                // No multi-value keys: the block query takes one value per filter, so a repeated param
                // contributes its first one. Such a URL is not indexed anyway (see the page metadata).
                ...parseFiltersFromSearchParams<Request.GetProductListBlockQuery>(searchParams, {
                    keys: FILTER_KEYS,
                }),
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Failed to fetch ProductList block data:', error);
        }
        return null;
    }

    if (!data?.products?.data || !data?.table?.columns || !data?.noResults || !data?.labels) {
        return null;
    }

    return <ProductListDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
