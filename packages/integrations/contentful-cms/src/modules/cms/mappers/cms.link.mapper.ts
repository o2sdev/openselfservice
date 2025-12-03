import { Models } from '@o2s/framework/modules';

import { LinkFragment } from '@/generated/contentful';

export const mapLink = (component?: LinkFragment): Models.Link.Link | undefined => {
    if (!component) return undefined;

    return {
        label: component.label || '',
        description: component.page?.seo?.description,
        url: (component.page?.slug || component.url)!,
        icon: component.icon,
    };
};
