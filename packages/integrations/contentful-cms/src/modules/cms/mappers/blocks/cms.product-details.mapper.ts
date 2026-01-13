import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (_locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Contentful
    // For now, return a basic structure with labels
    return {
        id: 'product-details-1',
        labels: {
            actionButtonLabel: 'Request Quote',
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
        },
    };
};
