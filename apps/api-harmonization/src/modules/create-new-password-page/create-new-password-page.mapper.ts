import { CMS } from '../../models';

import { CreateNewPasswordPage } from './create-new-password-page.model';

export const mapCreateNewPasswordPage = (
    createNewPasswordPage: CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage,
): CreateNewPasswordPage => {
    const { seo, ...data } = createNewPasswordPage;

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
