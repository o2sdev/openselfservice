import { Ticket } from '@/modules/tickets/tickets.model';
import { Component, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class TicketListComponent extends Component.Component {
    title?: string;
    subtitle?: string;
    table!: DataTable.DataTable<Ticket>;
    fieldMapping!: Mapping.Mapping<Ticket>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Ticket & { sort?: string }>;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        today: string;
        yesterday: string;
    };
    detailsUrl!: string;
}
