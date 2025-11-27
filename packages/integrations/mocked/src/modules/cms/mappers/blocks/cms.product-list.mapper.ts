import { CMS } from '@o2s/framework/modules';

const MOCK_PRODUCT_LIST_BLOCK_EN: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Products',
    subtitle: 'Browse our product catalog',
    detailsLabel: 'View Details',
    fieldMapping: {
        type: {
            PHYSICAL: 'Physical',
            VIRTUAL: 'Virtual',
        },
        category: {
            SOFTWARE: 'Software',
            TOOLS: 'Tools',
            HARDWARE: 'Hardware',
            MEASUREMENT: 'Measurement',
            CLOUD: 'Cloud',
            SUPPORT: 'Support',
            SUBSCRIPTION: 'Subscription',
            WARRANTY: 'Warranty',
            MAINTENANCE: 'Maintenance',
            TRAINING: 'Training',
        },
    },
    table: {
        columns: [
            { id: 'sku', title: 'SKU' },
            { id: 'name', title: 'Product Name' },
            { id: 'category', title: 'Category' },
            { id: 'type', title: 'Type' },
            { id: 'price', title: 'Price' },
        ],
        actions: {
            title: 'Actions',
            label: 'View Details',
        },
    },
    pagination: {
        limit: 12,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter',
        title: 'Filter Products',
        description: 'Use filters to find specific products',
        submit: 'Apply Filters',
        reset: 'Reset Filters',
        removeFilters: 'Remove filters ({active})',
        close: 'Close filters',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Name ascending', value: 'name_ASC' },
                    { label: 'Name descending', value: 'name_DESC' },
                    { label: 'Price ascending', value: 'price_ASC' },
                    { label: 'Price descending', value: 'price_DESC' },
                ],
            },
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
                label: 'Category',
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
        title: 'No Products Found',
        description: 'There are no products matching your criteria',
    },
    labels: {
        clickToSelect: 'Click to select',
        gridView: 'Grid view',
        tableView: 'Table view',
    },
};

const MOCK_PRODUCT_LIST_BLOCK_DE: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Produkte',
    subtitle: 'Durchsuchen Sie unseren Produktkatalog',
    detailsLabel: 'Details anzeigen',
    fieldMapping: {
        type: {
            PHYSICAL: 'Physikalisch',
            VIRTUAL: 'Virtuell',
        },
        category: {
            SOFTWARE: 'Software',
            TOOLS: 'Werkzeuge',
            HARDWARE: 'Hardware',
            MEASUREMENT: 'Messung',
            CLOUD: 'Cloud',
            SUPPORT: 'Support',
            SUBSCRIPTION: 'Abonnement',
            WARRANTY: 'Garantie',
            MAINTENANCE: 'Wartung',
            TRAINING: 'Schulung',
        },
    },
    table: {
        columns: [
            { id: 'sku', title: 'SKU' },
            { id: 'name', title: 'Produktname' },
            { id: 'category', title: 'Kategorie' },
            { id: 'type', title: 'Typ' },
            { id: 'price', title: 'Preis' },
        ],
        actions: {
            title: 'Aktionen',
            label: 'Details anzeigen',
        },
    },
    pagination: {
        limit: 12,
        legend: 'von {totalPages} Seiten',
        prev: 'Vorherige',
        next: 'Nächste',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filter',
        title: 'Filter Produkte',
        description: 'Verwenden Sie Filter, um spezifische Produkte zu finden',
        submit: 'Filter anwenden',
        reset: 'Filter zurücksetzen',
        removeFilters: 'Filter entfernen ({active})',
        close: 'Filter schließen',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren nach',
                allowMultiple: false,
                options: [
                    { label: 'Name aufsteigend', value: 'name_ASC' },
                    { label: 'Name absteigend', value: 'name_DESC' },
                    { label: 'Preis aufsteigend', value: 'price_ASC' },
                    { label: 'Preis absteigend', value: 'price_DESC' },
                ],
            },
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
                label: 'Kategorie',
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
        title: 'Keine Produkte gefunden',
        description: 'Es gibt keine Produkte, die Ihren Kriterien entsprechen',
    },
    labels: {
        clickToSelect: 'Klicken Sie, um auszuwählen',
        gridView: 'Rasteransicht',
        tableView: 'Tabellenansicht',
    },
};

const MOCK_PRODUCT_LIST_BLOCK_PL: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Produkty',
    subtitle: 'Przeglądaj nasz katalog produktów',
    detailsLabel: 'Zobacz szczegóły',
    fieldMapping: {
        type: {
            PHYSICAL: 'Fizyczny',
            VIRTUAL: 'Wirtualny',
        },
        category: {
            SOFTWARE: 'Oprogramowanie',
            TOOLS: 'Narzędzia',
            HARDWARE: 'Sprzęt',
            MEASUREMENT: 'Pomiar',
            CLOUD: 'Chmura',
            SUPPORT: 'Wsparcie',
            SUBSCRIPTION: 'Subskrypcja',
            WARRANTY: 'Gwarancja',
            MAINTENANCE: 'Konserwacja',
            TRAINING: 'Szkolenie',
        },
    },
    table: {
        columns: [
            { id: 'sku', title: 'SKU' },
            { id: 'name', title: 'Nazwa produktu' },
            { id: 'category', title: 'Kategoria' },
            { id: 'type', title: 'Typ' },
            { id: 'price', title: 'Cena' },
        ],
        actions: {
            title: 'Akcje',
            label: 'Zobacz szczegóły',
        },
    },
    pagination: {
        limit: 12,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtruj',
        title: 'Filtruj Produkty',
        description: 'Użyj filtrów, aby znaleźć konkretne produkty',
        submit: 'Zastosuj Filtry',
        reset: 'Resetuj Filtry',
        removeFilters: 'Usuń filtry ({active})',
        close: 'Zamknij filtry',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj według',
                allowMultiple: false,
                options: [
                    { label: 'Nazwa rosnąco', value: 'name_ASC' },
                    { label: 'Nazwa malejąco', value: 'name_DESC' },
                    { label: 'Cena rosnąco', value: 'price_ASC' },
                    { label: 'Cena malejąco', value: 'price_DESC' },
                ],
            },
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
                label: 'Kategoria',
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
        title: 'Nie znaleziono produktów',
        description: 'Nie znaleziono produktów spełniających Twoje kryteria',
    },
    labels: {
        clickToSelect: 'Kliknij, aby wybrać',
        gridView: 'Widok siatki',
        tableView: 'Widok tabeli',
    },
};

export const mapProductListBlock = (locale: string): CMS.Model.ProductListBlock.ProductListBlock => {
    switch (locale) {
        case 'en':
            return MOCK_PRODUCT_LIST_BLOCK_EN;
        case 'de':
            return MOCK_PRODUCT_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_PRODUCT_LIST_BLOCK_PL;
        default:
            return MOCK_PRODUCT_LIST_BLOCK_EN;
    }
};
