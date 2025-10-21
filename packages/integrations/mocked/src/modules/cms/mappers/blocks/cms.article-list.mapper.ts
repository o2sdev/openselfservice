import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.ArticleListBlock.ArticleListBlock = {
    id: 'article-list-1',
    title: 'Explore How-To Guides',
    description:
        'Discover step-by-step tutorials and helpful guides to get the most out of your products and solve common issues.',
    categoryId: 'warranty-and-repair',
    articlesToShow: 4,
    parent: {
        slug: '/help-and-support',
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
    categoryId: 'warranty-and-repair',
    articlesToShow: 4,
    parent: {
        slug: '/hilfe-und-support',
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
    categoryId: 'warranty-and-repair',
    articlesToShow: 4,
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        seeAllArticles: 'Zobacz wszystkie artykuły',
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
