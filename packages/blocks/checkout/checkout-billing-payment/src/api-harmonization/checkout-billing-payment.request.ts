import { CMS } from '@o2s/framework/modules';

export class GetCheckoutBillingPaymentBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
