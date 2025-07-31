import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/service-list.client';

export interface ServiceListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type ServiceListPureProps = ServiceListProps & Model.ServiceListBlock;

export interface ServiceListRendererProps extends Omit<ServiceListProps, ''> {
    slug: string[];
}
