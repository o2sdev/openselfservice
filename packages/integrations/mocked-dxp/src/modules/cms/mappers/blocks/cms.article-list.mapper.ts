import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Explore How-To Guides',
    description:
        'Discover step-by-step tutorials and helpful guides to get the most out of your products and solve common issues.',
    categoryId: 'finance-and-savings-personal',
    articlesToShow: 4,
    parent: {
        slug: '/personal/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        seeAllArticles: 'See all articles',
    },
};

const MOCK_ARTICLE_LIST_BLOCK_DE: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Entdecke Anleitungen',
    description:
        'Entdecken Sie Schritt-für-Schritt-Anleitungen und hilfreiche Ratgeber, um das Beste aus Ihren Produkten herauszuholen und häufige Probleme zu lösen.',
    categoryId: 'finance-and-savings-personal',
    articlesToShow: 4,
    parent: {
        slug: '/personlich/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        seeAllArticles: 'Alle Artikel anzeigen',
    },
};

const MOCK_ARTICLE_LIST_BLOCK_PL: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Przeglądaj poradniki',
    description:
        'Odkryj szczegółowe instrukcje i pomocne poradniki, aby w pełni wykorzystać możliwości swoich produktów i rozwiązać typowe problemy.',
    categoryId: 'finance-and-savings-personal',
    articlesToShow: 4,
    parent: {
        slug: '/indywidualny/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        seeAllArticles: 'Zobacz wszystkie artykuły',
    },
};
const MOCK_ARTICLE_LIST_BUSINESS_BLOCK_EN: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-2',
    title: 'Explore How-To Guides',
    description:
        'Discover step-by-step tutorials and helpful guides to get the most out of your products and solve common issues.',
    categoryId: 'finance-and-savings-business',
    articlesToShow: 4,
    parent: {
        slug: '/business/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        seeAllArticles: 'See all articles',
    },
};

const MOCK_ARTICLE_LIST_BUSINESS_BLOCK_DE: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-2',
    title: 'Entdecke Anleitungen',
    description:
        'Entdecken Sie Schritt-für-Schritt-Anleitungen und hilfreiche Ratgeber, um das Beste aus Ihren Produkten herauszuholen und häufige Probleme zu lösen.',
    categoryId: 'finance-and-savings-business',
    articlesToShow: 4,
    parent: {
        slug: '/geschaftlich/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        seeAllArticles: 'Alle Artikel anzeigen',
    },
};

const MOCK_ARTICLE_LIST_BUSINESS_BLOCK_PL: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-2',
    title: 'Przeglądaj poradniki',
    description:
        'Odkryj szczegółowe instrukcje i pomocne poradniki, aby w pełni wykorzystać możliwości swoich produktów i rozwiązać typowe problemy.',
    categoryId: 'finance-and-savings-business',
    articlesToShow: 4,
    parent: {
        slug: '/firma/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        seeAllArticles: 'Zobacz wszystkie artykuły',
    },
};

const BLOCKS_EN = [MOCK_ARTICLE_LIST_BLOCK_EN, MOCK_ARTICLE_LIST_BUSINESS_BLOCK_EN];
const BLOCKS_PL = [MOCK_ARTICLE_LIST_BLOCK_PL, MOCK_ARTICLE_LIST_BUSINESS_BLOCK_PL];
const BLOCKS_DE = [MOCK_ARTICLE_LIST_BLOCK_DE, MOCK_ARTICLE_LIST_BUSINESS_BLOCK_DE];

export const mapArticleListBlock = (id: string, locale: string): CMS.Model.ArticleListBlock.ArticleListBlock => {
    let block: CMS.Model.ArticleListBlock.ArticleListBlock | undefined;

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
