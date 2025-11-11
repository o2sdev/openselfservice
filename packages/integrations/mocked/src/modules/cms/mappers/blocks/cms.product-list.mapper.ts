import { CMS } from '@o2s/framework/modules';

const AVAILABILITY_LABELS_EN: Record<string, string> = {
    IN_STOCK: 'In stock',
    LOW_STOCK: 'Low stock',
    OUT_OF_STOCK: 'Out of stock',
    PREORDER: 'Pre-order',
};

const AVAILABILITY_LABELS_DE: Record<string, string> = {
    IN_STOCK: 'Auf Lager',
    LOW_STOCK: 'Niedriger Bestand',
    OUT_OF_STOCK: 'Nicht verfügbar',
    PREORDER: 'Vorbestellung',
};

const AVAILABILITY_LABELS_PL: Record<string, string> = {
    IN_STOCK: 'Dostępny',
    LOW_STOCK: 'Niski stan',
    OUT_OF_STOCK: 'Brak w magazynie',
    PREORDER: 'Przedsprzedaż',
};

const buildBlock = (
    locale: string,
    overrides: Partial<CMS.Model.ProductListBlock.ProductListBlock> = {},
): CMS.Model.ProductListBlock.ProductListBlock => {
    const availabilityMap =
        locale === 'de' ? AVAILABILITY_LABELS_DE : locale === 'pl' ? AVAILABILITY_LABELS_PL : AVAILABILITY_LABELS_EN;

    const detailsLabel =
        locale === 'de' ? 'Details anzeigen' : locale === 'pl' ? 'Zobacz szczegóły' : 'View details';

    const base: CMS.Model.ProductListBlock.ProductListBlock = {
        id: 'product-list-1',
        title: locale === 'de' ? 'Produkte' : locale === 'pl' ? 'Produkty' : 'Products',
        subtitle:
            locale === 'de'
                ? 'Entdecken Sie unser aktuelles Portfolio'
                : locale === 'pl'
                  ? 'Poznaj aktualną ofertę'
                  : 'Discover our latest catalog',
        description:
            locale === 'de'
                ? 'Filtern Sie Produkte nach Kategorie, Verfügbarkeit oder Preis'
                : locale === 'pl'
                  ? 'Filtruj produkty według kategorii, dostępności lub ceny'
                  : 'Filter products by category, availability, or price',
        filters: {
            label: locale === 'de' ? 'Filter' : locale === 'pl' ? 'Filtry' : 'Filters',
            title:
                locale === 'de'
                    ? 'Filteroptionen'
                    : locale === 'pl'
                      ? 'Opcje filtrowania'
                      : 'Filter options',
            description:
                locale === 'de'
                    ? 'Verwenden Sie Filter, um relevante Produkte zu finden'
                    : locale === 'pl'
                      ? 'Użyj filtrów, aby znaleźć odpowiednie produkty'
                      : 'Use filters to find the products you need',
            submit: locale === 'de' ? 'Anwenden' : locale === 'pl' ? 'Zastosuj' : 'Apply filters',
            reset: locale === 'de' ? 'Zurücksetzen' : locale === 'pl' ? 'Wyczyść' : 'Reset filters',
            removeFilters:
                locale === 'de'
                    ? 'Filter entfernen ({active})'
                    : locale === 'pl'
                      ? 'Usuń filtry ({active})'
                      : 'Remove filters ({active})',
            close: locale === 'de' ? 'Schließen' : locale === 'pl' ? 'Zamknij' : 'Close',
            items: [
                {
                    __typename: 'FilterSelect',
                    id: 'category',
                    label: locale === 'de' ? 'Kategorie' : locale === 'pl' ? 'Kategoria' : 'Category',
                    allowMultiple: false,
                    options: [
                        { label: locale === 'de' ? 'Alle Kategorien' : locale === 'pl' ? 'Wszystkie' : 'All categories', value: '' },
                        { label: locale === 'de' ? 'Werkzeuge' : locale === 'pl' ? 'Narzędzia' : 'Tools', value: 'TOOLS' },
                        { label: locale === 'de' ? 'Messgeräte' : locale === 'pl' ? 'Pomiary' : 'Measurement', value: 'MEASUREMENT' },
                        { label: locale === 'de' ? 'Software' : locale === 'pl' ? 'Oprogramowanie' : 'Software', value: 'SOFTWARE' },
                        { label: locale === 'de' ? 'Wartung' : locale === 'pl' ? 'Konserwacja' : 'Maintenance', value: 'MAINTENANCE' },
                        { label: locale === 'de' ? 'Training' : locale === 'pl' ? 'Szkolenia' : 'Training', value: 'TRAINING' },
                        { label: locale === 'de' ? 'Sicherheit' : locale === 'pl' ? 'Bezpieczeństwo' : 'Safety', value: 'SAFETY' },
                        { label: locale === 'de' ? 'Vermietung' : locale === 'pl' ? 'Wynajem' : 'Rental', value: 'RENTAL' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'priceRange',
                    label: locale === 'de' ? 'Preisspanne' : locale === 'pl' ? 'Przedział cenowy' : 'Price range',
                    allowMultiple: false,
                    options: [
                        { label: locale === 'de' ? 'Alle Preise' : locale === 'pl' ? 'Wszystkie' : 'All prices', value: '' },
                        { label: locale === 'de' ? 'Bis 100' : locale === 'pl' ? 'Do 100' : 'Under 100', value: 'UNDER_100' },
                        { label: locale === 'de' ? '100 bis 250' : locale === 'pl' ? '100 - 250' : '100 - 250', value: 'RANGE_100_250' },
                        { label: locale === 'de' ? '250 bis 500' : locale === 'pl' ? '250 - 500' : '250 - 500', value: 'RANGE_250_500' },
                        { label: locale === 'de' ? 'Über 500' : locale === 'pl' ? 'Powyżej 500' : 'Above 500', value: 'ABOVE_500' },
                    ],
                },
                {
                    __typename: 'FilterToggleGroup',
                    id: 'availability',
                    label: locale === 'de' ? 'Verfügbarkeit' : locale === 'pl' ? 'Dostępność' : 'Availability',
                    allowMultiple: true,
                    isLeading: true,
                    options: [
                        { label: locale === 'de' ? 'Alle' : locale === 'pl' ? 'Wszystkie' : 'All', value: 'ALL' },
                        { label: availabilityMap.IN_STOCK, value: 'IN_STOCK' },
                        { label: availabilityMap.LOW_STOCK, value: 'LOW_STOCK' },
                        { label: availabilityMap.OUT_OF_STOCK, value: 'OUT_OF_STOCK' },
                        { label: availabilityMap.PREORDER, value: 'PREORDER' },
                    ],
                },
                {
                    __typename: 'FilterToggleGroup',
                    id: 'tags',
                    label: locale === 'de' ? 'Markierungen' : locale === 'pl' ? 'Etykiety' : 'Tags',
                    allowMultiple: true,
                    options: [
                        { label: locale === 'de' ? 'Neu' : locale === 'pl' ? 'Nowość' : 'New', value: 'NEW' },
                        { label: locale === 'de' ? 'Aktion' : locale === 'pl' ? 'Promocja' : 'Promo', value: 'PROMO' },
                        { label: locale === 'de' ? 'Highlight' : locale === 'pl' ? 'Wyróżnione' : 'Featured', value: 'FEATURED' },
                        { label: locale === 'de' ? 'Saisonal' : locale === 'pl' ? 'Sezonowe' : 'Seasonal', value: 'SEASONAL' },
                        { label: locale === 'de' ? 'Digital' : locale === 'pl' ? 'Cyfrowe' : 'Digital', value: 'DIGITAL' },
                        { label: locale === 'de' ? 'Bestseller' : locale === 'pl' ? 'Bestseller' : 'Bestseller', value: 'BESTSELLER' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: locale === 'de' ? 'Sortierung' : locale === 'pl' ? 'Sortowanie' : 'Sort by',
                    allowMultiple: false,
                    options: [
                        { label: locale === 'de' ? 'Standard' : locale === 'pl' ? 'Domyślne' : 'Default', value: '' },
                        {
                            label: locale === 'de' ? 'Preis aufsteigend' : locale === 'pl' ? 'Cena rosnąco' : 'Price (low-high)',
                            value: 'price_ASC',
                        },
                        {
                            label: locale === 'de' ? 'Preis absteigend' : locale === 'pl' ? 'Cena malejąco' : 'Price (high-low)',
                            value: 'price_DESC',
                        },
                        {
                            label: locale === 'de' ? 'Name A-Z' : locale === 'pl' ? 'Nazwa A-Z' : 'Name (A-Z)',
                            value: 'name_ASC',
                        },
                        {
                            label: locale === 'de' ? 'Name Z-A' : locale === 'pl' ? 'Nazwa Z-A' : 'Name (Z-A)',
                            value: 'name_DESC',
                        },
                    ],
                },
            ],
        },
        pagination: {
            limit: 9,
            legend:
                locale === 'de'
                    ? 'von {totalPages} Seiten'
                    : locale === 'pl'
                      ? 'z {totalPages} stron'
                      : 'of {totalPages} pages',
            prev: locale === 'de' ? 'Zurück' : locale === 'pl' ? 'Poprzednia' : 'Previous',
            next: locale === 'de' ? 'Weiter' : locale === 'pl' ? 'Następna' : 'Next',
            selectPage: locale === 'de' ? 'Seite wählen' : locale === 'pl' ? 'Wybierz stronę' : 'Select page',
        },
        viewToggle: {
            defaultView: 'grid',
            label: locale === 'de' ? 'Ansicht' : locale === 'pl' ? 'Widok' : 'View',
            gridLabel: locale === 'de' ? 'Kacheln' : locale === 'pl' ? 'Kafelki' : 'Grid',
            tableLabel: locale === 'de' ? 'Tabelle' : locale === 'pl' ? 'Tabela' : 'Table',
            ariaLabel: locale === 'de' ? 'Produktansicht wählen' : locale === 'pl' ? 'Wybierz widok produktów' : 'Choose product view',
        },
        table: {
            columns: [
                { id: 'name', title: locale === 'de' ? 'Produkt' : locale === 'pl' ? 'Produkt' : 'Product' },
                { id: 'category', title: locale === 'de' ? 'Kategorie' : locale === 'pl' ? 'Kategoria' : 'Category' },
                { id: 'price', title: locale === 'de' ? 'Preis' : locale === 'pl' ? 'Cena' : 'Price' },
                { id: 'availability', title: availabilityMap.IN_STOCK },
                { id: 'stock', title: locale === 'de' ? 'Bestand' : locale === 'pl' ? 'Stan' : 'Stock' },
            ],
            actions: {
                title: locale === 'de' ? 'Aktionen' : locale === 'pl' ? 'Akcje' : 'Actions',
                label: detailsLabel,
            },
        },
        grid: {
            detailsLabel,
            availabilityLabel: availabilityMap.IN_STOCK,
            ratingLabel: locale === 'de' ? 'Bewertung' : locale === 'pl' ? 'Ocena' : 'Rating',
            stockLabel: locale === 'de' ? 'Bestand' : locale === 'pl' ? 'Stan' : 'Stock',
        },
        labels: {
            clickToSelect: locale === 'de' ? 'Zum Auswählen klicken' : locale === 'pl' ? 'Kliknij, aby wybrać' : 'Click to select',
            availability: availabilityMap,
            priceRange: locale === 'de' ? 'Preisspanne' : locale === 'pl' ? 'Przedział cenowy' : 'Price range',
            tags: locale === 'de' ? 'Tags' : locale === 'pl' ? 'Etykiety' : 'Tags',
        },
        detailsLabel,
        noResults: {
            title: locale === 'de' ? 'Keine Produkte gefunden' : locale === 'pl' ? 'Brak produktów' : 'No products found',
            description:
                locale === 'de'
                    ? 'Passen Sie die Filter an oder ändern Sie die Suche'
                    : locale === 'pl'
                      ? 'Zmień filtry, aby zobaczyć więcej wyników'
                      : 'Adjust your filters to see different results',
        },
    };

    return {
        ...base,
        ...overrides,
    };
};

export const mapProductListBlock = (locale: string): CMS.Model.ProductListBlock.ProductListBlock => buildBlock(locale);
