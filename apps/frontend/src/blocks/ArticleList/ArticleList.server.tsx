import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ArticleListProps } from './ArticleList.types';

export const ArticleListDynamic = dynamic(() =>
    import('./ArticleList.client').then((module) => module.ArticleListPure),
);

export const ArticleList: React.FC<ArticleListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getArticleList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <ArticleListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
