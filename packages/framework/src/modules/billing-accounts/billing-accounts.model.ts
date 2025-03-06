import { Resource } from '@/modules/resources/resources.model';
import { Pagination } from '@/utils/models';

export class BillingAccount {
    id!: string;
    number!: string;
    status!: string;
    resources?: Resource[];
}

export type BillingAccounts = Pagination.Paginated<BillingAccount>;
