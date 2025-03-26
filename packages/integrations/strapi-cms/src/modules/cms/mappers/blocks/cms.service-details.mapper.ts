import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { mapFields } from '../cms.fieldMapping.mapper';

import { GetComponentQuery } from '@/generated/strapi';

export const mapServiceDetailsBlock = (data: GetComponentQuery): CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsServiceDetails':
            return {
                id: component.id,
                title: component.title,
                properties: component.properties.reduce(
                    (acc, property) => {
                        acc[property.key] = property.value;
                        return acc;
                    },
                    {} as { [key: string]: string },
                ),
                fields: mapFields(component.fields),
                labels: {
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                    settings: configurableTexts.actions.settings,
                    renew: configurableTexts.actions.renew,
                },
            };
    }

    throw new NotFoundException();
};
