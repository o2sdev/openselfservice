import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Articles, CMS } from '../../models';

import { ArticleListBlock } from './article-list.model';

export const mapArticleList = (
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    articles: Articles.Model.Articles,
    locale: string,
): ArticleListBlock => {
    return {
        __typename: 'ArticleListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        categoryLink:
            cms.categorySlug && cms.parent?.slug
                ? {
                      url: `/${cms.parent?.slug}/${cms.categorySlug}`,
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
        createdAt: formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
    };
};
