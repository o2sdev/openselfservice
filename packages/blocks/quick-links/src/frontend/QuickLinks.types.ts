import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/quick-links.client';

export interface QuickLinksProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type QuickLinksPureProps = QuickLinksProps & Model.QuickLinksBlock;

export type QuickLinksRendererProps = Omit<QuickLinksProps, ''> & {
    slug: string[];
};
