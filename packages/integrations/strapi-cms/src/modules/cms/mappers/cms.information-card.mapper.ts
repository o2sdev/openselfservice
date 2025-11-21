import { Models } from '@o2s/framework/modules';

import { InformationCardFragment } from '@/generated/strapi';

export const mapInfoCard = (
    component: InformationCardFragment | null | undefined,
): Models.InfoCard.InfoCard | undefined => {
    if (!component) {
        return undefined;
    }

    return {
        title: component.title,
        icon: component.icon,
        message: component.message,
        altMessage: component.altMessage,
        link: component.link && {
            label: component.link.label,
            url: component.link.url || component.link.page?.slug || '',
            icon: component.link.icon,
        },
    };
};
