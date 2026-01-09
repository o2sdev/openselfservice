import { TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetTicketParams {
    id!: string;
    locale?: string;
}

export class PostTicketBody {
    title!: string;
    description!: string;
}

export class GetTicketListQuery extends PaginationQuery {
    topic?: string;
    type?: string;
    status?: TicketStatus;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    search?: string;
    priority?: string;
    locale?: string;
}
