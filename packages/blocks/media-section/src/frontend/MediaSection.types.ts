import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/media-section.client';

export interface MediaSectionProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type MediaSectionPureProps = MediaSectionProps & Model.MediaSectionBlock;

export type MediaSectionRendererProps = Omit<MediaSectionProps, ''> & {
    slug: string[];
};
