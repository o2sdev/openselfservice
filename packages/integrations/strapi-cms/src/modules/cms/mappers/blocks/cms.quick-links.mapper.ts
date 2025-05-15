import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';
import { mapLink } from '@/modules/cms/mappers/cms.link.mapper';
import { mapMedia } from '@/modules/cms/mappers/cms.media.mapper';

export const mapQuickLinksBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsQuickLinks':
            return {
                id: component.id,
                title: component.title,
                description: component.description,
                items: component.quickLinks.map((item) => ({
                    ...mapLink(item)!,
                    icon: mapMedia(item.icon, baseUrl),
                })),
            };
    }

    throw new NotFoundException();
};
