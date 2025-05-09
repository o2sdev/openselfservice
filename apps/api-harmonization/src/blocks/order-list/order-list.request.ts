import { CMS, Orders } from '@o2s/framework/modules';

export class GetOrderListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Orders.Request.GetOrderListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
}
