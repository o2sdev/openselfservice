import { Ticket } from '@/modules/tickets/tickets.model';

import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';
import { Link } from '@/utils/models/link';

export class TicketListBlock extends Block.Block<Meta> {
    title?: string;
    subtitle?: string;
    table!: DataTable.DataTable<Ticket>;
    fieldMapping!: Mapping.Mapping<Ticket>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Ticket & { sort?: string; viewMode?: 'list' | 'grid' }>;
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
    forms?: Link[];
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    initialFilters?: Partial<Ticket & { sort?: string }>;
}

export class Meta {
    __id!: string;
    title!: string;
    subtitle!: string;
    table!: DataTable.DataTableMeta;
    fieldMapping!: Mapping.MappingMeta<Ticket>;
    // pagination!: string;
    // filters!: string;
    noResults!: {
        __id: string;
        title: string;
        description: string;
    };
    labels!: {
        __id: string;
        today: string;
        yesterday: string;
        showMore: string;
        clickToSelect: string;
    };
    detailsUrl!: string;
    // forms!: string;
}
