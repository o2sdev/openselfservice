import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/category-list.client';

export interface CategoryListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
}

export type CategoryListPureProps = CategoryListProps & Model.CategoryListBlock;
