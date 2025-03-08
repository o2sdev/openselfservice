import { CMS } from '@o2s/framework/modules';

import { GetNotFoundPageQuery } from '@/generated/strapi';

export const mapNotFoundPage = (data: GetNotFoundPageQuery): CMS.Model.NotFoundPage.NotFoundPage => {
    const notFoundPage = data.notFoundPage!;

    return {
        title: notFoundPage.title,
        description: notFoundPage.description,
        url: notFoundPage.url || notFoundPage.page?.slug,
        urlLabel: notFoundPage.urlLabel,
    };
};
