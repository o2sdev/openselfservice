import { CMS, Products } from '@o2s/configs.integrations';

import * as Model from './product-details.model';

export const mapProductDetails = (
    product: Products.Model.Product,
    popularOffers: Model.ProductSummary[] | undefined,
    cms: CMS.Model.ProductDetailsBlock.ProductDetailsBlock,
): Model.ProductDetailsBlock => {
    // Map Products.Model.Product to Model.Product
    const mappedProduct: Model.Product = {
        ...product,
        images: product.images || (product.image ? [product.image] : []),
        badges:
            product.tags?.map((tag) => ({
                label: tag.label,
                variant: tag.variant as Model.Badge['variant'],
            })) || [],
        keySpecs: product.keySpecs || [],
        detailedSpecs: product.detailedSpecs || [],
    };

    const labels: Model.Labels = {
        actionButtonLabel: cms.labels.actionButtonLabel,
        specificationsTitle: cms.labels.specificationsTitle,
        descriptionTitle: cms.labels.descriptionTitle,
        recommendedOffersTitle: cms.labels.recommendedOffersTitle,
        downloadLabel: cms.labels.downloadLabel,
        priceLabel: cms.labels.priceLabel,
        offerLabel: cms.labels.offerLabel,
    };

    return {
        __typename: 'ProductDetailsBlock',
        id: product.id,
        product: mappedProduct,
        popularOffers,
        actionButton: labels.actionButtonLabel
            ? {
                  label: labels.actionButtonLabel,
                  variant: 'default',
                  icon: 'MessageCircle',
              }
            : undefined,
        labels,
    };
};
