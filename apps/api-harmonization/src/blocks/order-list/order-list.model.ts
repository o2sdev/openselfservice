import { Models } from '@o2s/framework/modules';

import { Orders } from '../../models';
import { Block } from '../../utils';

export class OrderListBlock extends Block.Block {
    __typename!: 'OrderListBlock';
    title?: string;
    subtitle?: string;
    table!: Models.DataTable.DataTable<Orders.Model.Order & { paymentDueDate: string }>;
    pagination?: Models.Pagination.Pagination;
    filters?: Models.Filters.Filters<Orders.Model.Order>;
    noResults!: {
        title: string;
        description?: string;
    };
    orders!: {
        data: Order[];
        total: Orders.Model.Orders['total'];
    };
    labels!: {
        showMore: string;
        reorder: string;
        clickToSelect: string;
    };
}

export class Order {
    id!: {
        value: Orders.Model.Order['id'];
        label: string;
    };
    createdAt!: {
        value: Orders.Model.Order['createdAt'];
        label: string;
    };
    paymentDueDate!: {
        value: string;
        label: string;
    };
    status!: {
        value: Orders.Model.Order['status'];
        label: string;
    };
    total!: {
        value: Orders.Model.Order['total'];
        label: string;
    };
    currency!: Orders.Model.Order['currency'];
    detailsUrl!: string;
}
