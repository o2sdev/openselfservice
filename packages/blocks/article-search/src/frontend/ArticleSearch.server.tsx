import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/article-search.client';
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
    } catch (_error) {
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
