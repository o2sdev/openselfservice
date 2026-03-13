import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (_locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Strapi
    // For now, return a basic structure with labels
    return {
        id: 'product-details-1',
        labels: {
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
            addToCartLabel: 'Add to Cart',
            addToCartSuccess: 'Product added to cart',
            addToCartError: 'Failed to add product to cart',
        },
    };
};
