import { Product } from '@/modules/products/products.model';
import { Contract } from '@/modules/resources/resources.model';
import { Block, Mapping } from '@/utils/models';

export class ServiceDetailsBlock extends Block.Block {
    title?: string;
    properties?: {
        [key: string]: string;
    };
    fields!: Mapping.Mapping<Contract & Product>;
    labels!: {
        today: string;
        yesterday: string;
        settings: string;
        renew: string;
    };
}
