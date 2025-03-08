import { CMS } from '@o2s/framework/modules';

export class NotFoundPage {
    title!: CMS.Model.NotFoundPage.NotFoundPage['title'];
    description!: CMS.Model.NotFoundPage.NotFoundPage['description'];
    urlLabel!: CMS.Model.NotFoundPage.NotFoundPage['urlLabel'];
    url?: CMS.Model.NotFoundPage.NotFoundPage['url'];
}
