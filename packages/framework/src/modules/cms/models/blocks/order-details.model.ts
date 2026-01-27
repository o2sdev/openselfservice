import { Order, OrderItem } from '@/modules/orders/orders.model';
import { Product } from '@/modules/products/products.model';

import { Block, DataTable, Filters, InfoCard, Mapping, Pagination } from '@/utils/models';

export class OrderDetailsBlock extends Block.Block {
    title?: string;
    fieldMapping!: Mapping.Mapping<Order & OrderItem>;
    productsTitle!: string;
    table!: DataTable.DataTable<Product & OrderItem>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Product & OrderItem>;
    statusLadder?: string[];
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        today: string;
        yesterday: string;
        showMore: string;
        close: string;
    };
    totalValue?: InfoCard.InfoCard;
    createdOrderAt?: InfoCard.InfoCard;
    paymentDueDate?: InfoCard.InfoCard;
    overdue?: InfoCard.InfoCard;
    orderStatus?: InfoCard.InfoCard;
    customerComment?: InfoCard.InfoCard;
    reorderLabel?: string;
    trackOrderLabel?: string;
    payOnlineLabel?: string;
}
