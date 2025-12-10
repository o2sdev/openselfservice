import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/notification-list.client';

export interface NotificationListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    enableRowSelection?: boolean;
}

export type NotificationListPureProps = NotificationListProps & Model.NotificationListBlock;

export type NotificationListRendererProps = Omit<NotificationListProps, ''> & {
    slug: string[];
};
