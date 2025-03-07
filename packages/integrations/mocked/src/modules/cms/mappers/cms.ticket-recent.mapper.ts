import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_RECENT_COMPONENT_EN: CMS.Model.TicketRecentComponent.TicketRecentComponent = {
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

const MOCK_TICKET_RECENT_COMPONENT_DE: CMS.Model.TicketRecentComponent.TicketRecentComponent = {
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

const MOCK_TICKET_RECENT_COMPONENT_PL: CMS.Model.TicketRecentComponent.TicketRecentComponent = {
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

export const mapTicketRecentComponent = (locale: string): CMS.Model.TicketRecentComponent.TicketRecentComponent => {
    switch (locale) {
        case 'pl':
            return MOCK_TICKET_RECENT_COMPONENT_PL;
        case 'de':
            return MOCK_TICKET_RECENT_COMPONENT_DE;
        default:
            return MOCK_TICKET_RECENT_COMPONENT_EN;
    }
};
