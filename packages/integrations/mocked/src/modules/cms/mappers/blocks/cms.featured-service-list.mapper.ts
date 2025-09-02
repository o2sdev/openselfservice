import { CMS } from '@o2s/framework/modules';

const MOCK_FEATURED_SERVICE_LIST_BLOCK_EN: CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock = {
    id: 'featured-service-list-1',
    title: 'Enhance your services with these',
    detailsLabel: 'Details',
    pagination: {
        limit: 3,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    noResults: {
        title: 'No Services Found',
        description: 'There are no services matching your criteria',
    },
    detailsUrl: '/services/{id}',
    labels: {
        on: 'On',
        off: 'Off',
    },
};

const MOCK_FEATURED_SERVICE_LIST_BLOCK_DE: CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock = {
    id: 'featured-service-list-1',
    title: 'Verbessern Sie Ihre Dienste mit diesen',
    detailsLabel: 'Details',
    pagination: {
        limit: 3,
        legend: 'von {totalPages} Seiten',
        prev: 'Vorherige',
        next: 'Nächste',
        selectPage: 'Seite auswählen',
    },
    noResults: {
        title: 'Keine Dienstleistungen gefunden',
        description: 'Es gibt keine Dienstleistungen, die Ihren Kriterien entsprechen',
    },
    detailsUrl: '/dienstleistungen/{id}',
    labels: {
        on: 'An',
        off: 'Aus',
    },
};

const MOCK_FEATURED_SERVICE_LIST_BLOCK_PL: CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock = {
    id: 'featured-service-list-1',
    title: 'Zwiększ swoje usługi dzięki temu',
    detailsLabel: 'Szczegóły',
    pagination: {
        limit: 3,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    noResults: {
        title: 'Nie znaleziono usług',
        description: 'Nie znaleziono usług spełniających Twoje kryteria',
    },
    lsUrl: '/uslugi/{id}',
    labels: {
        on: 'Włącz',
        off: 'Wyłącz',
    },
};

export const mapFeaturedServiceListBlock = (
    locale: string,
): CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock => {
    switch (locale) {
        case 'en':
            return MOCK_FEATURED_SERVICE_LIST_BLOCK_EN;
        case 'de':
            return MOCK_FEATURED_SERVICE_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_FEATURED_SERVICE_LIST_BLOCK_PL;
        default:
            return MOCK_FEATURED_SERVICE_LIST_BLOCK_EN;
    }
};
