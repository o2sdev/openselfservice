import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/ticket-list.client';

export interface TicketListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
}

export type TicketListPureProps = TicketListProps & Model.TicketListBlock;

export type TicketListRendererProps = Omit<TicketListProps, ''> & {
    slug: string[];
};
