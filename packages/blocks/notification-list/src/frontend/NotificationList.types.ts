import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/notification-list.client';

export interface NotificationListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    enableRowSelection?: boolean;
}

export type NotificationListPureProps = NotificationListProps & Model.NotificationListBlock;

export type NotificationListRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>> &
    Pick<NotificationListProps, 'enableRowSelection'>;
