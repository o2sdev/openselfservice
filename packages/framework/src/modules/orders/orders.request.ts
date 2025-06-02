import { PaginationQuery } from '@/utils/models/pagination';

import { PaymentStatus } from './orders.model';
import { OrderStatus } from './orders.model';

export class GetOrderParams {
    id!: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export class GetOrderListQuery extends PaginationQuery {
    id?: string;
    customerId?: string;
    status?: OrderStatus;
    paymentStatus?: PaymentStatus;
    sort?: string;
    dateFrom?: Date;
    dateTo?: Date;
    locale?: string;
}
