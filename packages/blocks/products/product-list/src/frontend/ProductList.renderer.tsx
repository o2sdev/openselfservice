import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { ProductList } from './ProductList.server';
import { ProductListRendererProps } from './ProductList.types';

export const ProductListRenderer: React.FC<ProductListRendererProps> = ({ id, accessToken, routing, searchParams }) => {
    const locale = useLocale();

    // Part of the key, so following a facet link — a real navigation — rebuilds the block from the
    // server data for those params instead of leaving the client showing the previous result set.
    const filterKey = new URLSearchParams(
        Object.entries(searchParams ?? {}).flatMap(([key, value]) =>
            value === undefined ? [] : Array.isArray(value) ? value.map((entry) => [key, entry]) : [[key, value]],
        ) as [string, string][],
    ).toString();

    return (
        <Suspense
            key={`${id}?${filterKey}`}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={[30, 23]} />
                </div>
            }
        >
            <ProductList
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                searchParams={searchParams}
            />
        </Suspense>
    );
};
