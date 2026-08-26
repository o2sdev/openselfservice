import dynamic from 'next/dynamic';
import React from 'react';

import type { Models } from '@o2s/framework/modules';

import type { Model, Request } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListProps } from './ProductList.types';

/** URL params the block query understands. Anything else on the page is none of this block's business. */
const FILTER_PARAMS = ['category', 'sort', 'type'] as const;

/**
 * Turns the page's query string into a block query, so a filtered link is rendered filtered on the
 * server instead of arriving as the default list that the client then has to replace.
 *
 * `page` is passed through as-is: only the API can resolve it into an `offset`, because only it knows
 * the page size from the CMS block config.
 */
const getFiltersFromSearchParams = (
    searchParams: Models.BlockProps.BlockSearchParams = {},
): Partial<Request.GetProductListBlockQuery> => {
    const filters: Partial<Request.GetProductListBlockQuery> = {};

    for (const param of FILTER_PARAMS) {
        const raw = searchParams[param];
        // The block query takes one value per filter, so a repeated param contributes its first one.
        // Such a URL is not indexed anyway (see the page metadata), and one filter beats none.
        const value = Array.isArray(raw) ? raw[0] : raw;

        if (value !== undefined && value !== '') {
            filters[param] = value as Request.GetProductListBlockQuery[typeof param];
        }
    }

    const page = Number(searchParams.page);

    if (page > 1) {
        filters.page = page;
    }

    return filters;
};

export const ProductListDynamic = dynamic(() =>
    import('./ProductList.client').then((module) => module.ProductListPure),
);

export const ProductList: React.FC<ProductListProps> = async ({ id, accessToken, locale, routing, searchParams }) => {
    let data: Model.ProductListBlock;
    try {
        data = await sdk.blocks.getProductList(
            {
                id,
                ...getFiltersFromSearchParams(searchParams),
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
