import { CMS, Products } from '@o2s/configs.integrations';

import { ProductListBlock } from './product-list.model';

const AVAILABILITY_VARIANTS: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    IN_STOCK: 'secondary',
    LOW_STOCK: 'outline',
    OUT_OF_STOCK: 'destructive',
    PREORDER: 'default',
};

export const mapProductList = (
    products: Products.Model.Products,
    cms: CMS.Model.ProductListBlock.ProductListBlock,
    _locale: string,
): ProductListBlock => {
    const items = products.data.map((product) => {
        const availabilityValue = product.availability || 'IN_STOCK';

        return {
            id: product.id,
            sku: product.sku,
            name: product.name,
            description: product.description,
            shortDescription: product.shortDescription,
            price: product.price,
            image: product.image,
            link: product.link,
            category: product.category,
            type: product.type,
            availability: {
                value: availabilityValue,
                label: cms.labels.availability[availabilityValue] || availabilityValue,
                variant: AVAILABILITY_VARIANTS[availabilityValue] || 'default',
            },
            stock: product.stock,
            rating: product.rating,
            tags: product.tags,
            detailsUrl: product.link,
        };
    });

    return {
        __typename: 'ProductListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        description: cms.description,
        filters: cms.filters,
        pagination: cms.pagination,
        viewToggle: cms.viewToggle,
        table: cms.table,
        grid: cms.grid,
        labels: cms.labels,
        detailsLabel: cms.detailsLabel,
        noResults: cms.noResults,
        products: {
            data: items,
            total: products.total,
        },
    };
};
