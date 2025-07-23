import { Blocks } from '@o2s/api-harmonization';
import { defineRouting } from 'next-intl/routing';

export interface NotificationListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type NotificationListPureProps = NotificationListProps & Blocks.NotificationList.Model.NotificationListBlock;

export type NotificationListRendererProps = Omit<NotificationListProps, ''> & {
    slug: string[];
};
