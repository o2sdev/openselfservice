import { CMS } from '@o2s/framework/modules';

export class GetSurveyjsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
