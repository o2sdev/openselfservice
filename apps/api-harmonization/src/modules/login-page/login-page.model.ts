import { CMS, Models } from '@o2s/framework/modules';

export class LoginPage {
    seo!: Models.SEO.Page;
    data!: Omit<CMS.Model.LoginPage.LoginPage, 'seo'>;
}
