import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { CategoryListProps } from './CategoryList.types';

export const CategoryListDynamic = dynamic(() =>
    import('./CategoryList.client').then((module) => module.CategoryListPure),
);

export const CategoryList = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}: CategoryListProps) => {
    let data;
    try {
        data = await sdk.blocks.getCategoryList(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <CategoryListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
