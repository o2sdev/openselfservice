import { CMS } from '@o2s/configs.integrations';

import { LoginPage } from './login-page.model';

export const mapLoginPage = (loginPage: CMS.Model.LoginPage.LoginPage): LoginPage => {
    const { seo, ...data } = loginPage;

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
