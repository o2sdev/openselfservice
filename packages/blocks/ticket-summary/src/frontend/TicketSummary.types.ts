import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/ticket-summary.client';

export type TicketSummaryProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type TicketSummaryPureProps = TicketSummaryProps & Model.TicketSummaryBlock;

export type TicketSummaryRendererProps = Omit<TicketSummaryProps, ''> & {
    slug: string[];
};
