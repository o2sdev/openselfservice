import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';
import { mapFilters } from '../cms.filters.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapTicketListBlock = (data: GetComponentQuery): CMS.Model.TicketListBlock.TicketListBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsTicketList':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                actionLinks: component.actionLinks,
                table: mapTable(component.table),
                fieldMapping: mapFields(component.fields),
                pagination: mapPagination(component.pagination),
                filters: mapFilters(component.filters),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
                labels: {
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                    showMore: configurableTexts.actions.showMore,
                },
                detailsUrl: component.detailsURL as string,
            };
    }

    throw new NotFoundException();
};
