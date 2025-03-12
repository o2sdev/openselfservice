import { Models } from '@o2s/framework/modules';

import { Tickets } from '../../models';
import { Block } from '../../utils';

export class TicketListBlock extends Block.Block {
    __typename!: 'TicketListBlock';
    title?: string;
    subtitle?: string;
    table!: Models.DataTable.DataTable<Tickets.Model.Ticket>;
    pagination?: Models.Pagination.Pagination;
    filters?: Models.Filters.Filters<Tickets.Model.Ticket>;
    noResults!: {
        title: string;
        description?: string;
    };
    tickets!: {
        data: Ticket[];
        total: Tickets.Model.Tickets['total'];
    };
}

export class Ticket {
    id!: Tickets.Model.Ticket['id'];
    topic!: {
        value: Tickets.Model.Ticket['topic'];
        label: string;
    };
    type!: {
        value: Tickets.Model.Ticket['type'];
        label: string;
    };
    status!: {
        value: Tickets.Model.Ticket['status'];
        label: string;
    };
    createdAt!: Tickets.Model.Ticket['createdAt'];
    updatedAt!: Tickets.Model.Ticket['updatedAt'];
    detailsUrl!: string;
}
