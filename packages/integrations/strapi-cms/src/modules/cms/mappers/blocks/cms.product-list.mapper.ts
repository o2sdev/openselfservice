import { CMS } from '@o2s/framework/modules';

export const mapProductListBlock = (_locale: string): CMS.Model.ProductListBlock.ProductListBlock => {
    // TODO: Implement proper mapping from Strapi
    // For now, return a basic structure with all required fields
    return {
        id: 'product-list-1',
        title: 'Products',
        subtitle: 'Browse our product catalog',
        detailsLabel: 'View Details',
        detailsUrl: '/products/{handle}/{variantSlug}',
        basePath: '/products',
        fieldMapping: {
            category: {},
        },
        table: {
            columns: [
                { id: 'sku', title: 'SKU' },
                { id: 'name', title: 'Product Name' },
                { id: 'category', title: 'Category' },
                { id: 'type', title: 'Type' },
                { id: 'price', title: 'Price' },
            ],
            actions: {
                title: 'Actions',
                label: 'View Details',
            },
        },
        noResults: {
            title: 'No Products Found',
            description: 'There are no products matching your criteria',
        },
        labels: {
            clickToSelect: 'Click to select',
            gridView: 'Grid view',
            listView: 'List view',
            showMoreFilters: 'Show more filters',
            hideMoreFilters: 'Hide more filters',
            noActiveFilters: 'No active filters',
        },
    };
};
