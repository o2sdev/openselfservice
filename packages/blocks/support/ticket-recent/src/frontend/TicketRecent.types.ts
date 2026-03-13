import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/ticket-recent.client';

export interface TicketRecentProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type TicketRecentPureProps = TicketRecentProps & Model.TicketRecentBlock;

export type TicketRecentRendererProps = Omit<TicketRecentProps, ''> & {
    slug: string[];
};
