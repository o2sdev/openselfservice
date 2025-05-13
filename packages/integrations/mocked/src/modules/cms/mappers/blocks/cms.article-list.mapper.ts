import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Explore How-To Guides',
    description: 'A short description of the heading H2',
    categoryId: 'warranty-and-repair',
    parent: {
        slug: '/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

const MOCK_ARTICLE_LIST_BLOCK_DE: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Entdecke Anleitungen',
    description: 'Eine kurze Beschreibung der H2-Überschrift',
    categoryId: 'warranty-and-repair',
    parent: {
        slug: '/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
};

const MOCK_ARTICLE_LIST_BLOCK_PL: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Przeglądaj poradniki',
    description: 'Krótki opis nagłówka H2',
    categoryId: 'warranty-and-repair',
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
};

export const mapArticleListBlock = (locale: string): CMS.Model.ArticleListBlock.ArticleListBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_EN,
            };
    }
};
