import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Articles Overview',
    subtitle: 'Your recent articles',
    table: {
        columns: [
            { id: 'title', title: 'Title' },
            { id: 'lead', title: 'Lead' },
            { id: 'createdAt', title: 'Date Created' },
            { id: 'updatedAt', title: 'Date Updated' },
        ],
        actions: {
            title: 'Actions',
            label: 'View details',
        },
    },
    pagination: {
        limit: 5,
        legend: 'Showing {from}-{to} of {total} articles',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter',
        title: 'Filter articles',
        description: 'Use filters to find specific articles',
        submit: 'Apply filters',
        reset: 'Reset filters',
        close: 'Close filters',
        items: [
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Date Created',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    fieldMapping: {
        category: {
            SELF_SERVICE: 'Self Service',
            WARRANTY_REPAIR: 'Warranty Repair',
            TOOL_MANAGEMENT: 'Tool Management',
            HOW_TO_GUIDES: 'How To Guides',
            MAINTENANCE_TIPS: 'Maintenance Tips',
            GENERAL: 'General',
            OTHER: 'Other',
        },
    },
    noResults: {
        title: 'No articles found',
        description: 'There are no articles matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/articles/:id',
};

const MOCK_ARTICLE_LIST_BLOCK_DE: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Artikelübersicht',
    subtitle: 'Ihre neuesten Artikel',
    table: {
        columns: [
            { id: 'title', title: 'Titel' },
            { id: 'lead', title: 'Einleitung' },
            { id: 'createdAt', title: 'Erstellungsdatum' },
            { id: 'updatedAt', title: 'Aktualisierungsdatum' },
        ],
        actions: {
            title: 'Aktionen',
            label: 'Details anzeigen',
        },
    },
    pagination: {
        limit: 5,
        legend: 'Zeige {from}-{to} von {total} Artikeln',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filter',
        title: 'Artikel filtern',
        description: 'Verwenden Sie Filter, um bestimmte Artikel zu finden',
        submit: 'Filter anwenden',
        reset: 'Filter zurücksetzen',
        close: 'Filter schließen',
        items: [
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Erstellungsdatum',
                from: {
                    label: 'Von',
                },
                to: {
                    label: 'Bis',
                },
            },
        ],
    },
    fieldMapping: {
        category: {
            SELF_SERVICE: 'Selbstbedienung',
            WARRANTY_REPAIR: 'Garantiereparatur',
            TOOL_MANAGEMENT: 'Werkzeugverwaltung',
            HOW_TO_GUIDES: 'Anleitungen',
            MAINTENANCE_TIPS: 'Wartungstipps',
            GENERAL: 'Allgemein',
            OTHER: 'Sonstiges',
        },
    },
    noResults: {
        title: 'Keine Artikel gefunden',
        description: 'Es wurden keine Artikel gefunden, die Ihren Kriterien entsprechen',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    detailsUrl: '/artikel/:id',
};

const MOCK_ARTICLE_LIST_BLOCK_PL: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Przegląd artykułów',
    subtitle: 'Twoje ostatnie artykuły',
    table: {
        columns: [
            { id: 'title', title: 'Tytuł' },
            { id: 'lead', title: 'Wprowadzenie' },
            { id: 'createdAt', title: 'Data utworzenia' },
            { id: 'updatedAt', title: 'Data aktualizacji' },
        ],
        actions: {
            title: 'Akcje',
            label: 'Zobacz szczegóły',
        },
    },
    pagination: {
        limit: 5,
        legend: 'Wyświetlanie {from}-{to} z {total} artykułów',
        prev: 'Poprzedni',
        next: 'Następny',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtr',
        title: 'Filtruj artykuły',
        description: 'Użyj filtrów, aby znaleźć konkretne artykuły',
        submit: 'Zastosuj filtry',
        reset: 'Resetuj filtry',
        close: 'Zamknij filtry',
        items: [
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Data utworzenia',
                from: {
                    label: 'Od',
                },
                to: {
                    label: 'Do',
                },
            },
        ],
    },
    fieldMapping: {
        category: {
            SELF_SERVICE: 'Samoobsługa',
            WARRANTY_REPAIR: 'Naprawa gwarancyjna',
            TOOL_MANAGEMENT: 'Zarządzanie narzędziami',
            HOW_TO_GUIDES: 'Poradniki',
            MAINTENANCE_TIPS: 'Wskazówki konserwacyjne',
            GENERAL: 'Ogólne',
            OTHER: 'Inne',
        },
    },
    noResults: {
        title: 'Nie znaleziono artykułów',
        description: 'Nie ma artykułów spełniających Twoje kryteria',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    detailsUrl: '/artykuły/:id',
};

export const mapArticleListBlock = (locale: string): CMS.Model.ArticleListBlock.ArticleListBlock => {
    switch (locale) {
        case 'de':
            return MOCK_ARTICLE_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_ARTICLE_LIST_BLOCK_PL;
        default:
            return MOCK_ARTICLE_LIST_BLOCK_EN;
    }
};
