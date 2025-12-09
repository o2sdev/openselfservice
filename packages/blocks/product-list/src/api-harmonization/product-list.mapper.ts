import { CMS, Products } from '@o2s/configs.integrations';

import { ProductItem, ProductListBlock } from './product-list.model';

export const mapProductList = (
    products: Products.Model.Products,
    cms: CMS.Model.ProductListBlock.ProductListBlock,
    _locale: string,
): ProductListBlock => {
    return {
        __typename: 'ProductListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        detailsLabel: cms.detailsLabel,
        pagination: cms.pagination,
        filters: cms.filters as unknown as ProductListBlock['filters'],
        table: cms.table as unknown as ProductListBlock['table'],
        fieldMapping: cms.fieldMapping,
        noResults: cms.noResults,
        labels: cms.labels,
        products: {
            total: products.total,
            data: products.data.map((product) => mapProduct(product, cms)),
        },
    };
};

const mapProduct = (product: Products.Model.Product, cms: CMS.Model.ProductListBlock.ProductListBlock): ProductItem => {
    const { type, category } = cms.fieldMapping;

    return {
        __typename: 'ProductItem',
        id: product.id,
        sku: product.sku,
        name: product.name,
        description: product.description,
        shortDescription: product.shortDescription,
        detailsUrl: product.link,
        type: {
            value: product.type,
            label: type?.[product.type] || product.type,
        },
        category: {
            value: product.category,
            label: category?.[product.category] || product.category,
        },
        price: product.price,
        image: product.image,
        tags: product.tags,
        link: product.link,
    };
};
