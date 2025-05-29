import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapActionLinks } from '../cms.actionLinks.mapper';
import { mapFields } from '../cms.fieldMapping.mapper';
import { mapFilters } from '../cms.filters.mapper';
import { mapInfoCard } from '../cms.information-card.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

import { ComponentContentActionLinks, GetComponentQuery } from '@/generated/strapi';

export const mapOrderDetailsBlock = (data: GetComponentQuery): CMS.Model.OrderDetailsBlock.OrderDetailsBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsOrderDetails':
            return {
                id: component.id,
                title: component.title,
                productsTitle: component.productsTitle as string,
                statusLadder: component.statusLadder.map((status) => status.title),
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
                    close: configurableTexts.actions.close,
                },
                totalValue: mapInfoCard(component.totalValue),
                createdOrderAt: mapInfoCard(component.createdOrderAt),
                paymentDueDate: mapInfoCard(component.paymentDueDate),
                overdue: mapInfoCard(component.overdue),
                orderStatus: mapInfoCard(component.orderStatus),
                customerComment: mapInfoCard(component.customerComment),
                actionLinks: mapActionLinks(component.actionLinks as ComponentContentActionLinks[]),
            };
    }

    throw new NotFoundException();
};
