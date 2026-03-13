import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/service-list.client';

export type ServiceListProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type ServiceListPureProps = ServiceListProps & Model.ServiceListBlock;

export type ServiceListRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
