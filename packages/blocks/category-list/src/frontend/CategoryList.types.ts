import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/category-list.client';

export interface CategoryListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CategoryListPureProps = CategoryListProps & Model.CategoryListBlock;

export interface CategoryListRendererProps extends CategoryListProps {
    slug: string[];
}
