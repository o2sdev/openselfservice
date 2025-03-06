import { Components } from '@o2s/api-harmonization';

export interface TicketListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type TicketListPureProps = TicketListProps & Components.TicketList.Model.TicketListComponent;
