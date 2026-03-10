import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/quick-links.client';

export interface QuickLinksProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    isDraftModeEnabled?: boolean;
}

export type QuickLinksPureProps = QuickLinksProps & Model.QuickLinksBlock;

export type QuickLinksRendererProps = Omit<QuickLinksProps, ''> & {
    slug: string[];
};
