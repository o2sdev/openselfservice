import { Articles, CMS } from '@o2s/framework/modules';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Article, ArticleListBlock } from './article-list.model';

export const mapArticleList = (
    articles: Articles.Model.Articles,
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    locale: string,
    timezone: string,
): ArticleListBlock => {
    return {
        __typename: 'ArticleListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        table: cms.table,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        articles: {
            total: articles.total,
            data: articles.data.map((article: Articles.Model.Article) => mapArticle(article, cms, locale, timezone)),
        },
    };
};

const mapArticle = (
    article: Articles.Model.Article,
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    locale: string,
    timezone: string,
): Article => {
    return {
        id: article.id,
        title: article.title,
        createdAt: formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
        updatedAt: formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
        category: {
            label: cms.fieldMapping.category?.[article.category] || article.category,
            value: article.category,
        },
    };
};
