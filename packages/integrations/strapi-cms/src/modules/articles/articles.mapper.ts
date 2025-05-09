import { NotFoundException } from '@nestjs/common';

import { Articles, CMS } from '@o2s/framework/modules';

import { MOCK_ARTICLES_DE, MOCK_ARTICLES_EN, MOCK_ARTICLES_PL } from './mocks';
import { CategoryFragment, GetArticleQuery } from '@/generated/strapi';
import { mapMedia } from '@/modules/cms/mappers/cms.media.mapper';

export const mapCategory = (data: CategoryFragment, baseUrl: string): Articles.Model.Category => {
    return {
        id: data.documentId,
        slug: `${data.parent?.slug ? `${data.parent?.slug}/` : ''}${data.slug}`,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        title: data.name,
        description: data.description,
        icon: mapMedia(data.icon, baseUrl),
        parent: data.parent
            ? {
                  slug: data.parent.slug,
                  title: data.parent?.SEO.title,
              }
            : undefined,
    };
};

export const mapCategories = (data: CategoryFragment[], total: number, baseUrl: string): Articles.Model.Categories => {
    return {
        data: data.map((category) => mapCategory(category, baseUrl)),
        total: total,
    };
};

export const mapArticle = (
    page: CMS.Model.Page.Page,
    article: GetArticleQuery,
    baseUrl: string,
): Articles.Model.Article => {
    const component = article.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsArticle':
            return {
                id: page.id,
                slug: page.slug,
                createdAt: page.updatedAt,
                updatedAt: page.updatedAt,
                title: page.seo.title,
                lead: page.seo.description,
                tags: [],
                image: page.seo.image,
                thumbnail: page.seo.image,
                category: {
                    id: 'string',
                    title: 'string',
                },
                author: {
                    name: 'Lando Norris',
                    position: 'Content Creator',
                    avatar: 'https://example.com/images/user-001.jpg',
                },
                sections: [],
            };
    }

    throw new NotFoundException();
};

export const mapArticles = (locale: string, options: Articles.Request.GetArticleListQuery): Articles.Model.Articles => {
    const { offset = 0, limit = 10 } = options;
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;
    const filteredArticles = articles.filter((article) => {
        if (options.dateFrom && new Date(article.createdAt) < new Date(options.dateFrom)) {
            return false;
        }
        if (options.dateTo && new Date(article.createdAt) > new Date(options.dateTo)) {
            return false;
        }
        return true;
    });

    return {
        data: filteredArticles.slice(offset, offset + limit),
        total: filteredArticles.length,
    };
};
