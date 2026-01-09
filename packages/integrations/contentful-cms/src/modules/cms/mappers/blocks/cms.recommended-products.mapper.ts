import { CMS } from '@o2s/framework/modules';

export const mapRecommendedProductsBlock = (
    _locale: string,
): CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock => {
    // TODO: Implement proper mapping from Contentful
    // For now, return a basic structure with labels
    return {
        id: 'recommended-products-1',
        labels: {
            title: 'Recommended Products',
            detailsLabel: 'Details',
        },
    };
};
