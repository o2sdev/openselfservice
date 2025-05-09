import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_RECENT_BLOCK_EN: CMS.Model.TicketRecentBlock.TicketRecentBlock = {
    id: 'ticket-recent-1',
    title: 'Recent activity in cases',
    commentsTitle: 'Comments',
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        details: 'Details',
    },
    limit: 3,
    detailsUrl: '/cases/{id}',
};

const MOCK_TICKET_RECENT_BLOCK_DE: CMS.Model.TicketRecentBlock.TicketRecentBlock = {
    id: 'ticket-recent-1',
    title: 'Letzte Aktivität in Fällen',
    commentsTitle: 'Kommentare',
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        details: 'Einzelheiten',
    },
    limit: 3,
    detailsUrl: '/faelle/{id}',
};

const MOCK_TICKET_RECENT_BLOCK_PL: CMS.Model.TicketRecentBlock.TicketRecentBlock = {
    id: 'ticket-recent-1',
    title: 'Ostatnia aktywność w zgłoszeniach',
    commentsTitle: 'Komentarze',
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        details: 'Szczegóły',
    },
    limit: 3,
    detailsUrl: '/zgloszenia/{id}',
};

export const mapTicketRecentBlock = (locale: string): CMS.Model.TicketRecentBlock.TicketRecentBlock => {
    switch (locale) {
        case 'pl':
            return MOCK_TICKET_RECENT_BLOCK_PL;
        case 'de':
            return MOCK_TICKET_RECENT_BLOCK_DE;
        default:
            return MOCK_TICKET_RECENT_BLOCK_EN;
    }
};
