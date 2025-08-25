import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/article-search.client';

export interface ArticleSearchProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type ArticleSearchPureProps = ArticleSearchProps & Model.ArticleSearchBlock;

export type ArticleSearchRendererProps = Omit<ArticleSearchProps, ''> & {
    slug: string[];
};
