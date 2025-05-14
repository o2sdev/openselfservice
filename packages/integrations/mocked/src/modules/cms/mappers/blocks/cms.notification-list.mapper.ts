import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_LIST_BLOCK_EN: CMS.Model.NotificationListBlock.NotificationListBlock = {
    id: 'notification-list-1',
    title: 'Notifications',
    subtitle: 'List of your notifications',
    table: {
        columns: [
            { id: 'status', title: 'Status' },
            { id: 'title', title: 'Title' },
            { id: 'type', title: 'Type' },
            { id: 'priority', title: 'Priority' },
            { id: 'createdAt', title: 'Date' },
        ],
        actions: {
            title: 'Actions',
            label: 'View details',
        },
    },
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'General',
            TICKET_UPDATE: 'Ticket update',
            TYPE_1: 'Special offer',
            TYPE_2: 'Important news',
        },
        status: {
            UNVIEWED: 'Not viewed',
            VIEWED: 'Viewed',
            READ: 'Read',
        },
        priority: {
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: 'High',
            CRITICAL: 'Critical',
        },
    },
    pagination: {
        limit: 10,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter & Sort',
        title: 'Filter & Sort notifications',
        description: 'Use filters to find specific notifications',
        submit: 'Apply',
        reset: 'Clear',
        close: 'Close filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort',
                allowMultiple: false,
                options: [
                    { label: 'Type (ascending)', value: 'type_ASC' },
                    { label: 'Type (descending)', value: 'type_DESC' },
                    { label: 'Status (ascending)', value: 'status_ASC' },
                    { label: 'Status (descending)', value: 'status_DESC' },
                    { label: 'Priority (ascending)', value: 'priority_ASC' },
                    { label: 'Priority (descending)', value: 'priority_DESC' },
                    { label: 'Date (ascending)', value: 'createdAt_ASC' },
                    { label: 'Date (descending)', value: 'createdAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Type',
                allowMultiple: true,
                options: [
                    { label: 'General notification', value: 'GENERAL_NOTIFICATION' },
                    { label: 'Ticket update', value: 'TICKET_UPDATE' },
                    { label: 'Special offer', value: 'TYPE_1' },
                    { label: 'Changes', value: 'TYPE_2' },
                    { label: 'Important news', value: 'TYPE_3' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                options: [
                    { label: 'Not viewed', value: 'UNVIEWED' },
                    { label: 'Viewed', value: 'VIEWED' },
                    { label: 'Read', value: 'READ' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'priority',
                label: 'Priority',
                allowMultiple: true,
                options: [
                    { label: 'Low Priority', value: 'low' },
                    { label: 'Medium Priority', value: 'medium' },
                    { label: 'High Priority', value: 'high' },
                    { label: 'Critical Priority', value: 'critical' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Date',
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
        title: 'No notifications found',
        description: 'There are no notifications matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        clickToSelect: 'Click to select',
    },
    detailsUrl: '/notifications/:id',
};

const MOCK_NOTIFICATION_LIST_BLOCK_DE: CMS.Model.NotificationListBlock.NotificationListBlock = {
    id: 'notification-list-1',
    title: 'Benachrichtigungen',
    subtitle: 'Liste Ihrer Benachrichtigungen',
    table: {
        columns: [
            { id: 'status', title: 'Status' },
            { id: 'title', title: 'Titel' },
            { id: 'type', title: 'Typ' },
            { id: 'priority', title: 'Priorität' },
            { id: 'createdAt', title: 'Datum' },
        ],
        actions: {
            title: 'Aktionen',
            label: 'Details anzeigen',
        },
    },
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'Allgemein',
            TICKET_UPDATE: 'Ticket-Aktualisierung',
            TYPE_1: 'Sonderangebot',
            TYPE_2: 'Wichtige Neuigkeiten',
        },
        status: {
            UNVIEWED: 'Nicht angesehen',
            VIEWED: 'Angesehen',
            READ: 'Gelesen',
        },
        priority: {
            LOW: 'Niedrig',
            MEDIUM: 'Mittel',
            HIGH: 'Hoch',
            CRITICAL: 'Kritisch',
        },
    },
    pagination: {
        limit: 5,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filtern & Sortieren',
        title: 'Benachrichtigungen filtern & sortieren',
        description: 'Verwenden Sie Filter, um bestimmte Benachrichtigungen zu finden',
        submit: 'Anwenden',
        reset: 'Zurücksetzen',
        close: 'Filter schließen',
        removeFilters: 'Filter entfernen ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren',
                allowMultiple: false,
                options: [
                    { label: 'Typ (aufsteigend)', value: 'type_ASC' },
                    { label: 'Typ (absteigend)', value: 'type_DESC' },
                    { label: 'Status (aufsteigend)', value: 'status_ASC' },
                    { label: 'Status (absteigend)', value: 'status_DESC' },
                    { label: 'Priorität (aufsteigend)', value: 'priority_ASC' },
                    { label: 'Priorität (absteigend)', value: 'priority_DESC' },
                    { label: 'Datum (aufsteigend)', value: 'createdAt_ASC' },
                    { label: 'Datum (absteigend)', value: 'createdAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Typ',
                allowMultiple: true,
                options: [
                    { label: 'Allgemeine Benachrichtigung', value: 'GENERAL_NOTIFICATION' },
                    { label: 'Ticket-Aktualisierung', value: 'TICKET_UPDATE' },
                    { label: 'Sonderangebot', value: 'TYPE_1' },
                    { label: 'Änderungen', value: 'TYPE_2' },
                    { label: 'Wichtige Neuigkeiten', value: 'TYPE_3' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                options: [
                    { label: 'Nicht angesehen', value: 'UNVIEWED' },
                    { label: 'Angesehen', value: 'VIEWED' },
                    { label: 'Gelesen', value: 'READ' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'priority',
                label: 'Priorität',
                allowMultiple: true,
                options: [
                    { label: 'Niedrige Priorität', value: 'low' },
                    { label: 'Mittlere Priorität', value: 'medium' },
                    { label: 'Hohe Priorität', value: 'high' },
                    { label: 'Kritische Priorität', value: 'critical' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Datum',
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
        title: 'Keine Benachrichtigungen gefunden',
        description: 'Es gibt keine Benachrichtigungen, die Ihren Kriterien entsprechen',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        clickToSelect: 'Klicken Sie, um auszuwählen',
    },
    detailsUrl: '/benachrichtigungen/:id',
};

const MOCK_NOTIFICATION_LIST_BLOCK_PL: CMS.Model.NotificationListBlock.NotificationListBlock = {
    id: 'notification-list-1',
    title: 'Powiadomienia',
    subtitle: 'Lista twoich powiadomień',
    table: {
        columns: [
            { id: 'status', title: 'Status' },
            { id: 'title', title: 'Tytuł' },
            { id: 'type', title: 'Typ' },
            { id: 'priority', title: 'Priorytet' },
            { id: 'createdAt', title: 'Data' },
        ],
        actions: {
            title: 'Akcje',
            label: 'Zobacz szczegóły',
        },
    },
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'Ogólne',
            TICKET_UPDATE: 'Aktualizacja zgłoszenia',
            TYPE_1: 'Oferta specjalna',
            TYPE_2: 'Ważne wiadomości',
        },
        status: {
            UNVIEWED: 'Nieprzeczytane',
            VIEWED: 'Wyświetlone',
            READ: 'Przeczytane',
        },
        priority: {
            LOW: 'Niski',
            MEDIUM: 'Średni',
            HIGH: 'Wysoki',
            CRITICAL: 'Krytyczny',
        },
    },
    pagination: {
        limit: 5,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtruj i sortuj',
        title: 'Filtruj i sortuj powiadomienia',
        description: 'Użyj filtrów, aby znaleźć konkretne powiadomienia',
        submit: 'Zastosuj',
        reset: 'Wyczyść',
        close: 'Zamknij filtry',
        removeFilters: 'Usuń filtry ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj',
                allowMultiple: false,
                options: [
                    { label: 'Typ (rosnąco)', value: 'type_ASC' },
                    { label: 'Typ (malejąco)', value: 'type_DESC' },
                    { label: 'Status (rosnąco)', value: 'status_ASC' },
                    { label: 'Status (malejąco)', value: 'status_DESC' },
                    { label: 'Priorytet (rosnąco)', value: 'priority_ASC' },
                    { label: 'Priorytet (malejąco)', value: 'priority_DESC' },
                    { label: 'Data (rosnąco)', value: 'createdAt_ASC' },
                    { label: 'Data (malejąco)', value: 'createdAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Typ',
                allowMultiple: true,
                options: [
                    { label: 'Powiadomienie ogólne', value: 'GENERAL_NOTIFICATION' },
                    { label: 'Aktualizacja zgłoszenia', value: 'TICKET_UPDATE' },
                    { label: 'Oferta specjalna', value: 'TYPE_1' },
                    { label: 'Zmiany', value: 'TYPE_2' },
                    { label: 'Ważne wiadomości', value: 'TYPE_3' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                options: [
                    { label: 'Nieprzeczytane', value: 'UNVIEWED' },
                    { label: 'Wyświetlone', value: 'VIEWED' },
                    { label: 'Przeczytane', value: 'READ' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'priority',
                label: 'Priorytet',
                allowMultiple: true,
                options: [
                    { label: 'Niski priorytet', value: 'low' },
                    { label: 'Średni priorytet', value: 'medium' },
                    { label: 'Wysoki priorytet', value: 'high' },
                    { label: 'Krytyczny priorytet', value: 'critical' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Data',
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
        title: 'Nie znaleziono powiadomień',
        description: 'Nie ma powiadomień spełniających Twoje kryteria',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        clickToSelect: 'Kliknij, aby wybrać',
    },
    detailsUrl: '/powiadomienia/:id',
};

export const mapNotificationListBlock = (locale: string): CMS.Model.NotificationListBlock.NotificationListBlock => {
    switch (locale) {
        case 'de':
            return { ...MOCK_NOTIFICATION_LIST_BLOCK_DE, detailsUrl: '/benachrichtigungen/{id}' };
        case 'pl':
            return { ...MOCK_NOTIFICATION_LIST_BLOCK_PL, detailsUrl: '/powiadomienia/{id}' };
        default:
            return { ...MOCK_NOTIFICATION_LIST_BLOCK_EN, detailsUrl: '/notifications/{id}' };
    }
};
