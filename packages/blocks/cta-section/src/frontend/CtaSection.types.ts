import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/cta-section.client';

export interface CtaSectionProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type CtaSectionPureProps = CtaSectionProps & Model.CtaSectionBlock;

export type CtaSectionRendererProps = Omit<CtaSectionProps, ''> & {
    slug: string[];
};
