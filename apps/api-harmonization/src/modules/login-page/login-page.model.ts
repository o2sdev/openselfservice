import { CMS, Models } from '@o2s/framework/modules';

export class LoginPage {
    header!: CMS.Model.Header.Header;
    data!: Omit<CMS.Model.LoginPage.LoginPage, 'seo'>;
    seo!: Models.SEO.Page;
}
