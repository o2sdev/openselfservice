import { Blocks } from '@o2s/api-harmonization';

export interface NotificationListProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type NotificationListPureProps = NotificationListProps & Blocks.NotificationList.Model.NotificationListBlock;
