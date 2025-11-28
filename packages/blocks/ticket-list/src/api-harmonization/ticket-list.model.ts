import { CMS, Tickets } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class TicketListBlock extends ApiModels.Block.Block {
    __typename!: 'TicketListBlock';
    title?: string;
    subtitle?: string;
    forms?: Models.Link.Link[];
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
    labels!: {
        showMore: string;
        clickToSelect: string;
    };
    initialFilters?: Partial<Tickets.Model.Ticket & { sort?: string }>;
    meta?: CMS.Model.TicketListBlock.TicketListBlock['meta'];
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
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
