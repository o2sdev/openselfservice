import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/category-list.client';

export type CategoryListProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;

export type CategoryListPureProps = CategoryListProps & Model.CategoryListBlock;
