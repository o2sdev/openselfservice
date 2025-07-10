import { defineRouting } from 'next-intl/routing';

import { Models } from '@o2s/utils.frontend';

import { Model } from '../api-harmonization/ticket-list.client';

export interface TicketListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type TicketListPureProps = TicketListProps & Model.TicketListBlock;
