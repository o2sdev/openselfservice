import { CMS } from '@o2s/framework/modules';

export class GetOrderConfirmationBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
    /** Order ID from URL - used to fetch order data (API/mock) */
    orderId?: string;
}
