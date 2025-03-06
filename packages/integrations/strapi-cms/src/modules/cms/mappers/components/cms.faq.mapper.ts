import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapFaqComponent = (data: GetComponentQuery): CMS.Model.FaqComponent.FaqComponent => {
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
                    (item): CMS.Model.FaqComponent.FaqItem => ({
                        title: item.title,
                        content: item.description,
                    }),
                ),
                banner: {
                    title: component.banner?.title,
                    description: component.banner?.description,
                    buttons: component.banner?.buttons?.map((button) => ({
                        label: button.label,
                        ariaLabel: button.ariaLabel,
                        url: button.url,
                    })),
                } as CMS.Model.FaqComponent.FaqBoxWithButtons,
            };
    }

    throw new NotFoundException();
};
