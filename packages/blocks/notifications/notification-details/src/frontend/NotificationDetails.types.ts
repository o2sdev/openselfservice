import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/notification-details.client';

export interface NotificationDetailsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    notificationId: string;
}

export type NotificationDetailsPureProps = NotificationDetailsProps & Model.NotificationDetailsBlock;

export type NotificationDetailsRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
