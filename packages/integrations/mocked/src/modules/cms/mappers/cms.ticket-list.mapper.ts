import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_LIST_BLOCK_EN: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Cases overview',
    subtitle: 'Your recent cases',
    table: {
        columns: [
            { id: 'topic', title: 'Topic' },
            { id: 'type', title: 'Case type' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Date' },
        ],
        actions: {
            title: 'Action',
            label: 'Details',
        },
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
    pagination: {
        limit: 5,
        legend: 'of {total}',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filters & Sort',
        title: 'Filters & Sort',
        description: 'Filter your cases by topic, type, or date range to find what you need quickly.',
        submit: 'Apply',
        reset: 'Clear',
        close: 'Close filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Topic (ascending)', value: 'topic_ASC' },
                    { label: 'Topic (descending)', value: 'topic_DESC' },
                    { label: 'Type (ascending)', value: 'type_ASC' },
                    { label: 'Type (descending)', value: 'type_DESC' },
                    { label: 'Status (ascending)', value: 'status_ASC' },
                    { label: 'Status (descending)', value: 'status_DESC' },
                    { label: 'Updated (ascending)', value: 'updatedAt_ASC' },
                    { label: 'Updated (descending)', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Topic',
                allowMultiple: true,
                options: [
                    { label: 'Tool Repair', value: 'TOOL_REPAIR' },
                    { label: 'Fleet Exchange', value: 'FLEET_EXCHANGE' },
                    { label: 'Calibration', value: 'CALIBRATION' },
                    { label: 'Theft Report', value: 'THEFT_REPORT' },
                    { label: 'Software Support', value: 'SOFTWARE_SUPPORT' },
                    { label: 'Rental Request', value: 'RENTAL_REQUEST' },
                    { label: 'Training Request', value: 'TRAINING_REQUEST' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Case type',
                allowMultiple: false,
                options: [
                    { label: 'Urgent', value: 'URGENT' },
                    { label: 'Standard', value: 'STANDARD' },
                    { label: 'Low Priority', value: 'LOW_PRIORITY' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'updatedAt',
                label: 'Period of time',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/cases/{id}',
};

const MOCK_TICKET_LIST_BLOCK_DE: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Fallübersicht',
    subtitle: 'Ihre neuesten Fälle',
    table: {
        columns: [
            { id: 'topic', title: 'Thema' },
            { id: 'type', title: 'Falltyp' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Datum' },
        ],
        actions: {
            title: 'Aktion',
            label: 'Details',
        },
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
    pagination: {
        limit: 5,
        legend: 'von {total}',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filter & Sortierung',
        title: 'Filter & Sortierung',
        description: 'Filtern Sie Ihre Fälle nach verschiedenen Kriterien oder ändern Sie die Sortierreihenfolge.',
        submit: 'Anwenden',
        reset: 'Zurücksetzen',
        close: 'Filter schließen',
        removeFilters: 'Filter entfernen ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren nach',
                allowMultiple: false,
                options: [
                    { label: 'Thema aufsteigend', value: 'topic_ASC' },
                    { label: 'Thema absteigend', value: 'topic_DESC' },
                    { label: 'Typ aufsteigend', value: 'type_ASC' },
                    { label: 'Typ absteigend', value: 'type_DESC' },
                    { label: 'Status aufsteigend', value: 'status_ASC' },
                    { label: 'Status absteigend', value: 'status_DESC' },
                    { label: 'Aktualisiert aufsteigend', value: 'updatedAt_ASC' },
                    { label: 'Aktualisiert absteigend', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Thema',
                allowMultiple: true,
                options: [
                    { label: 'Werkzeugreparatur', value: 'TOOL_REPAIR' },
                    { label: 'Flottenaustausch', value: 'FLEET_EXCHANGE' },
                    { label: 'Kalibrierung', value: 'CALIBRATION' },
                    { label: 'Diebstahlmeldung', value: 'THEFT_REPORT' },
                    { label: 'Software-Support', value: 'SOFTWARE_SUPPORT' },
                    { label: 'Mietanfrage', value: 'RENTAL_REQUEST' },
                    { label: 'Schulungsanfrage', value: 'TRAINING_REQUEST' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Falltyp',
                allowMultiple: false,
                options: [
                    { label: 'Dringend', value: 'URGENT' },
                    { label: 'Standard', value: 'STANDARD' },
                    { label: 'Niedrige Priorität', value: 'LOW_PRIORITY' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'updatedAt',
                label: 'Zeitraum',
                from: {
                    label: 'Von',
                },
                to: {
                    label: 'Bis',
                },
            },
        ],
    },
    noResults: {
        title: 'Bisher gibt es hier nichts',
        description: '',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    detailsUrl: '/faelle/{id}',
};

const MOCK_TICKET_LIST_BLOCK_PL: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Przegląd zgłoszeń',
    subtitle: 'Twoje ostatnie zgłoszenia',
    table: {
        columns: [
            { id: 'topic', title: 'Temat' },
            { id: 'type', title: 'Typ zgłoszenia' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Data' },
        ],
        actions: {
            title: 'Akcja',
            label: 'Szczegóły',
        },
    },
    fieldMapping: {
        topic: {
            TOOL_REPAIR: 'Naprawa narzędzi',
            FLEET_EXCHANGE: 'Wymiana floty',
            CALIBRATION: 'Kalibracja',
            THEFT_REPORT: 'Zgłoszenie kradzieży',
            SOFTWARE_SUPPORT: 'Wsparcie oprogramowania',
            RENTAL_REQUEST: 'Wniosek o wynajem',
            TRAINING_REQUEST: 'Wniosek o szkolenie',
        },
        type: {
            URGENT: 'Pilne',
            STANDARD: 'Standardowe',
            LOW_PRIORITY: 'Niski priorytet',
        },
        status: {
            OPEN: 'W rozpatrzeniu',
            CLOSED: 'Rozwiązane',
            IN_PROGRESS: 'Nowa odpowiedź',
        },
    },
    pagination: {
        limit: 5,
        legend: 'z {total}',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtry i sortowanie',
        title: 'Filtry i sortowanie',
        description:
            'Filtruj swoje zgłoszenia według tematu, typu lub zakresu dat, aby szybko znaleźć to, czego potrzebujesz.',
        submit: 'Zastosuj',
        reset: 'Wyczyść',
        close: 'Zamknij filtry',
        removeFilters: 'Usuń filtry ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj według',
                allowMultiple: false,
                options: [
                    { label: 'Temat rosnąco', value: 'topic_ASC' },
                    { label: 'Temat malejąco', value: 'topic_DESC' },
                    { label: 'Typ rosnąco', value: 'type_ASC' },
                    { label: 'Typ malejąco', value: 'type_DESC' },
                    { label: 'Status rosnąco', value: 'status_ASC' },
                    { label: 'Status malejąco', value: 'status_DESC' },
                    { label: 'Aktualizacja rosnąco', value: 'updatedAt_ASC' },
                    { label: 'Aktualizacja malejąco', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Temat',
                allowMultiple: true,
                options: [
                    { label: 'Naprawa narzędzi', value: 'TOOL_REPAIR' },
                    { label: 'Wymiana floty', value: 'FLEET_EXCHANGE' },
                    { label: 'Kalibracja', value: 'CALIBRATION' },
                    { label: 'Zgłoszenie kradzieży', value: 'THEFT_REPORT' },
                    { label: 'Wsparcie oprogramowania', value: 'SOFTWARE_SUPPORT' },
                    { label: 'Wniosek o wynajem', value: 'RENTAL_REQUEST' },
                    { label: 'Wniosek o szkolenie', value: 'TRAINING_REQUEST' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Typ zgłoszenia',
                allowMultiple: false,
                options: [
                    { label: 'Pilne', value: 'URGENT' },
                    { label: 'Standardowe', value: 'STANDARD' },
                    { label: 'Niski priorytet', value: 'LOW_PRIORITY' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'updatedAt',
                label: 'Okres czasu',
                from: {
                    label: 'Od',
                },
                to: {
                    label: 'Do',
                },
            },
        ],
    },
    noResults: {
        title: 'Jak dotąd nie ma tu nic',
        description: '',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    detailsUrl: '/zgloszenia/{id}',
};

export const mapTicketListBlock = (locale: string): CMS.Model.TicketListBlock.TicketListBlock => {
    switch (locale) {
        case 'de':
            return { ...MOCK_TICKET_LIST_BLOCK_DE, detailsUrl: '/faelle/{id}' };
        case 'pl':
            return { ...MOCK_TICKET_LIST_BLOCK_PL, detailsUrl: '/zgloszenia/{id}' };
        default:
            return { ...MOCK_TICKET_LIST_BLOCK_EN, detailsUrl: '/cases/{id}' };
    }
};
