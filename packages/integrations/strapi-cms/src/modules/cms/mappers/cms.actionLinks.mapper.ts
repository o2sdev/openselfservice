import { Models } from '@o2s/framework/modules';

import { ComponentContentActionLinks } from '@/generated/strapi';

export const mapActionLinks = (
    actionLinks: ComponentContentActionLinks[] | undefined,
): Models.ActionLink.ActionLink[] | undefined => {
    if (!actionLinks) {
        return undefined;
    }

    return actionLinks
        .filter((actionLink) => actionLink.page?.slug || actionLink.url)
        .map((actionLink) => ({
            label: actionLink.label,
            url: (actionLink.page?.slug || actionLink.url) as string,
            icon: actionLink.icon,
            inProgress: actionLink.inProgress || false,
        }));
};
