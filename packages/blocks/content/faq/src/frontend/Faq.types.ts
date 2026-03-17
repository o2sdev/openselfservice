import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/faq.client';

export type FaqProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;

export type FaqPureProps = FaqProps & Model.FaqBlock;

export type FaqRendererProps = Models.BlockProps.BlockWithDraftModeProps<ReturnType<typeof defineRouting>>;
