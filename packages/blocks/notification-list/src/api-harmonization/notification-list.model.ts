import { Notifications } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class NotificationListBlock extends ApiModels.Block.Block {
    __typename!: 'NotificationListBlock';
    title?: string;
    subtitle?: string;
    table!: Models.DataTable.DataTable<Notifications.Model.Notification>;
    pagination?: Models.Pagination.Pagination;
    filters?: Models.Filters.Filters<Notifications.Model.Notification>;
    noResults!: {
        title: string;
        description?: string;
    };
    notifications!: {
        data: Notification[];
        total: Notifications.Model.Notifications['total'];
    };
    initialFilters?: Partial<Notifications.Model.Notification & { sort?: string }>;
}

export class Notification {
    id!: Notifications.Model.Notification['id'];
    title!: Notifications.Model.Notification['title'];
    type!: {
        value: Notifications.Model.Notification['type'];
        label: string;
    };
    status!: {
        value: Notifications.Model.Notification['status'];
        label: string;
    };
    priority!: {
        value: Notifications.Model.Notification['priority'];
        label: string;
    };
    createdAt!: Notifications.Model.Notification['createdAt'];
    updatedAt!: Notifications.Model.Notification['updatedAt'];
    detailsUrl!: string;
}
