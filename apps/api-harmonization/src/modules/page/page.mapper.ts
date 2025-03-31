import { CMS } from '../../models';

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
            breadcrumbs: mapBreadcrumbs(page),
        },
    };
};

const mapBreadcrumbs = (page: CMS.Model.Page.Page): Breadcrumb[] => {
    const breadcrumbs: Breadcrumb[] = [];

    function extractFromParent(parent: CMS.Model.Page.Page['parent'] | undefined): void {
        if (!parent) return;

        if (parent.parent) {
            extractFromParent(parent.parent);
        }

        breadcrumbs.push({
            slug: parent.slug,
            label: parent.seo?.title || parent.slug,
        });
    }

    extractFromParent(page.parent);

    breadcrumbs.push({
        slug: page.slug,
        label: page.seo?.title || page.slug,
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
): Init => {
    return {
        locales,
        common: {
            header,
            footer,
        },
    };
};
