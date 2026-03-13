import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/ticket-details.client';

export interface TicketDetailsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    ticketId: string;
}

export type TicketDetailsPureProps = TicketDetailsProps & Model.TicketDetailsBlock;

export type TicketDetailsRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
