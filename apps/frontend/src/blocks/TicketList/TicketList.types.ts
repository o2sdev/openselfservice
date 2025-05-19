import { Blocks } from '@o2s/api-harmonization';

export interface TicketListProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type TicketListPureProps = TicketListProps & Blocks.TicketList.Model.TicketListBlock;
