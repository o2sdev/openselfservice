import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/article-search.client';

export type ArticleSearchProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type ArticleSearchPureProps = ArticleSearchProps & Model.ArticleSearchBlock;

export type ArticleSearchRendererProps = Omit<ArticleSearchProps, ''> & {
    slug: string[];
};
