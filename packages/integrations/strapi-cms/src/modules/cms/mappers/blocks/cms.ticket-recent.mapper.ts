import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapTicketRecentBlock = (data: GetComponentQuery): CMS.Model.TicketRecentBlock.TicketRecentBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsTicketRecent':
            return {
                id: component.id,
                title: component.title,
                commentsTitle: component.commentsTitle,
                limit: component.limit,
                detailsUrl: component.detailsUrl,
                labels: {
                    details: configurableTexts.actions.details,
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                },
            };
    }

    throw new NotFoundException();
};
