import { Model } from '../api-harmonization/ticket-details.client';

export interface TicketDetailsProps {
    id: string;
    ticketId: string;
    accessToken?: string;
    locale: string;
}

export type TicketDetailsPureProps = TicketDetailsProps & Model.TicketDetailsBlock;
