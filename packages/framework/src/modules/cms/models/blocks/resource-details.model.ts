import { Asset, Contract, Resource, Service } from '@/modules/resources/resources.model';
import { Block, Mapping } from '@/utils/models';

type ResourceKeys =
    | keyof Resource
    | `asset.${keyof Asset & string}`
    | `service.${keyof Service & string}`
    | `contract.${keyof Contract & string}`
    | '__typename';

type ResourceMapping = Omit<Mapping.Mapping<Resource>, 'fieldMapping'> & {
    [key in ResourceKeys]?: {
        [key: string]: string;
    };
};

export class ResourceDetailsBlock extends Block.Block {
    properties!: {
        [key: string]: string;
    };
    fieldMapping!: ResourceMapping;
    labels!: {
        today: string;
        yesterday: string;
        status: string;
        type: string;
    };
}
