import { Blocks } from '@o2s/api-harmonization';

export interface TicketDetailsProps {
    id: string;
    ticketId: string;
    accessToken?: string;
    locale: string;
}

export type TicketDetailsPureProps = TicketDetailsProps & Blocks.TicketDetails.Model.TicketDetailsBlock;
