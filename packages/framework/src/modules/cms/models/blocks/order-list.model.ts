import { Order } from '@/modules/orders/orders.model';
import { ActionLink, Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class OrderListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    table!: DataTable.DataTable<Order>;
    fieldMapping!: Mapping.Mapping<Order>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Order & { sort?: string }>;
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
    actionLinks?: ActionLink.ActionLink[];
}
