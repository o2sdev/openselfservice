import { Models } from '@o2s/framework/modules';

import { MediaFragment } from '@/generated/contentful';

export const mapMedia = (asset?: MediaFragment, baseURL?: string): Models.Media.Media | undefined => {
    if (!asset) return undefined;

    return {
        url: baseURL ? `${baseURL}${asset.url}` : asset.url || '',
        alt: asset.title || asset.description || '',
        width: asset.width || undefined,
        height: asset.height || undefined,
    };
};
