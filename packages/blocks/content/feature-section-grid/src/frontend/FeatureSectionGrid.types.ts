import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/feature-section-grid.client';

export type FeatureSectionGridProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type FeatureSectionGridPureProps = FeatureSectionGridProps & Model.FeatureSectionGridBlock;

export type FeatureSectionGridRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
