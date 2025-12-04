import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/bento-grid.client';

export interface BentoGridProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type BentoGridPureProps = BentoGridProps & Model.BentoGridBlock;

export type BentoGridRendererProps = Omit<BentoGridProps, ''> & {
    slug: string[];
};
