import { PaginationQuery } from '@/utils/models/pagination';

export class GetBillingAccountsListQuery extends PaginationQuery {
    status?: string;
    number?: string;
}

export class GetBillingAccountParams {
    id!: string;
}
