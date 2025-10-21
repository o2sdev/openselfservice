import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapCategoryListBlock = (
    data: GetComponentQuery,
    _baseUrl: string,
): CMS.Model.CategoryListBlock.CategoryListBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsCategoryList':
            return {
                id: component.id,
                title: component.title,
                description: component.description,
                categoryIds: component.categories.map((category) => category.slug),
                parent: component.parent,
            };
    }

    throw new NotFoundException();
};
