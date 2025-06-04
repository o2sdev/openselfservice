import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapPagination } from '../cms.pagination.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapFeaturedServiceListBlock = (
    data: GetComponentQuery,
): CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFeaturedServiceList':
            return {
                id: component.id,
                title: component.title,
                pagination: mapPagination(component.pagination),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
                detailsLabel: component.detailsLabel as string,
                detailsUrl: component.detailsURL as string,
                labels: {
                    on: configurableTexts.actions.on,
                    off: configurableTexts.actions.off,
                },
            };
    }

    throw new NotFoundException();
};
