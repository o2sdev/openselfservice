import { CMS } from '@o2s/framework/modules';

export const mapRecommendedProductsBlock = (
    locale: string,
): CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock => {
    const basePathByLocale: Record<string, string> = {
        en: '/products',
        de: '/produkte',
        pl: '/produkty',
    };

    return {
        id: 'recommended-products-1',
        basePath: basePathByLocale[locale] || basePathByLocale.en,
        labels: {
            title: 'Recommended Products',
            detailsLabel: 'Details',
        },
    };
};
