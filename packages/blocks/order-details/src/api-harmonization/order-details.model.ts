import { Orders, Products } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class OrderDetailsBlock extends ApiModels.Block.Block {
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
        showMore: string;
        close: string;
    };
    reorderLabel?: string;
    trackOrderLabel?: string;
    payOnlineLabel?: string;
}

export class Order {
    id!: {
        value: Orders.Model.Order['id'];
    };
    subtotal!: {
        title: string;
        icon?: string;
        label: string;
        description?: string;
        value: Orders.Model.Order['subtotal'];
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
