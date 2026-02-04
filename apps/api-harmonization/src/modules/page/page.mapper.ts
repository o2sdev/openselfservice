import { Articles, CMS } from '@o2s/configs.integrations';

import { Auth } from '@o2s/framework/modules';

import { Breadcrumb, Init, Page } from './page.model';

export const mapPage = (
    page: CMS.Model.Page.Page,
    mainLocale: string,
    alternatePages: CMS.Model.Page.Page[] = [],
): Page => {
    const alternativeUrls: { [key: string]: string } = {
        [mainLocale]: page.slug,
    };

    const locales = [...alternatePages.map(({ locale }) => locale), mainLocale];

    alternatePages.forEach((p) => {
        alternativeUrls[p.locale] = p.slug;
    });

    return {
        meta: {
            seo: {
                title: page.seo.title,
                description: page.seo.description,
                keywords: page.seo.keywords,
                image: page.seo.image,
                noIndex: page.seo.noIndex,
                noFollow: page.seo.noFollow,
            },
            locales,
            theme: page.theme,
        },
        data: {
            alternativeUrls,
            template: page.template,
            hasOwnTitle: page.hasOwnTitle,
            breadcrumbs: mapPageBreadcrumbs(page),
        },
    };
};
export const mapArticle = (
    article: Articles.Model.Article,
    category: Articles.Model.Category,
    mainLocale: string,
    basePath = '/',
): Page => {
    return {
        meta: {
            seo: {
                title: article.title,
                description: article.lead,
                keywords: article.tags,
                image: article.image,
                noIndex: false,
                noFollow: false,
            },
            locales: [mainLocale],
            theme: article.theme,
        },
        data: {
            alternativeUrls: {},
            template: {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: [
                        {
                            __typename: 'ArticleBlock',
                            layout: {
                                variant: 'full',
                                spacing: 'none',
                                background: 'none',
                            },
                            ...article,
                        },
                    ],
                },
            },
            hasOwnTitle: true,
            breadcrumbs: mapArticleBreadcrumbs(article, category, basePath),
        },
    };
};

const mapPageBreadcrumbs = (page: CMS.Model.Page.Page): Breadcrumb[] => {
    const breadcrumbs: Breadcrumb[] = [];

    function extractFromParent(parent: CMS.Model.Page.Page['parent']): void {
        if (!parent) return;

        if (parent.parent) {
            extractFromParent(parent.parent);
        }

        breadcrumbs.push({
            slug: parent.slug,
            label: parent.seo.title,
        });
    }

    extractFromParent(page.parent);

    breadcrumbs.push({
        slug: page.slug,
        label: page.seo?.title,
    });

    return breadcrumbs.filter((breadcrumb) => breadcrumb.slug);
};

const mapArticleBreadcrumbs = (
    article: Articles.Model.Article,
    category: Articles.Model.Category,
    basePath = '/',
): Breadcrumb[] => {
    // Build full URL paths for breadcrumbs
    const categoryUrl = `${basePath}/${category.slug}`;
    const articleUrl = `${categoryUrl}/${article.slug}`;

    return [
        {
            slug: categoryUrl,
            label: category.title,
        },
        {
            slug: articleUrl,
            label: article.title,
        },
    ];
};

export const mapInit = (
    locales: {
        value: string;
        label: string;
    }[],
    header: CMS.Model.Header.Header,
    footer: CMS.Model.Footer.Footer,
    labels: CMS.Model.AppConfig.Labels,
    themes: CMS.Model.AppConfig.Themes,
    userRoles: string[],
): Init => {
    return {
        locales,
        common: {
            header: {
                ...header,
                items: header.items
                    .filter((item) => Auth.Service.hasRole(item.roles, userRoles))
                    .map((item) => {
                        if (item.__typename === 'NavigationGroup') {
                            return {
                                ...item,
                                items: item.items.filter((childItem) =>
                                    Auth.Service.hasRole(childItem.roles, userRoles),
                                ),
                            };
                        }
                        return item;
                    }),
            },
            footer: {
                ...footer,
                items: footer.items
                    .filter((item) => Auth.Service.hasRole(item.roles, userRoles))
                    .map((item) => {
                        if (item.__typename === 'NavigationGroup') {
                            return {
                                ...item,
                                items: item.items.filter((childItem) =>
                                    Auth.Service.hasRole(childItem.roles, userRoles),
                                ),
                            };
                        }
                        return item;
                    }),
            },
        },
        labels,
        themes,
    };
};
