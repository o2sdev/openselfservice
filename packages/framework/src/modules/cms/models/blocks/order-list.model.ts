import { Order } from '@/modules/orders/orders.model';
import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class OrderListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    table!: DataTable.DataTable<Order & { paymentDueDate: string }>;
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
        reorder: string;
        clickToSelect: string;
    };
    detailsUrl!: string;
}
