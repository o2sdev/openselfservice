import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/media-section.client';

export type MediaSectionProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type MediaSectionPureProps = MediaSectionProps & Model.MediaSectionBlock;

export type MediaSectionRendererProps = Omit<MediaSectionProps, ''> & {
    slug: string[];
};
