import { Articles, CMS } from '../../models';

import { CategoryListBlock } from './category-list.model';

export const mapCategoryList = (
    cms: CMS.Model.CategoryListBlock.CategoryListBlock,
    categories: Articles.Model.Category[],
    _locale: string,
): CategoryListBlock => {
    return {
        __typename: 'CategoryListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: categories.map((category) => mapCategory(cms, category)),
    };
};

export const mapCategory = (
    cms: CMS.Model.CategoryListBlock.CategoryListBlock,
    category: Articles.Model.Category,
): Articles.Model.Category => {
    return {
        ...category,
        slug: `${cms.parent?.slug || ''}${category.slug}`,
    };
};
