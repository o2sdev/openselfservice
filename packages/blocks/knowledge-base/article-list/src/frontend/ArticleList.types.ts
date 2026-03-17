import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/article-list.client';

export type ArticleListProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;

export type ArticleListPureProps = ArticleListProps & Model.ArticleListBlock;

export type ArticleListRendererProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;
