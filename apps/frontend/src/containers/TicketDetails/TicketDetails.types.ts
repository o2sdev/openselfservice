import { Components } from '@o2s/api-harmonization';

export interface TicketDetailsProps {
    id: string;
    ticketId: string;
    accessToken: string;
    locale: string;
}

export type TicketDetailsPureProps = TicketDetailsProps & Components.TicketDetails.Model.TicketDetailsComponent;
