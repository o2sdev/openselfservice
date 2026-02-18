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
    initialFilters?: Partial<Orders.Model.Order & { sort?: string }>;
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    permissions?: {
        view: boolean;
        create: boolean;
        cancel: boolean;
        track: boolean;
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
        value: Orders.Model.Order['paymentDueDate'];
        label: string;
    };
    status!: {
        value: Orders.Model.Order['status'];
        label: string;
    };
    subtotal!: Orders.Model.Order['subtotal'];
    currency!: Orders.Model.Order['currency'];
    detailsUrl!: string;
}
