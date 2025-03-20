import { CMS, Resources } from '../../models';

import { Service, ServiceListBlock } from './service-list.model';

export const mapServiceList = (
    services: Resources.Model.Services,
    cms: CMS.Model.ServiceListBlock.ServiceListBlock,
    _locale: string,
): ServiceListBlock => {
    return {
        __typename: 'ServiceListBlock',
        id: cms.id,
        title: cms.title,
        // filters: cms.filters,
        services: {
            total: services.total,
            data: services.data.map((service) => mapService(service)),
        },
    };
};

const mapService = (
    service: Resources.Model.Service,
    // cms: CMS.Model.ResourceListBlock.ResourceListBlock,
    // locale: string,
): Service => {
    return {
        id: service.id,
        // name: service.name,
        // description: service.description,
        // image: service.image,
        // link: service.link,
    };
};
