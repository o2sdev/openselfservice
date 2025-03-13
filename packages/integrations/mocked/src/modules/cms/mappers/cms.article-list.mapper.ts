import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_COMPONENT_EN: CMS.Model.ArticleListComponent.ArticleListComponent = {
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
        reset: 'Reset Filters',
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
    noResults: {
        title: 'No articles found',
        description: 'There are no articles matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/articles/:id',
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
};

const MOCK_ARTICLE_LIST_COMPONENT_DE: CMS.Model.ArticleListComponent.ArticleListComponent = {
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
    noResults: {
        title: 'Keine Artikel gefunden',
        description: 'Es gibt keine Artikel, die Ihren Kriterien entsprechen',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    detailsUrl: '/artikel/:id',
    fieldMapping: {
        category: {
            SELF_SERVICE: 'Self Service',
            WARRANTY_REPAIR: 'Garantiereparatur',
            TOOL_MANAGEMENT: 'Werkzeugverwaltung',
            HOW_TO_GUIDES: 'Anleitungen',
            MAINTENANCE_TIPS: 'Wartungstipps',
            GENERAL: 'Allgemein',
            OTHER: 'Sonstiges',
        },
    },
};

const MOCK_ARTICLE_LIST_COMPONENT_PL: CMS.Model.ArticleListComponent.ArticleListComponent = {
    id: 'article-list-1',
    title: 'Przegląd artykułów',
    subtitle: 'Twoje ostatnie artykuły',
    table: {
        columns: [
            { id: 'title', title: 'Tytuł' },
            { id: 'lead', title: 'Wstęp' },
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
    noResults: {
        title: 'Nie znaleziono artykułów',
        description: 'Nie ma artykułów spełniających Twoje kryteria',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    detailsUrl: '/artykuły/:id',
    fieldMapping: {
        category: {
            SELF_SERVICE: 'Self Service',
            WARRANTY_REPAIR: 'Naprawa gwarancyjna',
            TOOL_MANAGEMENT: 'Zarządzanie narzędziami',
            HOW_TO_GUIDES: 'Przewodniki',
            MAINTENANCE_TIPS: 'Porady konserwacyjne',
            GENERAL: 'Ogólne',
            OTHER: 'Inne',
        },
    },
};

export const mapArticleListComponent = (locale: string): CMS.Model.ArticleListComponent.ArticleListComponent => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/articles/{id}`;
            case 'de':
                return `/artikel/{id}`;
            case 'pl':
                return `/artykuły/{id}`;
        }

        return '';
    };

    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_LIST_COMPONENT_DE,
                detailsUrl: getDetailsUrl(),
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_LIST_COMPONENT_PL,
                detailsUrl: getDetailsUrl(),
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_LIST_COMPONENT_EN,
                detailsUrl: getDetailsUrl(),
            };
    }
};
