import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/feature-section.client';

export interface FeatureSectionProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type FeatureSectionPureProps = FeatureSectionProps & Model.FeatureSectionBlock;

export type FeatureSectionRendererProps = Omit<FeatureSectionProps, ''> & {
    slug: string[];
};
