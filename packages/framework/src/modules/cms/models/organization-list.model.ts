import { Block } from '@/utils/models';

export class OrganizationList extends Block.Block {
    title?: string;
    description?: string;
    labels!: {
        apply: string;
    };
}
