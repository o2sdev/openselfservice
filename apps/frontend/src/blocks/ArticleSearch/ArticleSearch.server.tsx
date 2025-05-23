import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ArticleSearchProps } from './ArticleSearch.types';

export const ArticleSearchDynamic = dynamic(() =>
    import('./ArticleSearch.client').then((module) => module.ArticleSearchPure),
);

export const ArticleSearch: React.FC<ArticleSearchProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getArticleSearch(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <ArticleSearchDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
