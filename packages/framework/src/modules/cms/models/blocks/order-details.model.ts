import { Order, OrderItem } from '@/modules/orders/orders.model';
import { Product } from '@/modules/products/products.model';
import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';
import { InfoCard } from '@/utils/models/info-card';

export class OrderDetailsBlock extends Block.Block {
    title?: string;
    properties?: {
        [key: string]: string;
    };
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
        reorder: string;
        trackOrder: string;
        payOnline: string;
        close: string;
    };
    cards!: {
        [key: string]: InfoCard;
    };
}
