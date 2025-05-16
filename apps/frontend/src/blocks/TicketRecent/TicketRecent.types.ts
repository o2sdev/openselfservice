import { Blocks } from '@o2s/api-harmonization';

export interface TicketRecentProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type TicketRecentPureProps = TicketRecentProps & Blocks.TicketRecent.Model.TicketRecentBlock;
