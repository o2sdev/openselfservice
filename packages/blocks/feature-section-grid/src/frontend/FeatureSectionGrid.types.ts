import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/feature-section-grid.client';

export interface FeatureSectionGridProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type FeatureSectionGridPureProps = FeatureSectionGridProps & Model.FeatureSectionGridBlock;

export type FeatureSectionGridRendererProps = Omit<FeatureSectionGridProps, ''> & {
    slug: string[];
};
