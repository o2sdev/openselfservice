import { Ticket } from '@/modules/tickets/tickets.model';
import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export type ActionLink = {
    id: string;
    label: string;
    visible?: boolean;
    icon?: string;
    slug: string;
};

export class TicketListBlock extends Block.Block {
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
        showMore: string;
        clickToSelect: string;
    };
    detailsUrl!: string;
    actionLinks?: ActionLink[];
}
