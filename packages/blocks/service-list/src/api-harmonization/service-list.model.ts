import { Products, Resources } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class ServiceListBlock extends ApiModels.Block.Block {
    __typename!: 'ServiceListBlock';
    title?: string;
    subtitle?: string;
    detailsLabel!: string;
    filters?: Models.Filters.Filters<Resources.Model.Contract & Products.Model.Product>;
    pagination?: Models.Pagination.Pagination;
    services!: {
        data: Service[];
        total: number;
    };
    noResults!: {
        title: string;
        description?: string;
    };
    permissions?: {
        view: boolean;
    };
}

export type Services = {
    data: Service[];
    total: number;
};

export class Service {
    id!: string;
    __typename!: 'Service';
    billingAccountId!: string;
    detailsUrl!: string;
    contract!: {
        id: string;
        type?: {
            value: Resources.Model.Contract['type'];
            label: string;
        };
        status: {
            value: Resources.Model.Contract['status'];
            label: string;
        };
        startDate: string;
        endDate: string;
        price: Models.Price.Price;
    };
    product!: {
        id: string;
        name: string;
        type: {
            value: Products.Model.Product['type'];
            label: string;
        };
        category: {
            value: Products.Model.Product['category'];
            label: string;
        };
        description: string;
        shortDescription?: string;
        image?: Models.Media.Media;
        link: string;
        tags: Products.Model.Product['tags'];
    };
}
