import { CMS } from '@o2s/configs.integrations';

import { NotFoundPage } from './not-found-page.model';

export const mapNotFoundPage = (notFoundPage: CMS.Model.NotFoundPage.NotFoundPage): NotFoundPage => {
    return {
        title: notFoundPage.title,
        description: notFoundPage.description,
        urlLabel: notFoundPage.urlLabel,
        url: notFoundPage.url,
    };
};
