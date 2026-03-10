import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/bento-grid.client';

export type BentoGridProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type BentoGridPureProps = BentoGridProps & Model.BentoGridBlock;

export type BentoGridRendererProps = Omit<BentoGridProps, ''> & {
    slug: string[];
};
