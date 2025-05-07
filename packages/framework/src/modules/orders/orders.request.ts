import { PaymentStatus } from './orders.model';
import { OrderStatus } from './orders.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetOrderParams {
    id!: string;
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
