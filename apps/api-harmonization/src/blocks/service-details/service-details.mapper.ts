import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Resources } from '../../models';

import { Service, ServiceDetailsBlock } from './service-details.model';

export const mapServiceDetails = (
    cms: CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock,
    service: Resources.Model.Service,
    locale: string,
    timezone: string,
): ServiceDetailsBlock => {
    return {
        __typename: 'ServiceDetailsBlock',
        id: cms.id,
        data: mapService(cms, service, locale, timezone),
    };
};

export const mapService = (
    cms: CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock,
    service: Resources.Model.Service,
    locale: string,
    timezone: string,
): Service => {
    return {
        price: {
            title: cms.properties?.price as string,
            value: service.product.price,
        },
        type: {
            label: cms.fields.type?.[service.product.type] || service.product.type,
            title: cms.properties?.type as string,
            value: service.product.type,
        },
        status: {
            label: cms.fields.status?.[service.contract.status] || service.contract.status,
            title: cms.properties?.status as string,
            value: service.contract.status,
        },
        category: {
            label: cms.fields.category?.[service.product.category] || service.product.category,
            title: cms.properties?.category as string,
            value: service.product.category,
        },
        startDate: {
            title: cms.properties?.startDate as string,
            value: formatDateRelative(
                service.contract.startDate,
                locale,
                cms.labels.today,
                cms.labels.yesterday,
                timezone,
            ),
        },
        endDate: {
            title: cms.properties?.endDate as string,
            value: formatDateRelative(
                service.contract.endDate,
                locale,
                cms.labels.today,
                cms.labels.yesterday,
                timezone,
            ),
        },
        name: service.product.name,
        details: cms.title,
        description: service.product.description,
        labels: {
            settings: cms.labels.settings,
            renew: cms.labels.renew,
        },
    };
};
