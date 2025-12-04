import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/pricing-section.client';

export interface PricingSectionProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type PricingSectionPureProps = PricingSectionProps & Model.PricingSectionBlock;

export type PricingSectionRendererProps = Omit<PricingSectionProps, ''> & {
    slug: string[];
};
