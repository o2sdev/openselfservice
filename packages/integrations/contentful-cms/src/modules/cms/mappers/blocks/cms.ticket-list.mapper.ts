import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { TicketListComponentFragment } from '@/generated/contentful';

import { mapFields, mapFieldsMeta } from '../cms.fieldMapping.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable, mapTableMeta } from '../cms.table.mapper';

export const mapTicketListBlock = ({
    isPreview,
    ...data
}: TicketListComponentFragment & { isPreview?: boolean }): CMS.Model.TicketListBlock.TicketListBlock => {
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
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          subtitle: 'subtitle',
                          table: mapTableMeta(data.table),
                          fieldMapping: mapFieldsMeta(data.fieldsCollection?.items),
                          // pagination: mapPagination(data.pagination),
                          // TODO: add filters
                          // filters: 'filters',
                          noResults: {
                              __id: data.noResults?.sys.id || '',
                              title: 'title',
                              description: 'description',
                          },
                          labels: {
                              __id: data.sys.id,
                              today: 'today',
                              yesterday: 'yesterday',
                              showMore: 'showMore',
                              clickToSelect: 'clickToSelect',
                          },
                          detailsUrl: 'detailsUrl',
                      }
                    : undefined,
            };
    }

    throw new NotFoundException();
};
