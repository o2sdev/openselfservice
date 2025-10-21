import { Articles, CMS } from '@o2s/configs.integrations';

import { Utils } from '@o2s/utils.api-harmonization';

import { ArticleListBlock } from './article-list.model';

export const mapArticleList = (
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    articles: Articles.Model.Articles,
    category: Articles.Model.Category | undefined,
    locale: string,
): ArticleListBlock => {
    return {
        __typename: 'ArticleListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        categoryLink: category
            ? {
                  url: category.slug,
                  label: cms.labels.seeAllArticles,
              }
            : undefined,
        items: {
            ...articles,
            data: articles.data.map((article) => mapArticle(article, cms, locale)),
        },
    };
};

const mapArticle = (
    article: Omit<Articles.Model.Article, 'sections'>,
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    locale: string,
) => {
    return {
        ...article,
        createdAt: Utils.Date.formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: Utils.Date.formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
    };
};
