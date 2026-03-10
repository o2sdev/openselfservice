import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/orders-summary.client';

export type OrdersSummaryProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type OrdersSummaryPureProps = OrdersSummaryProps & Model.OrdersSummaryBlock;

export type OrdersSummaryRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
