import { CMS } from '../../models';

import { LoginPage } from './login-page.model';

export const mapLoginPage = (header: CMS.Model.Header.Header, loginPage: CMS.Model.LoginPage.LoginPage): LoginPage => {
    return {
        header,
        data: {
            ...loginPage,
        },
    };
};
