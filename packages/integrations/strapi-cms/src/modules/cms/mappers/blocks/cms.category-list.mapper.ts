import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { SourceMapContext, createFieldEncoder } from '../../live-preview/encode-source-map';

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

/**
 * Live Preview: encode Content Source Maps into the normalized CategoryList block.
 * Only the block's own same-document text (`title`, `description`). The `categories`/`parent`
 * relations point to other documents whose names are resolved elsewhere, so encoding them here
 * would attach the wrong documentId; they are intentionally left out.
 */
export const encodeCategoryListBlock = (
    block: CMS.Model.CategoryListBlock.CategoryListBlock,
    ctx: SourceMapContext,
): CMS.Model.CategoryListBlock.CategoryListBlock => {
    const enc = createFieldEncoder(ctx);

    return {
        ...block,
        title: enc(block.title, 'title'),
        description: enc(block.description, 'description', 'richtext'),
    };
};
