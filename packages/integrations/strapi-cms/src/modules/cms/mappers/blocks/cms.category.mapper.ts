import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapSlot } from '../cms.page.mapper';

export const mapCategoryBlock = (data: GetComponentQuery, _baseUrl: string): CMS.Model.CategoryBlock.CategoryBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsCategory':
            return {
                id: component.id,
                title: component.category!.name,
                description: component.category!.description,
                categoryId: component.category!.slug,
                components: component.category?.components ? mapSlot(component.category?.components) : undefined,
                componentsPosition: 'bottom',
                parent: component.parent,
                labels: {
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                },
            };
    }

    throw new NotFoundException();
};
