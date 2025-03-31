import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';
import { mapFilters } from '../cms.filters.mapper';
import { mapPagination } from '../cms.pagination.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapServiceListBlock = (data: GetComponentQuery): CMS.Model.ServiceListBlock.ServiceListBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsServiceList':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                fields: mapFields(component.fields),
                pagination: mapPagination(component.pagination),
                filters: mapFilters(component.filters),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
                detailsLabel: component.detailsLabel as string,
                detailsUrl: component.detailsURL as string,
            };
    }

    throw new NotFoundException();
};
