import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_EN: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Search for topics',
    inputLabel: 'What are you searching for?',
    category: 'finance-and-savings-personal',
    noResults: {
        title: 'No results found',
        description: 'No results found',
    },
};

const MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_DE: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Entdecke Anleitungen',
    inputLabel: 'Was suchen Sie?',
    category: 'finance-and-savings-personal',
    noResults: {
        title: 'Keine Ergebnisse gefunden',
        description: 'Keine Ergebnisse gefunden',
    },
};

const MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_PL: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-1',
    title: 'Przeglądaj tematy',
    inputLabel: 'Czego szukasz?',
    category: 'finance-and-savings-personal',
    noResults: {
        title: 'Nie znaleziono wyników',
        description: 'Nie znaleziono wyników',
    },
};

const MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_EN: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-2',
    title: 'Search for topics',
    inputLabel: 'What are you searching for?',
    category: 'finance-and-savings-business',
    noResults: {
        title: 'No results found',
        description: 'No results found',
    },
};

const MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_DE: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-2',
    title: 'Entdecke Anleitungen',
    inputLabel: 'Was suchen Sie?',
    category: 'finance-and-savings-business',
    noResults: {
        title: 'Keine Ergebnisse gefunden',
        description: 'Keine Ergebnisse gefunden',
    },
};

const MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_PL: CMS.Model.ArticleSearchBlock.ArticleSearchBlock = {
    id: 'article-search-2',
    title: 'Przeglądaj tematy',
    inputLabel: 'Czego szukasz?',
    category: 'finance-and-savings-business',
    noResults: {
        title: 'Nie znaleziono wyników',
        description: 'Nie znaleziono wyników',
    },
};

const BLOCKS_EN = [MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_EN, MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_EN];
const BLOCKS_PL = [MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_PL, MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_PL];
const BLOCKS_DE = [MOCK_ARTICLE_SEARCH_PERSONAL_BLOCK_DE, MOCK_ARTICLE_SEARCH_BUSINESS_BLOCK_DE];

export const mapArticleSearchBlock = (id: string, locale: string): CMS.Model.ArticleSearchBlock.ArticleSearchBlock => {
    let block: CMS.Model.ArticleSearchBlock.ArticleSearchBlock | undefined;

    switch (locale) {
        case 'de':
            block = BLOCKS_DE.find((b) => b.id === id);
            break;
        case 'pl':
            block = BLOCKS_PL.find((b) => b.id === id);
            break;
        case 'en':
        default:
            block = BLOCKS_EN.find((b) => b.id === id);
    }

    if (!block) throw new NotFoundException();

    return block;
};
