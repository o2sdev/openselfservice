import { CMS } from '@o2s/framework/modules';

export class GetOrderConfirmationBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
