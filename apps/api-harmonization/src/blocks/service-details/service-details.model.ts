import { Resources } from '../../models';
import { Block } from '../../utils';

export class ServiceDetailsBlock extends Block.Block {
    __typename!: 'ServiceDetailsBlock';
    data!: Service;
}

export class Service {
    price!: {
        title: string;
        value: Resources.Model.Service['product']['price'];
    };
    type!: {
        label: string;
        title: string;
        value: Resources.Model.Service['product']['type'];
    };
    status!: {
        label: string;
        title: string;
        value: Resources.Model.ContractStatus;
    };
    category!: {
        label: string;
        title: string;
        value: Resources.Model.Service['product']['category'];
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
