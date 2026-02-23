import { CMS } from '@o2s/framework/modules';

export class GetCartBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    cartId?: string;
}
