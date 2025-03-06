import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapTicketDetailsComponent = (
    data: GetComponentQuery,
): CMS.Model.TicketDetailsComponent.TicketDetailsComponent => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsTicketDetails':
            return {
                id: component.id,
                title: component.title,
                commentsTitle: component.commentsTitle,
                attachmentsTitle: component.attachmentsTitle,
                properties: component.properties.reduce(
                    (acc, property) => {
                        acc[property.key] = property.value;
                        return acc;
                    },
                    {} as { [key: string]: string },
                ),
                fieldMapping: mapFields(component.fields),
                labels: {
                    showMore: configurableTexts.actions.showMore,
                    showLess: configurableTexts.actions.showLess,
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                },
            };
    }

    throw new NotFoundException();
};
