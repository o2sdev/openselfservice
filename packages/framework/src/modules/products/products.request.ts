import { PaginationQuery } from '@/utils/models/pagination';

import { ProductType } from './products.model';

export class GetProductListQuery extends PaginationQuery {
    type?: ProductType;
    category?: string;
    locale?: string;
}

export class GetProductParams {
    id!: string;
    locale?: string;
}
