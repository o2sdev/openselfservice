import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/featured-service-list.client';

export interface FeaturedServiceListProps {
    id: string;
    locale: string;
    accessToken?: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type FeaturedServiceListPureProps = FeaturedServiceListProps & Model.FeaturedServiceListBlock;

export interface FeaturedServiceListRendererProps extends Omit<FeaturedServiceListProps, ''> {
    slug: string[];
}
