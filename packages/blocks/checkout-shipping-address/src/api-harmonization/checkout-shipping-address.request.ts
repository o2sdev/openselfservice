import { CMS } from '@o2s/framework/modules';

export class GetCheckoutShippingAddressBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
