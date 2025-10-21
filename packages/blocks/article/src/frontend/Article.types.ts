import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/article.client';

export interface ArticleProps {
    id: string;
    slug: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type ArticlePureProps = ArticleProps & Model.ArticleBlock;

export interface ArticleRendererProps extends Omit<ArticleProps, 'slug'> {
    slug: string[];
}
