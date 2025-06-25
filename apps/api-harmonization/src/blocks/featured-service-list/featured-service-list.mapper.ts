import { CMS, Products } from '../../models';

import { FeaturedService, FeaturedServiceListBlock } from './featured-service-list.model';

export const mapFeaturedServiceList = (
    featuredServices: Products.Model.Products,
    cms: CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock,
): FeaturedServiceListBlock => {
    const services = featuredServices.data
        .slice(0, cms.pagination?.limit || 3)
        .map((product) => mapProduct(product))
        .filter((service) => service !== undefined);

    return {
        __typename: 'FeaturedServiceListBlock',
        id: cms.id,
        title: cms.title,
        pagination: cms.pagination,
        noResults: cms.noResults,
        detailsLabel: cms.detailsLabel,
        detailsUrl: cms.detailsUrl,
        labels: cms.labels,
        services: {
            data: services,
            total: services.length,
        },
    };
};

const mapProduct = (product: Products.Model.Product): FeaturedService | undefined => {
    if (!product.id || !product.name) {
        return undefined;
    }

    return {
        id: product.id,
        name: product.name,
        description: product.description,
        shortDescription: product.shortDescription,
        price: product.price,
        image: product.image,
        link: product.link,
        tags: product.tags,
    };
};
