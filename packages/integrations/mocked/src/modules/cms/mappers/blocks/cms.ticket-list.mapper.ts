import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_LIST_BLOCK_EN: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Your recent cases',
    forms: [
        {
            label: 'Submit complaint',
            url: '/submit-complaint',
            icon: 'MessageSquareWarning',
        },
        {
            label: 'Request device maintenance',
            url: '/request-device-maintenance',
            icon: 'Hammer',
        },
        {
            label: 'Contact us',
            icon: 'ClipboardPenLine',
            url: '/contact-us',
        },
    ],
    table: {
        columns: [
            { id: 'topic', title: 'Case Type' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Date' },
        ],
        actions: {
            title: 'Action',
            label: 'Details',
        },
    },
    cardHeaderSlots: {
        left: 'topic',
        right: 'status',
        bottom: 'updatedAt',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Contact Form',
            REQUEST_DEVICE_MAINTENANCE: 'Device Maintenance',
            COMPLAINT: 'Complaint',
        },
        status: {
            OPEN: 'Under consideration',
            CLOSED: 'Resolved',
            IN_PROGRESS: 'New response',
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
        label: 'Filters & Sort',
        title: 'Filters & Sort',
        description: 'Filter your cases by topic, type, or date range to find what you need quickly.',
        submit: 'Apply',
        reset: 'Clear',
        close: 'Close filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterToggleGroup',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                isLeading: true,
                options: [
                    { label: 'All', value: 'ALL' },
                    { label: 'Under consideration', value: 'OPEN' },
                    { label: 'Resolved', value: 'CLOSED' },
                    { label: 'New response', value: 'IN_PROGRESS' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Case Type (ascending)', value: 'topic_ASC' },
                    { label: 'Case Type (descending)', value: 'topic_DESC' },
                    { label: 'Status (ascending)', value: 'status_ASC' },
                    { label: 'Status (descending)', value: 'status_DESC' },
                    { label: 'Updated (ascending)', value: 'updatedAt_ASC' },
                    { label: 'Updated (descending)', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Case Type',
                allowMultiple: false,
                isLeading: false,
                options: [
                    { label: 'All', value: 'ALL' },
                    { label: 'Contact Form', value: 'CONTACT_US' },
                    { label: 'Device Maintenance', value: 'REQUEST_DEVICE_MAINTENANCE' },
                    { label: 'Complaint', value: 'COMPLAINT' },
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
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'list',
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
        showMore: 'Show more',
        clickToSelect: 'Click to select',
        showMoreFilters: 'Show more filters',
        hideMoreFilters: 'Hide more filters',
        noActiveFilters: 'No active filters',
        ticketId: 'Ticket ID',
    },
    detailsUrl: '/cases/{id}',
};

const MOCK_TICKET_LIST_BLOCK_DE: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Ihre neuesten Fälle',
    forms: [
        {
            label: 'Beschwerde einreichen',
            url: '/submit-complaint',
            icon: 'MessageSquareWarning',
        },
        {
            label: 'Gerätewartung anfordern',
            url: '/request-device-maintenance',
            icon: 'Hammer',
        },
        {
            label: 'Kontakt',
            icon: 'ClipboardPenLine',
            url: '/contact-us',
        },
    ],
    table: {
        columns: [
            { id: 'topic', title: 'Falltyp' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Datum' },
        ],
        actions: {
            title: 'Aktion',
            label: 'Details',
        },
    },
    cardHeaderSlots: {
        left: 'topic',
        right: 'status',
        bottom: 'updatedAt',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Kontaktformular',
            REQUEST_DEVICE_MAINTENANCE: 'Gerätewartung',
            COMPLAINT: 'Beschwerde',
        },
        status: {
            OPEN: 'In Bearbeitung',
            CLOSED: 'Gelöst',
            IN_PROGRESS: 'Neue Antwort',
        },
    },
    pagination: {
        limit: 10,
        legend: 'von {totalPages} Seiten',
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
                __typename: 'FilterToggleGroup',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                isLeading: true,
                options: [
                    { label: 'Alle', value: 'ALL' },
                    { label: 'In Bearbeitung', value: 'OPEN' },
                    { label: 'Gelöst', value: 'CLOSED' },
                    { label: 'Neue Antwort', value: 'IN_PROGRESS' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren nach',
                allowMultiple: false,
                options: [
                    { label: 'Falltyp aufsteigend', value: 'topic_ASC' },
                    { label: 'Falltyp absteigend', value: 'topic_DESC' },
                    { label: 'Status aufsteigend', value: 'status_ASC' },
                    { label: 'Status absteigend', value: 'status_DESC' },
                    { label: 'Aktualisiert aufsteigend', value: 'updatedAt_ASC' },
                    { label: 'Aktualisiert absteigend', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Falltyp',
                allowMultiple: false,
                isLeading: false,
                options: [
                    { label: 'Alle', value: 'ALL' },
                    { label: 'Kontaktformular', value: 'CONTACT_US' },
                    { label: 'Gerätewartung', value: 'REQUEST_DEVICE_MAINTENANCE' },
                    { label: 'Beschwerde', value: 'COMPLAINT' },
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
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'list',
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
        showMore: 'Mehr anzeigen',
        clickToSelect: 'Klicken Sie, um auszuwählen',
        showMoreFilters: 'Mehr Filter anzeigen',
        hideMoreFilters: 'Weniger Filter anzeigen',
        noActiveFilters: 'Keine aktiven Filter',
        ticketId: 'Fall-ID',
    },
    detailsUrl: '/faelle/{id}',
};

const MOCK_TICKET_LIST_BLOCK_PL: CMS.Model.TicketListBlock.TicketListBlock = {
    id: 'ticket-list-1',
    title: 'Twoje ostatnie zgłoszenia',
    forms: [
        {
            label: 'Zgłoś błąd',
            url: '/submit-complaint',
            icon: 'MessageSquareWarning',
        },
        {
            label: 'Zgłoś wymagane konserwacje',
            url: '/request-device-maintenance',
            icon: 'Hammer',
        },
        {
            label: 'Skontaktuj się z nami',
            icon: 'ClipboardPenLine',
            url: '/contact-us',
        },
    ],

    table: {
        columns: [
            { id: 'topic', title: 'Typ zgłoszenia' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Data utworzenia' },
        ],
        actions: {
            title: 'Akcja',
            label: 'Szczegóły',
        },
    },
    cardHeaderSlots: {
        left: 'topic',
        right: 'status',
        bottom: 'updatedAt',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Formularz kontaktowy',
            REQUEST_DEVICE_MAINTENANCE: 'Konserwacja urządzenia',
            COMPLAINT: 'Reklamacja',
        },
        status: {
            OPEN: 'W rozpatrzeniu',
            CLOSED: 'Rozwiązane',
            IN_PROGRESS: 'Nowa odpowiedź',
        },
    },
    pagination: {
        limit: 10,
        legend: 'z {totalPages} stron',
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
                __typename: 'FilterToggleGroup',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                isLeading: true,
                options: [
                    { label: 'Wszystko', value: 'ALL' },
                    { label: 'W rozpatrzeniu', value: 'OPEN' },
                    { label: 'Rozwiązane', value: 'CLOSED' },
                    { label: 'Nowa odpowiedź', value: 'IN_PROGRESS' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj według',
                allowMultiple: false,
                options: [
                    { label: 'Typ zgłoszenia rosnąco', value: 'topic_ASC' },
                    { label: 'Typ zgłoszenia malejąco', value: 'topic_DESC' },
                    { label: 'Status rosnąco', value: 'status_ASC' },
                    { label: 'Status malejąco', value: 'status_DESC' },
                    { label: 'Aktualizacja rosnąco', value: 'updatedAt_ASC' },
                    { label: 'Aktualizacja malejąco', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Typ zgłoszenia',
                allowMultiple: false,
                isLeading: false,
                options: [
                    { label: 'Wszystko', value: 'ALL' },
                    { label: 'Formularz kontaktowy', value: 'CONTACT_US' },
                    { label: 'Konserwacja urządzenia', value: 'REQUEST_DEVICE_MAINTENANCE' },
                    { label: 'Reklamacja', value: 'COMPLAINT' },
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
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'list',
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
        showMore: 'Pokaż więcej',
        clickToSelect: 'Kliknij, aby wybrać',
        showMoreFilters: 'Pokaż więcej filtrów',
        hideMoreFilters: 'Ukryj więcej filtrów',
        ticketId: 'ID zgłoszenia',
        noActiveFilters: 'Brak aktywnych filtrów',
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
