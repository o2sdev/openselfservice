import { CMS } from '@o2s/framework/modules';

type LocaleAvailabilityMap = Record<string, string>;

const AVAILABILITY: Record<string, LocaleAvailabilityMap> = {
    en: {
        IN_STOCK: 'In stock',
        LOW_STOCK: 'Low stock',
        OUT_OF_STOCK: 'Out of stock',
        PREORDER: 'Pre-order',
    },
    de: {
        IN_STOCK: 'Auf Lager',
        LOW_STOCK: 'Niedriger Bestand',
        OUT_OF_STOCK: 'Nicht verfügbar',
        PREORDER: 'Vorbestellung',
    },
    pl: {
        IN_STOCK: 'Dostępny',
        LOW_STOCK: 'Niski stan',
        OUT_OF_STOCK: 'Brak w magazynie',
        PREORDER: 'Przedsprzedaż',
    },
};

const resolveLocale = (locale: string) => (locale === 'de' || locale === 'pl' ? locale : 'en');

export const mapProductListBlock = (
    _component: unknown,
    locale: string,
): CMS.Model.ProductListBlock.ProductListBlock => {
    const resolvedLocale = resolveLocale(locale);
    const availabilityMap = AVAILABILITY[resolvedLocale];

    const t = (translations: { en: string; de: string; pl: string }) => translations[resolvedLocale];

    return {
        id: 'product-list-1',
        title: t({ en: 'Products', de: 'Produkte', pl: 'Produkty' }),
        subtitle: t({ en: 'Discover our latest catalog', de: 'Entdecken Sie unser aktuelles Portfolio', pl: 'Poznaj aktualną ofertę' }),
        description: t({
            en: 'Filter products by category, availability, or price',
            de: 'Filtern Sie Produkte nach Kategorie, Verfügbarkeit oder Preis',
            pl: 'Filtruj produkty według kategorii, dostępności lub ceny',
        }),
        filters: {
            label: t({ en: 'Filters', de: 'Filter', pl: 'Filtry' }),
            title: t({ en: 'Filter options', de: 'Filteroptionen', pl: 'Opcje filtrowania' }),
            description: t({
                en: 'Use filters to find the products you need',
                de: 'Verwenden Sie Filter, um relevante Produkte zu finden',
                pl: 'Użyj filtrów, aby znaleźć odpowiednie produkty',
            }),
            submit: t({ en: 'Apply filters', de: 'Anwenden', pl: 'Zastosuj' }),
            reset: t({ en: 'Reset filters', de: 'Zurücksetzen', pl: 'Wyczyść' }),
            removeFilters: t({
                en: 'Remove filters ({active})',
                de: 'Filter entfernen ({active})',
                pl: 'Usuń filtry ({active})',
            }),
            close: t({ en: 'Close', de: 'Schließen', pl: 'Zamknij' }),
            items: [
                {
                    __typename: 'FilterSelect',
                    id: 'category',
                    label: t({ en: 'Category', de: 'Kategorie', pl: 'Kategoria' }),
                    allowMultiple: false,
                    options: [
                        { label: t({ en: 'All categories', de: 'Alle Kategorien', pl: 'Wszystkie' }), value: '' },
                        { label: t({ en: 'Tools', de: 'Werkzeuge', pl: 'Narzędzia' }), value: 'TOOLS' },
                        { label: t({ en: 'Measurement', de: 'Messgeräte', pl: 'Pomiary' }), value: 'MEASUREMENT' },
                        { label: t({ en: 'Software', de: 'Software', pl: 'Oprogramowanie' }), value: 'SOFTWARE' },
                        { label: t({ en: 'Maintenance', de: 'Wartung', pl: 'Konserwacja' }), value: 'MAINTENANCE' },
                        { label: t({ en: 'Training', de: 'Training', pl: 'Szkolenia' }), value: 'TRAINING' },
                        { label: t({ en: 'Safety', de: 'Sicherheit', pl: 'Bezpieczeństwo' }), value: 'SAFETY' },
                        { label: t({ en: 'Rental', de: 'Vermietung', pl: 'Wynajem' }), value: 'RENTAL' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'priceRange',
                    label: t({ en: 'Price range', de: 'Preisspanne', pl: 'Przedział cenowy' }),
                    allowMultiple: false,
                    options: [
                        { label: t({ en: 'All prices', de: 'Alle Preise', pl: 'Wszystkie' }), value: '' },
                        { label: t({ en: 'Under 100', de: 'Bis 100', pl: 'Do 100' }), value: 'UNDER_100' },
                        { label: t({ en: '100 - 250', de: '100 bis 250', pl: '100 - 250' }), value: 'RANGE_100_250' },
                        { label: t({ en: '250 - 500', de: '250 bis 500', pl: '250 - 500' }), value: 'RANGE_250_500' },
                        { label: t({ en: 'Above 500', de: 'Über 500', pl: 'Powyżej 500' }), value: 'ABOVE_500' },
                    ],
                },
                {
                    __typename: 'FilterToggleGroup',
                    id: 'availability',
                    label: t({ en: 'Availability', de: 'Verfügbarkeit', pl: 'Dostępność' }),
                    allowMultiple: true,
                    isLeading: true,
                    options: [
                        { label: t({ en: 'All', de: 'Alle', pl: 'Wszystkie' }), value: 'ALL' },
                        { label: availabilityMap.IN_STOCK, value: 'IN_STOCK' },
                        { label: availabilityMap.LOW_STOCK, value: 'LOW_STOCK' },
                        { label: availabilityMap.OUT_OF_STOCK, value: 'OUT_OF_STOCK' },
                        { label: availabilityMap.PREORDER, value: 'PREORDER' },
                    ],
                },
                {
                    __typename: 'FilterToggleGroup',
                    id: 'tags',
                    label: t({ en: 'Tags', de: 'Markierungen', pl: 'Etykiety' }),
                    allowMultiple: true,
                    options: [
                        { label: t({ en: 'New', de: 'Neu', pl: 'Nowość' }), value: 'NEW' },
                        { label: t({ en: 'Promo', de: 'Aktion', pl: 'Promocja' }), value: 'PROMO' },
                        { label: t({ en: 'Featured', de: 'Highlight', pl: 'Wyróżnione' }), value: 'FEATURED' },
                        { label: t({ en: 'Seasonal', de: 'Saisonal', pl: 'Sezonowe' }), value: 'SEASONAL' },
                        { label: t({ en: 'Digital', de: 'Digital', pl: 'Cyfrowe' }), value: 'DIGITAL' },
                        { label: t({ en: 'Bestseller', de: 'Bestseller', pl: 'Bestseller' }), value: 'BESTSELLER' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: t({ en: 'Sort by', de: 'Sortierung', pl: 'Sortowanie' }),
                    allowMultiple: false,
                    options: [
                        { label: t({ en: 'Default', de: 'Standard', pl: 'Domyślne' }), value: '' },
                        { label: t({ en: 'Price (low-high)', de: 'Preis aufsteigend', pl: 'Cena rosnąco' }), value: 'price_ASC' },
                        { label: t({ en: 'Price (high-low)', de: 'Preis absteigend', pl: 'Cena malejąco' }), value: 'price_DESC' },
                        { label: t({ en: 'Name (A-Z)', de: 'Name A-Z', pl: 'Nazwa A-Z' }), value: 'name_ASC' },
                        { label: t({ en: 'Name (Z-A)', de: 'Name Z-A', pl: 'Nazwa Z-A' }), value: 'name_DESC' },
                    ],
                },
            ],
        },
        pagination: {
            limit: 9,
            legend: t({ en: 'of {totalPages} pages', de: 'von {totalPages} Seiten', pl: 'z {totalPages} stron' }),
            prev: t({ en: 'Previous', de: 'Zurück', pl: 'Poprzednia' }),
            next: t({ en: 'Next', de: 'Weiter', pl: 'Następna' }),
            selectPage: t({ en: 'Select page', de: 'Seite wählen', pl: 'Wybierz stronę' }),
        },
        viewToggle: {
            defaultView: 'grid',
            label: t({ en: 'View', de: 'Ansicht', pl: 'Widok' }),
            gridLabel: t({ en: 'Grid', de: 'Kacheln', pl: 'Kafelki' }),
            tableLabel: t({ en: 'Table', de: 'Tabelle', pl: 'Tabela' }),
            ariaLabel: t({ en: 'Choose product view', de: 'Produktansicht wählen', pl: 'Wybierz widok produktów' }),
        },
        table: {
            columns: [
                { id: 'name', title: t({ en: 'Product', de: 'Produkt', pl: 'Produkt' }) },
                { id: 'category', title: t({ en: 'Category', de: 'Kategorie', pl: 'Kategoria' }) },
                { id: 'price', title: t({ en: 'Price', de: 'Preis', pl: 'Cena' }) },
                { id: 'availability', title: availabilityMap.IN_STOCK },
                { id: 'stock', title: t({ en: 'Stock', de: 'Bestand', pl: 'Stan' }) },
            ],
            actions: {
                title: t({ en: 'Actions', de: 'Aktionen', pl: 'Akcje' }),
                label: detailsLabel,
            },
        },
        grid: {
            detailsLabel,
            availabilityLabel: availabilityMap.IN_STOCK,
            ratingLabel: t({ en: 'Rating', de: 'Bewertung', pl: 'Ocena' }),
            stockLabel: t({ en: 'Stock', de: 'Bestand', pl: 'Stan' }),
        },
        labels: {
            clickToSelect: t({ en: 'Click to select', de: 'Zum Auswählen klicken', pl: 'Kliknij, aby wybrać' }),
            availability: availabilityMap,
            priceRange: t({ en: 'Price range', de: 'Preisspanne', pl: 'Przedział cenowy' }),
            tags: t({ en: 'Tags', de: 'Tags', pl: 'Etykiety' }),
        },
        detailsLabel,
        noResults: {
            title: t({ en: 'No products found', de: 'Keine Produkte gefunden', pl: 'Brak produktów' }),
            description: t({
                en: 'Adjust your filters to see different results',
                de: 'Passen Sie die Filter an oder ändern Sie die Suche',
                pl: 'Zmień filtry, aby zobaczyć więcej wyników',
            }),
        },
    };
};
