import { ProductType } from './products.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetProductListQuery extends PaginationQuery {
    type?: ProductType;
    category?: string;
    locale?: string;
}

export class GetProductParams {
    id!: string;
    locale?: string;
}
