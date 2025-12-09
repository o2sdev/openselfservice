import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ArticleProps } from './Article.types';

export const ArticleDynamic = dynamic(() => import('./Article.client').then((module) => module.ArticlePure));

export const Article: React.FC<ArticleProps> = async ({ slug, accessToken, locale, routing, hasPriority }) => {
    let data;
    try {
        data = await sdk.blocks.getArticle(
            {
                slug,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <ArticleDynamic
            {...data}
            slug={slug}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
