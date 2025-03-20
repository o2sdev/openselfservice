// import { Models } from '@o2s/framework/modules';
// import { Resources } from '../../models';
import { Block } from '../../utils';

export class ServiceListBlock extends Block.Block {
    __typename!: 'ServiceListBlock';
    title?: string;
    // filters?: Models.Filters.Filters<Resources.Model.Resource>;
    services!: {
        data: Service[];
        total: number;
    };
}

export class Service {
    id!: string;
    // name!: string;
    // description!: string;
    // image!: string;
    // link!: string;
}
