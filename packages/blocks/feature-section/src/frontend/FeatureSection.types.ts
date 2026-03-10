import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/feature-section.client';

export type FeatureSectionProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type FeatureSectionPureProps = FeatureSectionProps & Model.FeatureSectionBlock;

export type FeatureSectionRendererProps = Omit<FeatureSectionProps, ''> & {
    slug: string[];
};
