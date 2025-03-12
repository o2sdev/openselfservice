import { Models } from '@o2s/framework/modules';

import { Notifications } from '../../models';
import { Block } from '../../utils';

export class NotificationListBlock extends Block.Block {
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
