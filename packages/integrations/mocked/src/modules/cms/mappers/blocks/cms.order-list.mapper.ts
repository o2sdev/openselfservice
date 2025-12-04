import { CMS } from '@o2s/framework/modules';

const MOCK_ORDER_LIST_BLOCK_EN: CMS.Model.OrderListBlock.OrderListBlock = {
    id: 'order-list-1',
    title: 'Orders',
    subtitle: 'Order history',
    table: {
        columns: [
            { id: 'id', title: 'Order ID' },
            { id: 'createdAt', title: 'Order date' },
            { id: 'paymentDueDate', title: 'Payment due date' },
            { id: 'status', title: 'Status' },
            { id: 'subtotal', title: 'Order net value' },
        ],
        actions: {
            title: 'Actions',
            label: 'Details',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Pending',
            COMPLETED: 'Completed',
            SHIPPED: 'Shipped',
            CANCELLED: 'Cancelled',
            ARCHIVED: 'Archived',
            REQUIRES_ACTION: 'Requires Action',
            UNKNOWN: 'Unknown',
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
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Order ID (ascending)', value: 'id_ASC' },
                    { label: 'Order ID (descending)', value: 'id_DESC' },
                    { label: 'Order date (ascending)', value: 'createdAt_ASC' },
                    { label: 'Order date (descending)', value: 'createdAt_DESC' },
                    { label: 'Payment due date (ascending)', value: 'updatedAt_ASC' },
                    { label: 'Payment due date (descending)', value: 'updatedAt_DESC' },
                    { label: 'Order net value (ascending)', value: 'subtotal_ASC' },
                    { label: 'Order net value (descending)', value: 'subtotal_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'status',
                label: 'Status',
                allowMultiple: false,
                isLeading: false,
                options: [
                    { label: 'Completed', value: 'COMPLETED' },
                    { label: 'Cancelled', value: 'CANCELLED' },
                    { label: 'Pending', value: 'PENDING' },
                    { label: 'Processing', value: 'PROCESSING' },
                    { label: 'Shipped', value: 'SHIPPED' },
                    { label: 'Delivered', value: 'DELIVERED' },
                    { label: 'Returned', value: 'RETURNED' },
                    { label: 'Training Request', value: 'TRAINING_REQUEST' },
                    { label: 'Requires Action', value: 'REQUIRES_ACTION' },
                    { label: 'Archived', value: 'ARCHIVED' },
                    { label: 'Unknown', value: 'UNKNOWN' },
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
    },
    reorderLabel: 'Reorder',
    detailsUrl: '/orders/{id}',
    cardHeaderSlots: {
        left: 'id',
        right: 'status',
        bottom: 'createdAt',
    },
};

const MOCK_ORDER_LIST_BLOCK_DE: CMS.Model.OrderListBlock.OrderListBlock = {
    id: 'order-list-1',
    title: 'Bestellungen',
    subtitle: 'Bestellhistorie',
    table: {
        columns: [
            { id: 'id', title: 'Bestellnummer' },
            { id: 'createdAt', title: 'Bestelldatum' },
            { id: 'paymentDueDate', title: 'Zahlungsfrist' },
            { id: 'status', title: 'Status' },
            { id: 'subtotal', title: 'Bestellnetto' },
        ],
        actions: {
            title: 'Aktion',
            label: 'Details',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Ausstehend',
            COMPLETED: 'Abgeschlossen',
            SHIPPED: 'Versendet',
            CANCELLED: 'Storniert',
            ARCHIVED: 'Archiviert',
            REQUIRES_ACTION: 'Aktion erforderlich',
            UNKNOWN: 'Unbekannt',
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
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren nach',
                allowMultiple: false,
                isLeading: true,
                options: [
                    { label: 'Bestellnummer aufsteigend', value: 'id_ASC' },
                    { label: 'Bestellnummer absteigend', value: 'id_DESC' },
                    { label: 'Bestelldatum aufsteigend', value: 'createdAt_ASC' },
                    { label: 'Bestelldatum absteigend', value: 'createdAt_DESC' },
                    { label: 'Zahlungsfrist aufsteigend', value: 'updatedAt_ASC' },
                    { label: 'Bestellnetto aufsteigend', value: 'subtotal_ASC' },
                    { label: 'Bestellnetto absteigend', value: 'subtotal_DESC' },
                ],
            },
            {
                __typename: 'FilterToggleGroup',
                id: 'status',
                label: 'Status',
                allowMultiple: false,
                isLeading: false,
                options: [
                    { label: 'Abgeschlossen', value: 'COMPLETED' },
                    { label: 'Storniert', value: 'CANCELLED' },
                    { label: 'Ausstehend', value: 'PENDING' },
                    { label: 'In Bearbeitung', value: 'PROCESSING' },
                    { label: 'Versandt', value: 'SHIPPED' },
                    { label: 'Geliefert', value: 'DELIVERED' },
                    { label: 'Zurückgegeben', value: 'RETURNED' },
                    { label: 'Schulungsanfrage', value: 'TRAINING_REQUEST' },
                    { label: 'Aktion erforderlich', value: 'REQUIRES_ACTION' },
                    { label: 'Archiviert', value: 'ARCHIVED' },
                    { label: 'Unbekannt', value: 'UNKNOWN' },
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
    },
    reorderLabel: 'Erneut bestellen',
    detailsUrl: '/bestellungen/{id}',
    cardHeaderSlots: {
        left: 'id',
        right: 'status',
        bottom: 'createdAt',
    },
};

const MOCK_ORDER_LIST_BLOCK_PL: CMS.Model.OrderListBlock.OrderListBlock = {
    id: 'order-list-1',
    title: 'Zamówienia',
    subtitle: 'Historia zamówień',
    table: {
        columns: [
            { id: 'id', title: 'Numer zamówienia' },
            { id: 'createdAt', title: 'Data zamówienia' },
            { id: 'paymentDueDate', title: 'Data płatności' },
            { id: 'status', title: 'Status' },
            { id: 'subtotal', title: 'Wartość zamówienia netto' },
        ],
        actions: {
            title: 'Akcja',
            label: 'Szczegóły',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Oczekuje',
            COMPLETED: 'Zakończone',
            SHIPPED: 'Wysłane',
            CANCELLED: 'Anulowane',
            ARCHIVED: 'Archiwum',
            REQUIRES_ACTION: 'Akcja wymagana',
            UNKNOWN: 'Nieznane',
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
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj według',
                allowMultiple: false,
                options: [
                    { label: 'Numer zamówienia rosnąco', value: 'id_ASC' },
                    { label: 'Numer zamówienia malejąco', value: 'id_DESC' },
                    { label: 'Data zamówienia rosnąco', value: 'createdAt_ASC' },
                    { label: 'Data zamówienia malejąco', value: 'createdAt_DESC' },
                    { label: 'Data płatności rosnąco', value: 'updatedAt_ASC' },
                    { label: 'Wartość zamówienia netto rosnąco', value: 'subtotal_ASC' },
                    { label: 'Wartość zamówienia netto malejąco', value: 'subtotal_DESC' },
                ],
            },
            {
                __typename: 'FilterToggleGroup',
                id: 'status',
                label: 'Status',
                allowMultiple: false,
                isLeading: true,
                options: [
                    { label: 'Zakończone', value: 'COMPLETED' },
                    { label: 'Anulowane', value: 'CANCELLED' },
                    { label: 'Oczekuje', value: 'PENDING' },
                    { label: 'W trakcie', value: 'PROCESSING' },
                    { label: 'Wysłane', value: 'SHIPPED' },
                    { label: 'Dostarczone', value: 'DELIVERED' },
                    { label: 'Zwrócone', value: 'RETURNED' },
                    { label: 'Wniosek o szkolenie', value: 'TRAINING_REQUEST' },
                    { label: 'Akcja wymagana', value: 'REQUIRES_ACTION' },
                    { label: 'Archiwum', value: 'ARCHIVED' },
                    { label: 'Nieznany', value: 'UNKNOWN' },
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
    },
    reorderLabel: 'Zamów ponownie',
    detailsUrl: '/zamowienia/{id}',
    cardHeaderSlots: {
        left: 'id',
        right: 'status',
        bottom: 'createdAt',
    },
};

export const mapOrderListBlock = (locale: string): CMS.Model.OrderListBlock.OrderListBlock => {
    switch (locale) {
        case 'de':
            return { ...MOCK_ORDER_LIST_BLOCK_DE };
        case 'pl':
            return { ...MOCK_ORDER_LIST_BLOCK_PL };
        default:
            return { ...MOCK_ORDER_LIST_BLOCK_EN };
    }
};
