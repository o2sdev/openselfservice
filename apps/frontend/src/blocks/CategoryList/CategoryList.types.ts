import { Blocks } from '@o2s/api-harmonization';

export interface CategoryListProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type CategoryListPureProps = CategoryListProps & Blocks.CategoryList.Model.CategoryListBlock;
