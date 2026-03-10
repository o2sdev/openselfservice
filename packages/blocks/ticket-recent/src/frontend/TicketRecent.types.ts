import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/ticket-recent.client';

export type TicketRecentProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type TicketRecentPureProps = TicketRecentProps & Model.TicketRecentBlock;

export type TicketRecentRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
