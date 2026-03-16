import { CMS } from '@o2s/framework/modules';

export const mapRecommendedProductsBlock = (
    locale: string,
): CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock => {
    const basePathMap: Record<string, string> = {
        en: '/products',
        de: '/produkte',
        pl: '/produkty',
    };

    return {
        id: 'recommended-products-1',
        basePath: basePathMap[locale] || basePathMap.en,
        cartPath: '/cart',
        labels: {
            title: 'Recommended Products',
            detailsLabel: 'Details',
            addToCartLabel: 'Add to Cart',
            addToCartSuccess: '{productName} added to cart',
            addToCartError: 'Failed to add product to cart',
            viewCartLabel: 'View Cart',
        },
    };
};
