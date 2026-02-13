import { CMS, Products } from '@o2s/configs.integrations';

import * as Model from './product-details.model';

export const mapProductDetails = (
    product: Products.Model.Product,
    cms: CMS.Model.ProductDetailsBlock.ProductDetailsBlock,
): Model.ProductDetailsBlock => {
    // Derive view-level specs (keySpecs, detailedSpecs) from raw attributes + CMS config.
    const attributes = product.attributes ?? {};
    const specFieldsMapping = cms.specFieldsMapping ?? {};

    const detailedSpecs: Model.Product['detailedSpecs'] = [];
    const keySpecs: Model.Product['keySpecs'] = [];

    for (const [field, config] of Object.entries(specFieldsMapping)) {
        const value = attributes[field];
        if (value == null || value === '') {
            continue;
        }

        detailedSpecs.push({
            label: config.label,
            value,
        });

        if (config.showInKeySpecs) {
            keySpecs.push({
                value: `${config.label}: ${value}`,
                icon: config.icon,
            });
        }
    }

    // Map Products.Model.Product to Model.Product
    const mappedProduct: Model.Product = {
        ...product,
        images: product.images || (product.image ? [product.image] : []),
        badges:
            product.tags?.map((tag) => ({
                label: tag.label,
                variant: tag.variant as Model.Badge['variant'],
            })) || [],
        keySpecs: keySpecs.length > 0 ? keySpecs : undefined,
        detailedSpecs: detailedSpecs.length > 0 ? detailedSpecs : undefined,
    };

    const labels: Model.Labels = {
        actionButtonLabel: cms.labels.actionButtonLabel,
        specificationsTitle: cms.labels.specificationsTitle,
        descriptionTitle: cms.labels.descriptionTitle,
        downloadLabel: cms.labels.downloadLabel,
        priceLabel: cms.labels.priceLabel,
        offerLabel: cms.labels.offerLabel,
        variantLabel: cms.labels.variantLabel,
    };

    return {
        __typename: 'ProductDetailsBlock',
        id: product.id,
        product: mappedProduct,
        actionButton:
            labels.actionButtonLabel && product.link
                ? {
                      label: labels.actionButtonLabel,
                      href: product.link,
                      variant: 'default',
                      icon: 'MessageCircle',
                  }
                : undefined,
        labels,
    };
};
