import { Components } from '@o2s/api-harmonization';

export interface NotificationDetailsProps {
    id: string;
    notificationId: string;
    accessToken: string;
    locale: string;
}

export type NotificationDetailsPureProps = NotificationDetailsProps &
    Components.NotificationDetails.Model.NotificationDetailsComponent;
