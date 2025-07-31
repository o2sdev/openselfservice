import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/notification-details.client';

export interface NotificationDetailsProps {
    id: string;
    notificationId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type NotificationDetailsPureProps = NotificationDetailsProps & Model.NotificationDetailsBlock;

export type FaqRendererProps = Omit<NotificationDetailsProps, 'notificationId'> & {
    slug: string[];
};
