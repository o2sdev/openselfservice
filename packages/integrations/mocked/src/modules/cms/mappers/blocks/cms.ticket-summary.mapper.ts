import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_SUMMARY_BLOCK_EN: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'Under consideration',
            icon: 'Clock',
            description: 'Tickets under consideration',
            variant: 'OPEN',
            value: 0,
        },
        {
            title: 'New response',
            icon: 'AlertCircle',
            description: 'New response tickets',
            variant: 'IN_PROGRESS',
            value: 0,
        },
        {
            title: 'Resolved',
            icon: 'CheckCircle',
            description: 'Resolved tickets',
            variant: 'CLOSED',
            value: 0,
        },
    ],
};

const MOCK_TICKET_SUMMARY_BLOCK_DE: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'In Bearbeitung',
            icon: 'Clock',
            description: 'Tickets in Bearbeitung',
            variant: 'OPEN',
            value: 0,
        },
        {
            title: 'Neue Antwort',
            icon: 'AlertCircle',
            description: 'Tickets mit neuer Antwort',
            variant: 'IN_PROGRESS',
            value: 0,
        },
        {
            title: 'Gelöst',
            icon: 'CheckCircle',
            description: 'Gelöste Tickets',
            variant: 'CLOSED',
            value: 0,
        },
    ],
};

const MOCK_TICKET_SUMMARY_BLOCK_PL: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'W rozpatrzeniu',
            icon: 'Clock',
            description: 'Zgłoszenia w rozpatrzeniu',
            variant: 'OPEN',
            value: 0,
        },
        {
            title: 'Nowa odpowiedź',
            icon: 'AlertCircle',
            description: 'Zgłoszenia z nową odpowiedzią',
            variant: 'IN_PROGRESS',
            value: 0,
        },
        {
            title: 'Rozwiązane',
            icon: 'CheckCircle',
            description: 'Rozwiązane zgłoszenia',
            variant: 'CLOSED',
            value: 0,
        },
    ],
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
