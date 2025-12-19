import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/category.client';
import { sdk } from '../sdk';

import { CategoryProps } from './Category.types';
import { CategoryBlocks } from './CategoryBlocks';

export const CategoryDynamic = dynamic(() => import('./Category.client').then((module) => module.CategoryPure));

export const Category: React.FC<CategoryProps> = async ({
    id,
    slug,
    accessToken,
    locale,
    routing,
    renderBlocks,
    hasPriority,
}) => {
    let data: Model.CategoryBlock;
    try {
        data = await sdk.blocks.getCategory(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <CategoryDynamic
            {...data}
            id={id}
            slug={slug}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            blocks={<CategoryBlocks renderBlocks={renderBlocks} components={data.components} slug={slug} />}
            renderBlocks={renderBlocks}
            hasPriority={hasPriority}
        />
    );
};
