import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { TicketListComponentFragment } from '@/generated/contentful';

import { mapFields } from '../cms.fieldMapping.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

export const mapTicketListBlock = (data: TicketListComponentFragment): CMS.Model.TicketListBlock.TicketListBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockTicketList':
            return {
                id: data.sys.id,
                title: data.title,
                subtitle: data.subTitle,
                table: mapTable(data.table),
                fieldMapping: mapFields(data.fieldsCollection?.items),
                pagination: mapPagination(data.pagination),
                // TODO: add filters
                // filters: mapFilters(component.filters),
                noResults: {
                    title: data.noResults?.title || '',
                    description: data.noResults?.description,
                },
                labels: {
                    today: 'Today',
                    yesterday: 'Yesterday',
                    showMore: 'Show more',
                    clickToSelect: 'Click to select',
                },
                detailsUrl: data.detailsUrl || '',
            };
    }

    throw new NotFoundException();
};
