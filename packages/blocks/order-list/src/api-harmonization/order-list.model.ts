import { Orders } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class OrderListBlock extends ApiModels.Block.Block {
    __typename!: 'OrderListBlock';
    title?: string;
    subtitle?: string;
    table!: Models.DataTable.DataTable<Orders.Model.Order>;
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
        clickToSelect: string;
    };
    reorderLabel?: string;
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
        value: Orders.Model.Order['paymentDueDate'];
        label: string;
    };
    status!: {
        value: Orders.Model.Order['status'];
        label: string;
    };
    subtotal!: {
        value: Orders.Model.Order['subtotal'];
        label: string;
    };
    currency!: Orders.Model.Order['currency'];
    detailsUrl!: string;
}
