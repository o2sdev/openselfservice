import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { CategoryProps } from './Category.types';

export const CategoryDynamic = dynamic(() => import('./Category.client').then((module) => module.CategoryPure));

export const Category: React.FC<CategoryProps> = async ({ id, slug, accessToken, locale }) => {
    const data = await sdk.blocks.getCategory(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <CategoryDynamic {...data} id={id} slug={slug} accessToken={accessToken} locale={locale} />;
};
