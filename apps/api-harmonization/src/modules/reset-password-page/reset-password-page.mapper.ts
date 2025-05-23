import { CMS } from '../../models';

import { ResetPasswordPage } from './reset-password-page.model';

export const mapResetPasswordPage = (
    resetPasswordPage: CMS.Model.ResetPasswordPage.ResetPasswordPage,
): ResetPasswordPage => {
    const { seo, ...data } = resetPasswordPage;

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
