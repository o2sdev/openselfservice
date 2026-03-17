import { CMS } from '@o2s/framework/modules';

const MOCK_RECOMMENDED_PRODUCTS_BLOCK_EN: CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock = {
    id: 'recommended-products-1',
    basePath: '/products',
    labels: {
        title: 'Recommended Products',
        detailsLabel: 'Details',
        addToCartLabel: 'Add to Cart',
        addToCartSuccess: '{productName} added to cart',
        addToCartError: 'Failed to add product to cart',
        viewCartLabel: 'View Cart',
    },
    cartPath: '/cart',
};

const MOCK_RECOMMENDED_PRODUCTS_BLOCK_DE: CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock = {
    id: 'recommended-products-1',
    basePath: '/produkte',
    labels: {
        title: 'Empfohlene Produkte',
        detailsLabel: 'Details',
        addToCartLabel: 'In den Warenkorb',
        addToCartSuccess: '{productName} zum Warenkorb hinzugefügt',
        addToCartError: 'Fehler beim Hinzufügen zum Warenkorb',
        viewCartLabel: 'Warenkorb anzeigen',
    },
    cartPath: '/warenkorb',
};

const MOCK_RECOMMENDED_PRODUCTS_BLOCK_PL: CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock = {
    id: 'recommended-products-1',
    basePath: '/produkty',
    labels: {
        title: 'Rekomendowane produkty',
        detailsLabel: 'Szczegóły',
        addToCartLabel: 'Dodaj do koszyka',
        addToCartSuccess: '{productName} dodany do koszyka',
        addToCartError: 'Nie udało się dodać produktu do koszyka',
        viewCartLabel: 'Zobacz koszyk',
    },
    cartPath: '/koszyk',
};

export const mapRecommendedProductsBlock = (
    locale: string,
): CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock => {
    switch (locale) {
        case 'en':
            return MOCK_RECOMMENDED_PRODUCTS_BLOCK_EN;
        case 'de':
            return MOCK_RECOMMENDED_PRODUCTS_BLOCK_DE;
        case 'pl':
            return MOCK_RECOMMENDED_PRODUCTS_BLOCK_PL;
        default:
            return MOCK_RECOMMENDED_PRODUCTS_BLOCK_EN;
    }
};
