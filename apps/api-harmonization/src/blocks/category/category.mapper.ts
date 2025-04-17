import { CMS } from '../../models';

import { CategoryBlock } from './category.model';

export const mapCategory = (cms: CMS.Model.CategoryBlock.CategoryBlock, locale: string): CategoryBlock => {
    return {
        __typename: 'CategoryBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        icon: cms.icon,
        components: cms.components,
        items: cms.items,
    };
};
