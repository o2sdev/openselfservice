import { Articles, CMS } from '@o2s/configs.integrations';

import { Auth } from '@o2s/framework/modules';

import { getHasAccess } from '@o2s/api-harmonization/utils/permissions';

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
        },
        data: {
            alternativeUrls: {},
            template: {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: [
                        {
                            __typename: 'ArticleBlock',
                            ...article,
                        },
                    ],
                },
            },
            hasOwnTitle: true,
            breadcrumbs: mapArticleBreadcrumbs(article, category),
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

const mapArticleBreadcrumbs = (article: Articles.Model.Article, category: Articles.Model.Category): Breadcrumb[] => {
    const breadcrumbs: Breadcrumb[] = [];

    function extractFromParent(parent: Articles.Model.Category['parent']): void {
        if (!parent) return;

        if (parent.parent) {
            extractFromParent(parent.parent);
        }

        breadcrumbs.push({
            slug: parent.slug,
            label: parent.title,
        });
    }

    extractFromParent(category);

    breadcrumbs.push({
        slug: article.slug,
        label: article.title,
    });

    return breadcrumbs.filter((breadcrumb) => breadcrumb.slug);
};

export const mapInit = (
    locales: {
        value: string;
        label: string;
    }[],
    header: CMS.Model.Header.Header,
    footer: CMS.Model.Footer.Footer,
    labels: CMS.Model.AppConfig.Labels,
    roles: Auth.Constants.Roles[],
): Init => {
    return {
        locales,
        common: {
            header: {
                ...header,
                items: header.items
                    .filter((item) => getHasAccess(item.permissions, roles))
                    .map((item) => {
                        if (item.__typename === 'NavigationGroup') {
                            return {
                                ...item,
                                items: item.items.filter((childItem) => getHasAccess(childItem.permissions, roles)),
                            };
                        }
                        return item;
                    }),
            },
            footer: {
                ...footer,
                items: footer.items
                    .filter((item) => getHasAccess(item.permissions, roles))
                    .map((item) => {
                        if (item.__typename === 'NavigationGroup') {
                            return {
                                ...item,
                                items: item.items.filter((childItem) => getHasAccess(childItem.permissions, roles)),
                            };
                        }
                        return item;
                    }),
            },
        },
        labels,
    };
};
