import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { CategoryListComponentFragment } from '@/generated/contentful';

export const mapCategoryListBlock = ({
    isPreview,
    ...data
}: CategoryListComponentFragment & { isPreview?: boolean }): CMS.Model.CategoryListBlock.CategoryListBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockCategoryList':
            return {
                id: data.sys.id,
                title: data.title,
                description: data.description,
                categoryIds: data.categoriesCollection?.items.map((category) => category.slug || '') || [],
                parent: data.parent
                    ? {
                          slug: data.parent.slug || '',
                      }
                    : undefined,
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          description: 'description',
                          categories: 'categories',
                      }
                    : undefined,
            };
    }
};
