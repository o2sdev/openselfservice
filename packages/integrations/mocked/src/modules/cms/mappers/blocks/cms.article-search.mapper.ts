import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_SEARCH_BLOCK_EN: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Search for topics',
    inputLabel: 'What are you searching for?',
    parent: {
        slug: '/help-and-support',
    },
    noResults: {
        title: 'No results found',
        description: 'No results found',
    },
};

const MOCK_ARTICLE_SEARCH_BLOCK_DE: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Entdecke Anleitungen',
    inputLabel: 'Was suchen Sie?',
    parent: {
        slug: '/hilfe-und-support',
    },
    noResults: {
        title: 'Keine Ergebnisse gefunden',
        description: 'Keine Ergebnisse gefunden',
    },
};

const MOCK_ARTICLE_SEARCH_BLOCK_PL: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Przeglądaj tematy',
    inputLabel: 'Czego szukasz?',
    parent: {
        slug: '/pomoc-i-wsparcie',
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
        default:
            return {
                ...MOCK_ARTICLE_SEARCH_BLOCK_EN,
            };
    }
};
