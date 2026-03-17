import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/article-search.client';
import { sdk } from '../sdk';

import { ArticleSearchProps } from './ArticleSearch.types';

export const ArticleSearchDynamic = dynamic(() =>
    import('./ArticleSearch.client').then((module) => module.ArticleSearchPure),
);

export const ArticleSearch: React.FC<ArticleSearchProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.ArticleSearchBlock;
    try {
        data = await sdk.blocks.getArticleSearch(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Failed to fetch ArticleSearch block data:', error);
        }
        return null;
    }

    if (!data?.inputLabel || !data?.noResults) {
        return null;
    }

    return (
        <ArticleSearchDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
