import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/ticket-details.client';

export interface TicketDetailsProps {
    id: string;
    ticketId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type TicketDetailsPureProps = TicketDetailsProps & Model.TicketDetailsBlock;

export type TicketDetailsRendererProps = Omit<TicketDetailsProps, 'ticketId'> & {
    slug: string[];
};
