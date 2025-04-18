import { Articles, CMS } from '../../models';

import { CategoryBlock } from './category.model';

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
        items: {
            ...articles,
            data: articles.data.map((article) => mapArticle(cms, category, article)),
        },
    };
};

export const mapArticle = (
    cms: CMS.Model.CategoryBlock.CategoryBlock,
    category: Articles.Model.Category,
    article: Articles.Model.Article,
): Articles.Model.Article => {
    return {
        ...article,
        slug: `${cms.parent?.slug || ''}${category.slug}${article.slug}`,
    };
};
