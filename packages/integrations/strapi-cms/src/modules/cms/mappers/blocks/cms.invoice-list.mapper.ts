import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';
import { mapFilters } from '../cms.filters.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapInvoiceListBlock = (data: GetComponentQuery): CMS.Model.InvoiceListBlock.InvoiceListBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsInvoiceList':
            return {
                id: component.id,
                title: component.title,
                tableTitle: component.tableTitle,
                fieldMapping: mapFields(component.fields),
                pagination: mapPagination(component.pagination),
                filters: mapFilters(component.filters),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
                labels: {
                    today: configurableTexts?.dates.today,
                    yesterday: configurableTexts?.dates.today,
                },
                table: mapTable(component.table),
                downloadFileName: component.downloadFileName,
                downloadButtonAriaDescription: component.downloadButtonAriaDescription,
            };
    }

    throw new NotFoundException();
};
