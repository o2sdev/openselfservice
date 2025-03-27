import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ServiceDetailsProps } from './ServiceDetails.types';

export const ServiceDetailsDynamic = dynamic(() =>
    import('./ServiceDetails.client').then((module) => module.ServiceDetailsPure),
);

export const ServiceDetails: React.FC<ServiceDetailsProps> = async ({ id, serviceId, accessToken, locale }) => {
    const data = await sdk.blocks.getServiceDetails(
        {
            id: serviceId,
        },
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <ServiceDetailsDynamic {...data} serviceId={serviceId} id={id} accessToken={accessToken} locale={locale} />;
};
