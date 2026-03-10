import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/category-list.client';

export interface CategoryListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    isDraftModeEnabled?: boolean;
}

export type CategoryListPureProps = CategoryListProps & Model.CategoryListBlock;
