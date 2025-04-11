import { Organizations } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class OrganizationList extends Block.Block {
    title?: string;
    subtitle?: string;
    noResults!: {
        title: string;
        description?: string;
    };
    items!: Organizations.Model.Organization[];
}
