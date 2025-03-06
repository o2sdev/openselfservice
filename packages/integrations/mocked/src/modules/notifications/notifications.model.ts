import { Models, Notifications } from '@o2s/framework/modules';

export class Notification extends Notifications.Model.Notification {
    someNewField!: string;
}

export type Notifications = Models.Pagination.Paginated<Notification>;
