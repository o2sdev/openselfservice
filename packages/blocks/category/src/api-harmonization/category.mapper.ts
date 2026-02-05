import { Articles, CMS } from '@o2s/configs.integrations';

import { Utils } from '@o2s/utils.api-harmonization';

import { CategoryArticles, CategoryBlock } from './category.model';

export const mapCategory = (
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    category: Articles.Model.Category,
    articles: Articles.Model.Articles,
    _locale: string,
): CategoryBlock => {
    const basePath = cms.parent?.slug ?? '';

    return {
        __typename: 'CategoryBlock',
        id: cms.id,
        title: category.title,
        description: category.description,
        icon: category.icon,
        components: cms.components,
        componentsPosition: cms.componentsPosition,
        pagination: cms.pagination,
        articles: {
            title: cms.title,
            description: cms.description,
            items: {
                ...articles,
                data: articles.data.map((article) => mapArticle(article, cms, _locale, basePath)),
            },
        },
    };
};

export const mapCategoryArticles = (
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    articles: Articles.Model.Articles,
    _locale: string,
): CategoryArticles => {
    const basePath = cms.parent?.slug ?? '';

    return {
        items: {
            ...articles,
            data: articles.data.map((article) => mapArticle(article, cms, _locale, basePath)),
        },
    };
};

const mapArticle = (
    article: Omit<Articles.Model.Article, 'sections'>,
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    _locale: string,
    basePath: string,
) => {
    return {
        ...article,
        slug: `${basePath}/${article.slug}`.replace(/\/+/g, '/'),
        createdAt: Utils.Date.formatDateRelative(article.createdAt, _locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: Utils.Date.formatDateRelative(article.updatedAt, _locale, cms.labels.today, cms.labels.yesterday),
    };
};
