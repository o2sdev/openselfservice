import { Models } from '@o2s/framework/modules';

import { Orders, Products } from '../../models';
import { Block } from '../../utils';

export class OrderDetailsBlock extends Block.Block {
    __typename!: 'OrderDetailsBlock';
    title?: string;
    order!: Order;
    productList!: {
        title: string;
        products: {
            data: Orders.Model.OrderItem[];
            total: Orders.Model.Orders['total'];
        };
        table: Models.DataTable.DataTable<Orders.Model.OrderItem & Products.Model.Product>;
        pagination?: Models.Pagination.Pagination;
        filters?: Models.Filters.Filters<Orders.Model.OrderItem & Products.Model.Product>;
        noResults?: {
            title: string;
            description?: string;
        };
    };
    labels!: {
        today: string;
        yesterday: string;
        reorder: string;
        trackOrder: string;
        payOnline: string;
        close: string;
    };
}

export class Order {
    id!: {
        value: Orders.Model.Order['id'];
    };
    total!: {
        title: string;
        icon?: string;
        label: string;
        description?: string;
        value: Orders.Model.Order['total'];
    };
    createdAt!: {
        title: string;
        icon?: string;
        label: string;
        description?: string;
        value: Orders.Model.Order['createdAt'];
    };
    paymentDueDate!: {
        title: string;
        icon?: string;
        label: string;
        description?: string;
        value: Orders.Model.Order['paymentDueDate'];
    };
    overdue!: {
        title: string;
        icon?: string;
        label: string;
        description?: string;
        value: Models.Price.Price;
        isOverdue: boolean;
    };
    status!: {
        title: string;
        icon?: string;
        label: string;
        value: Orders.Model.Order['status'];
        statusLadder?: string[];
    };
    customerComment!: {
        title: string;
        icon?: string;
        value: Orders.Model.Order['customerComment'];
        link: {
            label?: string;
            icon?: string;
            url?: string;
        };
    };
}
