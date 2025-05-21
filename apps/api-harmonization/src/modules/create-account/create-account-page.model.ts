import { CMS, Models } from '@o2s/framework/modules';

export class CreateAccountPage {
    seo!: Models.SEO.Page;
    data!: Omit<CMS.Model.CreateAccountPage.CreateAccountPage, 'seo'>;
}
