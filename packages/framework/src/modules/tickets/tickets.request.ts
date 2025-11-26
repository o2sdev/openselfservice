import { PaginationQuery } from '../../utils/models/pagination';

import { TicketStatus } from './tickets.model';

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
    locale?: string;
}
