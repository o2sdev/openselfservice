import { CMS } from '../../models';

import { LoginPage } from './login-page.model';

export const mapLoginPage = (header: CMS.Model.Header.Header, loginPage: CMS.Model.LoginPage.LoginPage): LoginPage => {
    const { seo, ...data } = loginPage;
    return {
        header,
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
