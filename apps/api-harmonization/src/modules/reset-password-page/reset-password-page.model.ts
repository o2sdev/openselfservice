import { CMS, Models } from '@o2s/framework/modules';

export class ResetPasswordPage {
    seo!: Models.SEO.Page;
    data!: Omit<CMS.Model.ResetPasswordPage.ResetPasswordPage, 'seo'>;
}
