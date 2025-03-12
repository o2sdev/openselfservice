import { Articles, CMS } from '@o2s/framework/modules';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Article, ArticleListComponent } from './article-list.model';

export const mapArticleList = (
    articles: Articles.Model.Articles,
    cms: CMS.Model.ArticleListComponent.ArticleListComponent,
    locale: string,
): ArticleListComponent => {
    return {
        __typename: 'ArticleListComponent',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        table: cms.table,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        articles: {
            total: articles.total,
            data: articles.data.map((article: Articles.Model.Article) => mapArticle(article, cms, locale)),
        },
    };
};

const mapArticle = (
    article: Articles.Model.Article,
    cms: CMS.Model.ArticleListComponent.ArticleListComponent,
    locale: string,
): Article => {
    return {
        id: article.id,
        title: article.title,
        createdAt: formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
    };
};
