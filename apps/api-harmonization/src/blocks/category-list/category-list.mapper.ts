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
        items: categories,
    };
};
