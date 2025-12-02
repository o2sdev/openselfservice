import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ArticleSearchProps } from './ArticleSearch.types';

export const ArticleSearchDynamic = dynamic(() =>
    import('./ArticleSearch.client').then((module) => module.ArticleSearchPure),
);

export const ArticleSearch = async ({ id, accessToken, locale, routing, hasPriority }: ArticleSearchProps) => {
    try {
        const data = await sdk.blocks.getArticleSearch(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
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
    } catch (_error) {
        return null;
    }
};
