import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/quick-links.client';

export type QuickLinksProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;

export type QuickLinksPureProps = QuickLinksProps & Model.QuickLinksBlock;

export type QuickLinksRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
