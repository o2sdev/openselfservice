import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/article-list.client';

export interface ArticleListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    isDraftModeEnabled?: boolean;
}

export type ArticleListPureProps = ArticleListProps & Model.ArticleListBlock;

export interface ArticleListRendererProps extends Omit<ArticleListProps, ''> {
    slug: string[];
}
