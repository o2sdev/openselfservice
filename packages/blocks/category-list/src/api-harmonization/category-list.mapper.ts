import { Articles, CMS } from '@o2s/configs.integrations';

import { CategoryListBlock } from './category-list.model';

export const mapCategoryList = (
    cms: CMS.Model.CategoryListBlock.CategoryListBlock,
    categories: Articles.Model.Category[],
    _locale: string,
): CategoryListBlock => {
    const basePath = cms.parent?.slug ?? '';

    return {
        __typename: 'CategoryListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: categories.map((category) => ({
            ...category,
            slug: `${basePath}/${category.slug}`.replace(/\/+/g, '/'),
        })),
        meta: cms.meta,
    };
};
