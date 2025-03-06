import { Components } from '@o2s/api-harmonization';

export interface NotificationListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type NotificationListPureProps = NotificationListProps &
    Components.NotificationList.Model.NotificationListComponent;
