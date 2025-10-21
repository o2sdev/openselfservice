import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/service-details.client';

export interface ServiceDetailsProps {
    id: string;
    serviceId: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type ServiceDetailsPureProps = ServiceDetailsProps & Model.ServiceDetailsBlock;

export type ServiceDetailsRendererProps = Omit<ServiceDetailsProps, 'serviceId'> & {
    slug: string[];
};
