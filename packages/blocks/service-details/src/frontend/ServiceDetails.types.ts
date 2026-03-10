import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/service-details.client';

export interface ServiceDetailsProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    serviceId: string;
}

export type ServiceDetailsPureProps = ServiceDetailsProps & Model.ServiceDetailsBlock;

export type ServiceDetailsRendererProps = Omit<ServiceDetailsProps, 'serviceId'> & {
    slug: string[];
};
