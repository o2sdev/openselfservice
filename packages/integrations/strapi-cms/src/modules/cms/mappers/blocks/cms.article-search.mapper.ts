import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapArticleSearchBlock = (data: GetComponentQuery): CMS.Model.ArticleSearchBlock.ArticleSearchBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsArticleSearch':
            return {
                id: component.id,
                title: component.title,
                inputLabel: component.inputLabel as string,
                noResults: {
                    title: component.noResults?.title,
                    description: component.noResults?.description,
                },
            };
    }

    throw new NotFoundException();
};
