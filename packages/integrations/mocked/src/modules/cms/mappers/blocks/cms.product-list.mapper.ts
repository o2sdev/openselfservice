import { CMS } from '@o2s/framework/modules';

const MOCK_PRODUCT_LIST_BLOCK_EN: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Products in Catalog',
    subtitle: 'Browse our product catalog',
    detailsLabel: 'View Details',
    fieldMapping: {
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
                isLeading: true,
                options: [
                    { label: 'Name ascending', value: 'name_ASC' },
                    { label: 'Name descending', value: 'name_DESC' },
                    { label: 'Price ascending', value: 'price_ASC' },
                    { label: 'Price descending', value: 'price_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Category',
                allowMultiple: true,
                isLeading: true,
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
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'grid',
                isLeading: true,
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
        listView: 'List view',
        showMoreFilters: 'Show more filters',
        hideMoreFilters: 'Hide more filters',
        noActiveFilters: 'No active filters',
    },
};

const MOCK_PRODUCT_LIST_BLOCK_DE: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Produkte im Katalog',
    subtitle: 'Durchsuchen Sie unseren Produktkatalog',
    detailsLabel: 'Details anzeigen',
    fieldMapping: {
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
                isLeading: true,
                options: [
                    { label: 'Name aufsteigend', value: 'name_ASC' },
                    { label: 'Name absteigend', value: 'name_DESC' },
                    { label: 'Preis aufsteigend', value: 'price_ASC' },
                    { label: 'Preis absteigend', value: 'price_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Kategorie',
                allowMultiple: true,
                isLeading: true,
                options: [
                    { label: 'Software', value: 'SOFTWARE' },
                    { label: 'Werkzeuge', value: 'TOOLS' },
                    { label: 'Hardware', value: 'HARDWARE' },
                    { label: 'Messung', value: 'MEASUREMENT' },
                    { label: 'Cloud', value: 'CLOUD' },
                    { label: 'Support', value: 'SUPPORT' },
                    { label: 'Abonnement', value: 'SUBSCRIPTION' },
                    { label: 'Garantie', value: 'WARRANTY' },
                    { label: 'Wartung', value: 'MAINTENANCE' },
                    { label: 'Training', value: 'TRAINING' },
                ],
            },
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'grid',
                isLeading: true,
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
        listView: 'Listenansicht',
        showMoreFilters: 'Mehr Filter anzeigen',
        hideMoreFilters: 'Mehr Filter ausblenden',
        noActiveFilters: 'Keine aktiven Filter',
    },
};

const MOCK_PRODUCT_LIST_BLOCK_PL: CMS.Model.ProductListBlock.ProductListBlock = {
    id: 'product-list-1',
    title: 'Katalog produktów',
    subtitle: 'Przeglądaj nasz katalog produktów',
    detailsLabel: 'Zobacz szczegóły',
    fieldMapping: {
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
                isLeading: true,
                options: [
                    { label: 'Nazwa rosnąco', value: 'name_ASC' },
                    { label: 'Nazwa malejąco', value: 'name_DESC' },
                    { label: 'Cena rosnąco', value: 'price_ASC' },
                    { label: 'Cena malejąco', value: 'price_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Kategoria',
                allowMultiple: true,
                isLeading: true,
                options: [
                    { label: 'Oprogramowanie', value: 'SOFTWARE' },
                    { label: 'Narzędzia', value: 'TOOLS' },
                    { label: 'Sprzęt', value: 'HARDWARE' },
                    { label: 'Pomiar', value: 'MEASUREMENT' },
                    { label: 'Chmura', value: 'CLOUD' },
                    { label: 'Wsparcie', value: 'SUPPORT' },
                    { label: 'Subskrypcja', value: 'SUBSCRIPTION' },
                    { label: 'Gwarancja', value: 'WARRANTY' },
                    { label: 'Konserwacja', value: 'MAINTENANCE' },
                    { label: 'Szkolenie', value: 'TRAINING' },
                ],
            },
            {
                __typename: 'FilterViewModeToggle',
                id: 'viewMode',
                value: 'grid',
                isLeading: true,
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
        listView: 'Widok listy',
        showMoreFilters: 'Pokaż więcej filtrów',
        hideMoreFilters: 'Ukryj więcej filtrów',
        noActiveFilters: 'Brak aktywnych filtrów',
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
