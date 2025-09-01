import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { CategoryListProps } from './CategoryList.types';

export const CategoryListDynamic = dynamic(() =>
    import('./CategoryList.client').then((module) => module.CategoryListPure),
);

export const CategoryList: React.FC<CategoryListProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getCategoryList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
        return <CategoryListDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (_error) {
        return null;
    }
};
