import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/faq.client';

export interface FaqProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    isDraftModeEnabled?: boolean;
}

export type FaqPureProps = FaqProps & Model.FaqBlock;

export type FaqRendererProps = Omit<FaqProps, ''> & {
    slug: string[];
};
