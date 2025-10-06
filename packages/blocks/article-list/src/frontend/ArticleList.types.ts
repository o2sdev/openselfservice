import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/article-list.client';

export interface ArticleListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type ArticleListPureProps = ArticleListProps & Model.ArticleListBlock;

export interface ArticleListRendererProps extends Omit<ArticleListProps, ''> {
    slug: string[];
}
