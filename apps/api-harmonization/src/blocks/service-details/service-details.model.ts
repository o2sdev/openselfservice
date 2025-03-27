import { Products, Resources } from '../../models';
import { Block } from '../../utils';

export class ServiceDetailsBlock extends Block.Block {
    __typename!: 'ServiceDetailsBlock';
    data!: Service;
}

export class Service {
    price!: {
        title: string;
        value: Products.Model.Product['price'];
    };
    type!: {
        label: string;
        title: string;
        value: Products.Model.Product['type'];
    };
    status!: {
        label: string;
        title: string;
        value: Resources.Model.ContractStatus;
    };
    category!: {
        label: string;
        title: string;
        value: Products.Model.Product['category'];
    };
    startDate!: {
        title: string;
        value: Resources.Model.Contract['startDate'];
    };
    endDate!: {
        title: string;
        value: Resources.Model.Contract['endDate'];
    };
    name!: string;
    details?: string;
    description!: string;
    labels!: {
        settings: string;
        renew: string;
    };
}
