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

    alternatePages.forEach(({ page: alternatePage, locale }) => {
        alternativeUrls[locale] = alternatePage.slug;
    });

    return {
        seo: {
            noIndex: page.noIndex,
        },
        common: {
            header,
            footer,
        },
        data: {
            alternativeUrls,
            template: page.template,
        },
    };
};
