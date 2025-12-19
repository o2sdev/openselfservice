import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/article-list.client';
import { sdk } from '../sdk';

import { ArticleListProps } from './ArticleList.types';

export const ArticleListDynamic = dynamic(() =>
    import('./ArticleList.client').then((module) => module.ArticleListPure),
);

export const ArticleList: React.FC<ArticleListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    let data: Model.ArticleListBlock;
    try {
        data = await sdk.blocks.getArticleList(
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
        <ArticleListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
