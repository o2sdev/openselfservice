import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/cta-section.client';

export type CtaSectionProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type CtaSectionPureProps = CtaSectionProps & Model.CtaSectionBlock;

export type CtaSectionRendererProps = Omit<CtaSectionProps, ''> & {
    slug: string[];
};
