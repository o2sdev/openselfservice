import { CMS } from '@o2s/framework/modules';

export class GetOrderDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export class GetOrderDetailsBlockParams implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class GetOrderItemsQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
