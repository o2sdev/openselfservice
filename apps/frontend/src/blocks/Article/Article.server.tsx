import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ArticleProps } from './Article.types';

export const ArticleDynamic = dynamic(() => import('./Article.client').then((module) => module.ArticlePure));

export const Article: React.FC<ArticleProps> = async ({ slug, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getArticle(
            {
                slug,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <ArticleDynamic {...data} slug={slug} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
