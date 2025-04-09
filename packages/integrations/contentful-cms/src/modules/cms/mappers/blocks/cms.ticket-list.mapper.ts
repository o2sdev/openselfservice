import { NotFoundException } from '@nestjs/common';
import { Entry } from 'contentful';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

import { IBlockTicketListFields } from '@/generated/contentful';

export const mapTicketListBlock = (data: Entry<IBlockTicketListFields>): CMS.Model.TicketListBlock.TicketListBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    const { fields, sys } = data;

    switch (sys.contentType.sys.id) {
        case 'blockTicketList':
            return {
                id: sys.id,
                title: fields.title,
                subtitle: fields.subTitle,
                table: mapTable(fields.table),
                fieldMapping: mapFields(fields.fields),
                pagination: mapPagination(fields.pagination),
                // TODO: add filters
                // filters: mapFilters(component.filters),
                noResults: fields.noResults.fields,
                labels: {
                    today: fields.labels.fields.today,
                    yesterday: fields.labels.fields.yesterday,
                },
                detailsUrl: fields.detailsUrl,
            };
    }

    throw new NotFoundException();
};
