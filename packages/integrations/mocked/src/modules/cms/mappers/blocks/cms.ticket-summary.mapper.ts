import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_SUMMARY_BLOCK_EN: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Ticket Summary',
    layout: 'horizontal',
};

const MOCK_TICKET_SUMMARY_BLOCK_DE: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Ticket Summary',
    layout: 'horizontal',
};

const MOCK_TICKET_SUMMARY_BLOCK_PL: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Ticket Summary',
    layout: 'horizontal',
};

export const mapTicketSummaryBlock = (locale: string): CMS.Model.TicketSummaryBlock.TicketSummaryBlock => {
    switch (locale) {
        case 'de':
            return MOCK_TICKET_SUMMARY_BLOCK_DE;
        case 'pl':
            return MOCK_TICKET_SUMMARY_BLOCK_PL;
        default:
            return MOCK_TICKET_SUMMARY_BLOCK_EN;
    }
};
