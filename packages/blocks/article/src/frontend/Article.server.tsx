import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ArticleProps } from './Article.types';

export const ArticleDynamic = dynamic(() => import('./Article.client').then((module) => module.ArticlePure));

export const Article = async ({ slug, accessToken, locale, routing, hasPriority }: ArticleProps) => {
    try {
        const data = await sdk.blocks.getArticle(
            {
                slug,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (_error) {
        return null;
    }
};
