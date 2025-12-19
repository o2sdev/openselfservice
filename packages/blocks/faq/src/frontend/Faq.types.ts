import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/faq.client';

export interface FaqProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
}

export type FaqPureProps = FaqProps & Model.FaqBlock;

export type FaqRendererProps = Omit<FaqProps, ''> & {
    slug: string[];
};
