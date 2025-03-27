import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapFaqBlock = (data: GetComponentQuery): CMS.Model.FaqBlock.FaqBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFaq':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                items: component.items?.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.title,
                        content: item.description,
                    }),
                ),
                banner: {
                    title: component.banner?.title,
                    description: component.banner?.description,
                    button: component.banner?.button,
                } as CMS.Model.FaqBlock.FaqBoxWithButton,
            };
    }

    throw new NotFoundException();
};
