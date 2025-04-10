import format from 'string-template';

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
        filters: cms.filters,
        noResults: cms.noResults,
        services: {
            total: services.total,
            data: services.data.map((service) => mapService(service, cms)),
        },
    };
};

const mapService = (service: ServiceWithProduct, cms: CMS.Model.ServiceListBlock.ServiceListBlock): Service => {
    const { contract, product } = service;
    const { type, category, status, paymentPeriod } = cms.fields;

    return {
        __typename: 'Service',
        id: service.id,
        billingAccountId: service.billingAccountId,
        detailsUrl: format(cms.detailsUrl, {
            id: service.id,
        }),
        contract: {
            id: contract.id,
            type: {
                value: contract.type,
                label: type?.[contract.type] || contract.type,
            },
            status: {
                value: contract.status,
                label: status?.[contract.status] || contract.status,
            },
            startDate: contract.startDate,
            endDate: contract.endDate,
        },
        product: {
            id: product.id,
            name: product.name,
            type: {
                value: product.type,
                label: type?.[product.type] || product.type,
            },
            category: {
                value: product.category,
                label: category?.[product.category] || product.category,
            },
            description: product.description,
            shortDescription: product.shortDescription,
            image: product.image,
            price: {
                value: product.price.value,
                currency: product.price.currency,
                period: contract.paymentPeriod
                    ? paymentPeriod?.[contract.paymentPeriod] || contract.paymentPeriod
                    : undefined,
            },
            link: product.link,
            tags: product.tags,
        },
    };
};
