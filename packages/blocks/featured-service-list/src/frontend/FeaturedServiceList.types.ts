import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/featured-service-list.client';

export type FeaturedServiceListProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type FeaturedServiceListPureProps = FeaturedServiceListProps & Model.FeaturedServiceListBlock;

export interface FeaturedServiceListRendererProps extends Omit<FeaturedServiceListProps, ''> {
    slug: string[];
}
