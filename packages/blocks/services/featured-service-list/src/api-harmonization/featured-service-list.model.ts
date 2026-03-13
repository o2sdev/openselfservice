import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models, Products } from '@o2s/framework/modules';

export class FeaturedServiceListBlock extends ApiModels.Block.Block {
    __typename!: 'FeaturedServiceListBlock';
    title?: string;
    pagination?: Models.Pagination.Pagination;
    noResults!: {
        title: string;
        description?: string;
    };
    detailsLabel!: string;
    detailsUrl!: string;
    labels!: {
        on: string;
        off: string;
    };
    services!: {
        data: FeaturedService[];
        total: number;
    };
}

export class FeaturedService {
    id!: string;
    name!: string;
    description!: string;
    shortDescription?: string;
    image?: Models.Media.Media;
    price!: Models.Price.Price;
    link!: string;
    tags!: Products.Model.Product['tags'];
}
