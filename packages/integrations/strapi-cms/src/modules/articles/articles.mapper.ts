import { Articles } from '@o2s/framework/modules';

import { mapMedia } from '@/modules/cms/mappers/cms.media.mapper';
import { mapRoles } from '@/modules/cms/mappers/cms.roles.mapper';

import { ArticleFragment, ArticleSimpleFragment, CategoryFragment } from '@/generated/strapi';

export const mapCategory = (data: CategoryFragment): Articles.Model.Category => {
    return {
        id: data.documentId,
        slug: `${data.parent?.slug ? `${data.parent?.slug}/` : ''}${data.slug}`,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        title: data.name,
        description: data.description,
        icon: data.icon,
        parent: data.parent
            ? {
                  slug: data.parent.slug,
                  title: data.parent?.SEO.title,
              }
            : undefined,
    };
};

export const mapCategories = (data: CategoryFragment[], total: number): Articles.Model.Categories => {
    return {
        data: data.map((category) => mapCategory(category)),
        total: total,
    };
};

export const mapArticle = (page: ArticleFragment, baseUrl: string): Articles.Model.Article => {
    return {
        id: page.documentId,
        slug: page.slug,
        permissions: mapRoles(page.permissions),
        createdAt: page.updatedAt,
        updatedAt: page.updatedAt,
        title: page.SEO.title,
        lead: page.SEO.description,
        tags: [],
        image: mapMedia(page.SEO.image, baseUrl),
        thumbnail: mapMedia(page.SEO.image, baseUrl),
        category: page.content.category
            ? {
                  id: page.content.category.slug,
                  title: page.content.category?.name,
              }
            : undefined,
        author: page.content.author
            ? {
                  name: page.content.author.name,
                  position: page.content.author.position,
                  avatar: mapMedia(page.content.author.avatar[0], baseUrl),
              }
            : undefined,
        sections: page.content.sections.map((section) => {
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
            }
        }),
    };
};

export const mapArticles = (data: ArticleSimpleFragment[], total: number, baseUrl: string): Articles.Model.Articles => {
    return {
        data: data.map((article) => {
            return {
                id: article.documentId,
                slug: article.slug,
                permissions: mapRoles(article.permissions),
                createdAt: article.updatedAt,
                updatedAt: article.updatedAt,
                title: article.SEO.title,
                lead: article.SEO.description,
                tags: [],
                image: mapMedia(article.SEO.image, baseUrl),
                thumbnail: mapMedia(article.SEO.image, baseUrl),
                category: article.content?.category
                    ? {
                          id: article.content.category.slug,
                          title: article.content.category?.name,
                      }
                    : undefined,
                author: article.content?.author
                    ? {
                          name: article.content.author.name,
                          position: article.content.author.position,
                          avatar: mapMedia(article.content.author.avatar[0], baseUrl),
                      }
                    : undefined,
            };
        }),
        total: total,
    };
};
