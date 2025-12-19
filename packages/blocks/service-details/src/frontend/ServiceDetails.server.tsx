import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/service-details.client';
import { sdk } from '../sdk';

import { ServiceDetailsProps } from './ServiceDetails.types';

export const ServiceDetailsDynamic = dynamic(() =>
    import('./ServiceDetails.client').then((module) => module.ServiceDetailsPure),
);

export const ServiceDetails: React.FC<ServiceDetailsProps> = async ({
    id,
    serviceId,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.ServiceDetailsBlock;
    try {
        data = await sdk.blocks.getServiceDetails(
            {
                id: serviceId,
            },
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <ServiceDetailsDynamic
            {...data}
            serviceId={serviceId}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
