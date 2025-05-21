import { CMS } from '../../models';

import { CreateAccountPage } from './create-account-page.model';

export const mapCreateAccountPage = (
    createAccountPage: CMS.Model.CreateAccountPage.CreateAccountPage,
): CreateAccountPage => {
    const { seo, ...data } = createAccountPage;

    return {
        data,
        seo: {
            title: seo.title,
            description: seo.description,
            image: seo.image,
            keywords: seo.keywords,
            noIndex: seo.noIndex,
            noFollow: seo.noFollow,
        },
    };
};
