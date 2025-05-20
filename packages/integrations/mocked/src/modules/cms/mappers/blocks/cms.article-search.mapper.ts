import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_SEARCH_BLOCK_EN: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Search for topics',
    label: 'What are you searching for?',
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    noResults: {
        title: 'No results found',
        description: 'No results found',
    },
};

const MOCK_ARTICLE_SEARCH_BLOCK_DE: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Entdecke Anleitungen',
    label: 'Was suchen Sie?',
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    noResults: {
        title: 'Keine Ergebnisse gefunden',
        description: 'Keine Ergebnisse gefunden',
    },
};

const MOCK_ARTICLE_SEARCH_BLOCK_PL: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Przeglądaj tematy',
    label: 'Czego szukasz?',
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    noResults: {
        title: 'Nie znaleziono wyników',
        description: 'Nie znaleziono wyników',
    },
};

export const mapArticleSearchBlock = (locale: string): CMS.Model.ArticleSearchBlock.ArticleSearchBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_SEARCH_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_SEARCH_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_SEARCH_BLOCK_EN,
            };
    }
};
