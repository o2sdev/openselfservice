import { Models } from '@o2s/framework/modules';

import { Products, Resources } from '../../models';
import { Block } from '../../utils';

export class ServiceListBlock extends Block.Block {
    __typename!: 'ServiceListBlock';
    title!: string;
    subtitle?: string;
    detailsLabel!: string;
    detailsUrl!: string;
    filters?: Models.Filters.Filters<Resources.Model.Contract & Products.Model.Product>;
    pagination!: Models.Pagination.Pagination;
    services!: Services;
}

export type Services = {
    data: Service[];
    total: number;
};

export class Service {
    id!: string;
    __typename!: 'Service';
    billingAccountId!: string;
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
        image: string;
        price: {
            value: Products.Model.Money['value'];
            currency: Models.Currency.Currency;
        };
        link: string;
    };
}

export type ServiceWithProduct = Omit<Resources.Model.Service, 'productId'> & {
    product: Products.Model.Product;
};

export type ServicesList = Models.Pagination.Paginated<ServiceWithProduct>;
