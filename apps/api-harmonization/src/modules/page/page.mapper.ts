import { CMS } from '../../models';

import { Page } from './page.model';

export const mapPage = (
    header: CMS.Model.Header.Header,
    footer: CMS.Model.Footer.Footer,
    page: CMS.Model.Page.Page,
    mainLocale: string,
    alternatePages: { page: CMS.Model.Page.Page; locale: string }[] = [],
): Page => {
    const alternativeUrls: { [key: string]: string } = {
        [mainLocale]: page.slug,
    };

    const locales = [...alternatePages.map(({ locale }) => locale), mainLocale];

    alternatePages.forEach(({ page: alternatePage, locale }) => {
        alternativeUrls[locale] = alternatePage.slug;
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
            parent: page.parent,
            locales,
        },
        common: {
            header,
            footer,
        },
        data: {
            alternativeUrls,
            template: page.template,
            hasOwnTitle: page.hasOwnTitle,
        },
    };
};
