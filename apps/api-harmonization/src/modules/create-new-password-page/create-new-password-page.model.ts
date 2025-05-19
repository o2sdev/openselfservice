import { CMS, Models } from '@o2s/framework/modules';

export class CreateNewPasswordPage {
    seo!: Models.SEO.Page;
    data!: Omit<CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage, 'seo'>;
}
