import { CMS } from '@o2s/framework/modules';

const MOCK_SERVICE_LIST_BLOCK_EN: CMS.Model.ServiceListBlock.ServiceListBlock = {
    id: 'service-list-1',
    title: 'Services',
    subtitle: 'List of your services',
    detailsLabel: 'Details',
    fields: {
        type: {
            PHYSICAL: 'Physical',
            VIRTUAL: 'Virtual',
        },
        category: {
            TOOLS: 'Tools',
            HARDWARE: 'Hardware',
            SOFTWARE: 'Software',
            MEASUREMENT: 'Measurement',
        },
        status: {
            ACTIVE: 'Active',
            INACTIVE: 'Inactive',
            EXPIRED: 'Expired',
        },
        paymentPeriod: {
            MONTHLY: 'mo',
            YEARLY: 'ye',
            WEEKLY: 'we',
            ONE_TIME: 'one-time',
        },
    },
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter',
        title: 'Filter Services',
        description: 'Use filters to find specific services',
        submit: 'Apply Filters',
        reset: 'Reset Filters',
        removeFilters: 'Remove filters ({active})',
        close: 'Close filters',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Product Type',
                allowMultiple: true,
                options: [
                    { label: 'Physical', value: 'PHYSICAL' },
                    { label: 'Virtual', value: 'VIRTUAL' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Product Category',
                allowMultiple: true,
                options: [
                    { label: 'Software', value: 'SOFTWARE' },
                    { label: 'Tools', value: 'TOOLS' },
                    { label: 'Hardware', value: 'HARDWARE' },
                    { label: 'Measurement', value: 'MEASUREMENT' },
                    { label: 'Cloud', value: 'CLOUD' },
                    { label: 'Support', value: 'SUPPORT' },
                    { label: 'Subscription', value: 'SUBSCRIPTION' },
                    { label: 'Warranty', value: 'WARRANTY' },
                    { label: 'Maintenance', value: 'MAINTENANCE' },
                    { label: 'Training', value: 'TRAINING' },
                ],
            },
        ],
    },
    noResults: {
        title: 'No Services Found',
        description: 'There are no services matching your criteria',
    },
    detailsUrl: '/services/{id}',
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        clickToSelect: 'Click to select',
    },
};

const MOCK_SERVICE_LIST_BLOCK_DE: CMS.Model.ServiceListBlock.ServiceListBlock = {
    id: 'service-list-1',
    title: 'Dienstleistungen',
    subtitle: 'Liste Ihrer Dienstleistungen',
    detailsLabel: 'Details',
    fields: {
        type: {
            PHYSICAL: 'Physikalisch',
            VIRTUAL: 'Virtuell',
        },
        category: {
            TOOLS: 'Werkzeuge',
            HARDWARE: 'Hardware',
            SOFTWARE: 'Software',
            MEASUREMENT: 'Messung',
        },
        status: {
            ACTIVE: 'Aktiv',
            INACTIVE: 'Inaktiv',
            EXPIRED: 'Abgelaufen',
        },
        paymentPeriod: {
            MONTHLY: 'monatlich',
            YEARLY: 'jährlich',
            WEEKLY: 'wochenweise',
            ONE_TIME: 'einmalig',
        },
    },
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Vorherige',
        next: 'Nächste',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filter',
        title: 'Filter Dienstleistungen',
        description: 'Verwenden Sie Filter, um spezifische Dienstleistungen zu finden',
        submit: 'Filter anwenden',
        reset: 'Filter zurücksetzen',
        removeFilters: 'Filter entfernen ({active})',
        close: 'Filter schließen',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Produkttyp',
                allowMultiple: true,
                options: [
                    { label: 'Physikalisch', value: 'PHYSICAL' },
                    { label: 'Virtuell', value: 'VIRTUAL' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Produktkategorie',
                allowMultiple: true,
                options: [
                    { label: 'Software', value: 'SOFTWARE' },
                    { label: 'Werkzeuge', value: 'TOOLS' },
                    { label: 'Hardware', value: 'HARDWARE' },
                    { label: 'Messung', value: 'MEASUREMENT' },
                    { label: 'Cloud', value: 'CLOUD' },
                    { label: 'Support', value: 'SUPPORT' },
                    { label: 'Subskryption', value: 'SUBSCRIPTION' },
                    { label: 'Garantie', value: 'WARRANTY' },
                    { label: 'Wartung', value: 'MAINTENANCE' },
                    { label: 'Training', value: 'TRAINING' },
                ],
            },
        ],
    },
    noResults: {
        title: 'Keine Dienstleistungen gefunden',
        description: 'Es gibt keine Dienstleistungen, die Ihren Kriterien entsprechen',
    },
    detailsUrl: '/dienstleistungen/{id}',
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        clickToSelect: 'Klicken Sie, um auszuwählen',
    },
};

const MOCK_SERVICE_LIST_BLOCK_PL: CMS.Model.ServiceListBlock.ServiceListBlock = {
    id: 'service-list-1',
    title: 'Usługi',
    subtitle: 'Lista Twoich usług',
    detailsLabel: 'Szczegóły',
    fields: {
        type: {
            PHYSICAL: 'Fizyczny',
            VIRTUAL: 'Wirtualny',
        },
        category: {
            TOOLS: 'Narzędzia',
            HARDWARE: 'Sprzęt',
            SOFTWARE: 'Oprogramowanie',
            MEASUREMENT: 'Pomiar',
        },
        status: {
            ACTIVE: 'Aktywny',
            INACTIVE: 'Nieaktywny',
            EXPIRED: 'Wygasły',
        },
        paymentPeriod: {
            MONTHLY: 'miesięczny',
            YEARLY: 'roczny',
            WEEKLY: 'tygodniowy',
            ONE_TIME: 'jednorazowy',
        },
    },
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtruj',
        title: 'Filtruj Usługi',
        description: 'Użyj filtrów, aby znaleźć konkretne usługi',
        submit: 'Zastosuj Filtry',
        reset: 'Resetuj Filtry',
        removeFilters: 'Usuń filtry ({active})',
        close: 'Zamknij filtry',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Typ Produktu',
                allowMultiple: true,
                options: [
                    { label: 'Fizyczny', value: 'PHYSICAL' },
                    { label: 'Wirtualny', value: 'VIRTUAL' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Kategoria Produktu',
                allowMultiple: true,
                options: [
                    { label: 'Oprogramowanie', value: 'SOFTWARE' },
                    { label: 'Narzędzia', value: 'TOOLS' },
                    { label: 'Sprzęt', value: 'HARDWARE' },
                    { label: 'Pomiar', value: 'MEASUREMENT' },
                    { label: 'Chmura', value: 'CLOUD' },
                    { label: 'Wsparcie', value: 'SUPPORT' },
                    { label: 'Subskrypcja', value: 'SUBSCRIPTION' },
                    { label: 'Gwarancja', value: 'WARRANTY' },
                    { label: 'Utrzymanie', value: 'MAINTENANCE' },
                    { label: 'Szkolenie', value: 'TRAINING' },
                ],
            },
        ],
    },
    noResults: {
        title: 'Nie znaleziono usług',
        description: 'Nie znaleziono usług spełniających Twoje kryteria',
    },
    detailsUrl: '/usługi/{id}',
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        clickToSelect: 'Kliknij, aby wybrać',
    },
};

export const mapServiceListBlock = (locale: string): CMS.Model.ServiceListBlock.ServiceListBlock => {
    switch (locale) {
        case 'en':
            return MOCK_SERVICE_LIST_BLOCK_EN;
        case 'de':
            return MOCK_SERVICE_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_SERVICE_LIST_BLOCK_PL;
        default:
            return MOCK_SERVICE_LIST_BLOCK_EN;
    }
};
