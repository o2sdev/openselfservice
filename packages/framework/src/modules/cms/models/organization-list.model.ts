import { Block } from '@/utils/models';

export class OrganizationList extends Block.Block {
    title?: string;
    subtitle?: string;
    noResults!: {
        title: string;
        description?: string;
    };
}
