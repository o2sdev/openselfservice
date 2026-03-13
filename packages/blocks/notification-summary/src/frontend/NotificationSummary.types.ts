import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/notification-summary.client';

export type NotificationSummaryProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type NotificationSummaryPureProps = NotificationSummaryProps & Model.NotificationSummaryBlock;

export type NotificationSummaryRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
