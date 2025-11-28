import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/hero-section.client';

export interface HeroSectionProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type HeroSectionPureProps = HeroSectionProps & Model.HeroSectionBlock;

export type HeroSectionRendererProps = Omit<HeroSectionProps, ''> & {
    slug: string[];
};
