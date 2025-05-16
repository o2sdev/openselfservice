import { Models } from '@o2s/framework/modules';

import { MediaFragment } from '@/generated/strapi';

export const mapMedia = (component?: MediaFragment, baseURL?: string): Models.Media.Media | undefined => {
    if (!component) return undefined;

    return {
        url: `${baseURL}${component.url}`,
        alt: component.alternativeText || '',
        width: component.width,
        height: component.height,
    };
};
