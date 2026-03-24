import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/payments-summary.client';

export type PaymentsSummaryProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type PaymentsSummaryPureProps = PaymentsSummaryProps & Model.PaymentsSummaryBlock;

export type PaymentsSummaryRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
