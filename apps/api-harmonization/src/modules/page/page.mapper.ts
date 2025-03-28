import format from 'string-template';

import { TicketDetailsBlock } from '@o2s/api-harmonization/blocks/ticket-details/ticket-details.model';

import { CMS } from '../../models';

import { Breadcrumb, Init, Page } from './page.model';

export const mapPage = (
    page: CMS.Model.Page.Page,
    mainBlock: TicketDetailsBlock | undefined,
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

    let title = page.seo.title;
    let description = page.seo.description;

    switch (mainBlock?.__typename) {
        case 'TicketDetailsBlock':
            title = format(title, {
                topic: mainBlock?.data.topic.label,
            });
            description = format(description, {
                topic: mainBlock?.data.topic.label,
            });
    }

    return {
        meta: {
            seo: {
                title: title,
                description: description,
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
            breadcrumbs: mapBreadcrumbs(page, title),
        },
    };
};

const mapBreadcrumbs = (page: CMS.Model.Page.Page, title: string): Breadcrumb[] => {
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
        label: title,
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
