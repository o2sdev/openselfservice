import { NotFoundException } from '@nestjs/common';

import { Articles, CMS } from '@o2s/framework/modules';

import { CategoryFragment, GetArticleQuery, PageFragment } from '@/generated/strapi';
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
                sections: component.sections.map((section) => {
                    switch (section.__typename) {
                        case 'ComponentContentArticleSection':
                            return {
                                id: section.id,
                                __typename: 'ArticleSectionText',
                                createdAt: page.updatedAt,
                                updatedAt: page.updatedAt,
                                title: section.title,
                                content: section.content,
                            };
                        // case 'ComponentContentArticleSectionImage':
                        //     return {}
                    }
                }),
            };
    }

    throw new NotFoundException();
};

export const mapArticles = (data: PageFragment[], total: number, baseUrl: string): Articles.Model.Articles => {
    return {
        data: data.map((article) => {
            return {
                id: article.documentId,
                slug: article.slug,
                createdAt: article.updatedAt,
                updatedAt: article.updatedAt,
                title: article.SEO.title,
                lead: article.SEO.description,
                tags: [],
                image: mapMedia(article.SEO.image, baseUrl),
                thumbnail: mapMedia(article.SEO.image, baseUrl),
                category: {
                    id: 'string',
                    title: 'string',
                },
                author: {
                    name: 'Lando Norris',
                    position: 'Content Creator',
                    avatar: 'https://example.com/images/user-001.jpg',
                },
            };
        }),
        total: total,
    };
};
