import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { CategoryListProps } from './CategoryList.types';

export const CategoryListDynamic = dynamic(() =>
    import('./CategoryList.client').then((module) => module.CategoryListPure),
);

export const CategoryList: React.FC<CategoryListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getCategoryList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <CategoryListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
