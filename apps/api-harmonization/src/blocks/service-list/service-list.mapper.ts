import { CMS } from '../../models';

import { Service, ServiceListBlock, ServiceWithProduct, ServicesList } from './service-list.model';

export const mapServiceList = (
    services: ServicesList,
    cms: CMS.Model.ServiceListBlock.ServiceListBlock,
    _locale: string,
): ServiceListBlock => {
    return {
        __typename: 'ServiceListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        detailsLabel: cms.detailsLabel,
        pagination: cms.pagination,
        detailsUrl: cms.detailsUrl,
        filters: cms.filters,
        services: {
            total: services.total,
            data: services.data.map((service) => mapService(service, cms)),
        },
    };
};

const mapService = (service: ServiceWithProduct, cms: CMS.Model.ServiceListBlock.ServiceListBlock): Service => {
    const { contract, product } = service;

    return {
        __typename: 'Service',
        id: service.id,
        billingAccountId: service.billingAccountId,
        contract: {
            id: contract.id,
            type: {
                value: contract.type,
                label: cms.fieldMapping.type?.[contract.type] || contract.type,
            },
            status: {
                value: contract.status,
                label: cms.fieldMapping.status?.[contract.status] || contract.status,
            },
            startDate: contract.startDate,
            endDate: contract.endDate,
        },
        product: {
            id: product.id,
            name: product.name,
            type: {
                value: product.type,
                label: cms.fieldMapping.type?.[product.type] || product.type,
            },
            category: {
                value: product.category,
                label: cms.fieldMapping.category?.[product.category] || product.category,
            },
            description: product.description,
            shortDescription: product.shortDescription,
            image: product.image,
            price: {
                value: product.price.value,
                currency: product.price.currency,
            },
            link: product.link,
        },
    };
};
