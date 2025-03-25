import { Models } from '@o2s/framework/modules';

import { Products, Resources } from '../../models';
import { Block } from '../../utils';

export class ServiceListBlock extends Block.Block {
    __typename!: 'ServiceListBlock';
    title?: string;
    subtitle?: string;
    detailsLabel!: string;
    filters?: Models.Filters.Filters<Resources.Model.Contract & Products.Model.Product>;
    pagination?: Models.Pagination.Pagination;
    services!: Services;
    noResults!: {
        title: string;
        description?: string;
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
        type: {
            value: Resources.Model.Contract['type'];
            label: string;
        };
        status: {
            value: Resources.Model.Contract['status'];
            label: string;
        };
        startDate: string;
        endDate: string;
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
        shortDescription: string;
        image: Models.Media.Media;
        price: Models.Price.Price;
        link: string;
        tags: Products.Model.Product['tags'];
    };
}

export type ServiceWithProduct = Omit<Resources.Model.Service, 'productId'> & {
    product: Products.Model.Product;
};

export type ServicesList = Models.Pagination.Paginated<ServiceWithProduct>;
