import { Models, Organizations } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class OrganizationList extends Block.Block {
    title?: string;
    subtitle?: string;
    pagination?: Models.Pagination.Pagination;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        apply: string;
    };
    items!: Organizations.Model.Organization[];
}
