import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_SUMMARY_BLOCK_EN: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Ticket Summary',
    layout: 'horizontal',
    open: {
        title: 'Under consideration',
        icon: 'Clock',
        message: 'Tickets under consideration',
    },
    inProgress: {
        title: 'New response',
        icon: 'AlertCircle',
        message: 'New response tickets',
    },
    closed: {
        title: 'Resolved',
        icon: 'CheckCircle',
        message: 'Resolved tickets',
    },
};

const MOCK_TICKET_SUMMARY_BLOCK_DE: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Ticket-Zusammenfassung',
    layout: 'horizontal',
    open: {
        title: 'In Bearbeitung',
        icon: 'Clock',
        message: 'Tickets in Bearbeitung',
    },
    inProgress: {
        title: 'Neue Antwort',
        icon: 'AlertCircle',
        message: 'Tickets mit neuer Antwort',
    },
    closed: {
        title: 'Gelöst',
        icon: 'CheckCircle',
        message: 'Gelöste Tickets',
    },
};

const MOCK_TICKET_SUMMARY_BLOCK_PL: CMS.Model.TicketSummaryBlock.TicketSummaryBlock = {
    id: 'ticket-summary-1',
    title: 'Suma zgłoszeń',
    layout: 'horizontal',
    open: {
        title: 'W rozpatrzeniu',
        icon: 'Clock',
        message: 'Zgłoszenia w rozpatrzeniu',
    },
    inProgress: {
        title: 'Nowa odpowiedź',
        icon: 'AlertCircle',
        message: 'Zgłoszenia z nową odpowiedzią',
    },
    closed: {
        title: 'Rozwiązane',
        icon: 'CheckCircle',
        message: 'Rozwiązane zgłoszenia',
    },
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
