import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Articles, CMS } from '../../models';

import { CategoryArticles, CategoryBlock } from './category.model';

export const mapCategory = (
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    category: Articles.Model.Category,
    articles: Articles.Model.Articles,
    _locale: string,
): CategoryBlock => {
    return {
        __typename: 'CategoryBlock',
        id: cms.id,
        title: category.title,
        description: category.description,
        icon: category.icon,
        components: cms.components,
        pagination: cms.pagination,
        articles: {
            title: cms.title,
            description: cms.description,
            items: {
                ...articles,
                data: articles.data.map((article) => mapArticle(article, cms, _locale)),
            },
        },
    };
};

export const mapCategoryArticles = (
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    articles: Articles.Model.Articles,
    _locale: string,
): CategoryArticles => {
    return {
        items: {
            ...articles,
            data: articles.data.map((article) => mapArticle(article, cms, _locale)),
        },
    };
};

const mapArticle = (
    article: Omit<Articles.Model.Article, 'sections'>,
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    _locale: string,
) => {
    return {
        ...article,
        createdAt: formatDateRelative(article.createdAt, _locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(article.updatedAt, _locale, cms.labels.today, cms.labels.yesterday),
    };
};
