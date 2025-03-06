import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_DETAILS_COMPONENT_EN: CMS.Model.TicketDetailsComponent.TicketDetailsComponent = {
    id: 'ticket-list-1',
    title: 'Case details',
    commentsTitle: 'Comments',
    attachmentsTitle: 'Attachments',
    properties: {
        id: 'Case ID',
        topic: 'Topic',
        type: 'Case type',
        status: 'Status',
        description: 'Additional notes',
        address: 'Service address',
        contact: 'Form of contact',
    },
    fieldMapping: {
        topic: {
            TOOL_REPAIR: 'Tool Repair',
            FLEET_EXCHANGE: 'Fleet Exchange',
            CALIBRATION: 'Calibration',
            THEFT_REPORT: 'Theft Report',
            SOFTWARE_SUPPORT: 'Software Support',
            RENTAL_REQUEST: 'Rental Request',
            TRAINING_REQUEST: 'Training Request',
        },
        type: {
            URGENT: 'Urgent',
            STANDARD: 'Standard',
            LOW_PRIORITY: 'Low Priority',
        },
        status: {
            OPEN: 'Under consideration',
            CLOSED: 'Resolved',
            IN_PROGRESS: 'New response',
        },
    },
    labels: {
        showMore: 'Show case details',
        showLess: 'Show less details',
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

const MOCK_TICKET_DETAILS_COMPONENT_PL: CMS.Model.TicketDetailsComponent.TicketDetailsComponent = {
    id: 'ticket-list-1',
    title: 'Szczegóły sprawy',
    commentsTitle: 'Komentarze',
    attachmentsTitle: 'Załączniki',
    properties: {
        id: 'ID sprawy',
        topic: 'Temat',
        type: 'Typ sprawy',
        status: 'Status',
        description: 'Dodatkowe notatki',
        address: 'Adres serwisowy',
        contact: 'Forma kontaktu',
    },
    fieldMapping: {
        topic: {
            TOOL_REPAIR: 'Naprawa narzędzia',
            FLEET_EXCHANGE: 'Wymiana floty',
            CALIBRATION: 'Kalibracja',
            THEFT_REPORT: 'Zgłoszenie kradzieży',
            SOFTWARE_SUPPORT: 'Wsparcie oprogramowania',
            RENTAL_REQUEST: 'Prośba o wynajem',
            TRAINING_REQUEST: 'Prośba o szkolenie',
        },
        type: {
            URGENT: 'Pilne',
            STANDARD: 'Standardowe',
            LOW_PRIORITY: 'Niski priorytet',
        },
        status: {
            OPEN: 'W trakcie rozpatrywania',
            CLOSED: 'Rozwiązane',
            IN_PROGRESS: 'Nowa odpowiedź',
        },
    },
    labels: {
        showMore: 'Pokaż szczegóły sprawy',
        showLess: 'Pokaż mniej szczegółów',
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
};

const MOCK_TICKET_DETAILS_COMPONENT_DE: CMS.Model.TicketDetailsComponent.TicketDetailsComponent = {
    id: 'ticket-list-1',
    title: 'Falldetails',
    commentsTitle: 'Kommentare',
    attachmentsTitle: 'Anhänge',
    properties: {
        id: 'Fall-ID',
        topic: 'Thema',
        type: 'Falltyp',
        status: 'Status',
        description: 'Zusätzliche Notizen',
        address: 'Serviceadresse',
        contact: 'Kontaktform',
    },
    fieldMapping: {
        topic: {
            TOOL_REPAIR: 'Werkzeugreparatur',
            FLEET_EXCHANGE: 'Flottenaustausch',
            CALIBRATION: 'Kalibrierung',
            THEFT_REPORT: 'Diebstahlmeldung',
            SOFTWARE_SUPPORT: 'Software-Support',
            RENTAL_REQUEST: 'Mietanfrage',
            TRAINING_REQUEST: 'Schulungsanfrage',
        },
        type: {
            URGENT: 'Dringend',
            STANDARD: 'Standard',
            LOW_PRIORITY: 'Niedrige Priorität',
        },
        status: {
            OPEN: 'In Bearbeitung',
            CLOSED: 'Gelöst',
            IN_PROGRESS: 'Neue Antwort',
        },
    },
    labels: {
        showMore: 'Falldetails anzeigen',
        showLess: 'Weniger Details anzeigen',
        today: 'Heute',
        yesterday: 'Gestern',
    },
};

export const mapTicketDetailsComponent = (_locale: string): CMS.Model.TicketDetailsComponent.TicketDetailsComponent => {
    switch (_locale) {
        case 'pl':
            return MOCK_TICKET_DETAILS_COMPONENT_PL;
        case 'de':
            return MOCK_TICKET_DETAILS_COMPONENT_DE;
        default:
            return MOCK_TICKET_DETAILS_COMPONENT_EN;
    }
};
