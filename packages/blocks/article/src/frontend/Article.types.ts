import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/article.client';

export interface ArticleProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    slug: string;
}

export type ArticlePureProps = ArticleProps & Model.ArticleBlock;

export interface ArticleRendererProps extends Omit<ArticleProps, 'slug'> {
    slug: string[];
}
