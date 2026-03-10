import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/pricing-section.client';

export type PricingSectionProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type PricingSectionPureProps = PricingSectionProps & Model.PricingSectionBlock;

export type PricingSectionRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
