import { CMS, Products } from '@o2s/configs.integrations';

import * as Model from './product-details.model';

export const mapProductDetails = (
    product: Products.Model.Product,
    cms: CMS.Model.ProductDetailsBlock.ProductDetailsBlock,
): Model.ProductDetailsBlock => {
    // Derive view-level specs (keySpecs, detailedSpecs) from raw attributes + CMS config.
    const attributes = product.attributes ?? {};
    const attributesConfig = cms.attributes ?? [];

    const detailedSpecs: Model.Product['detailedSpecs'] = [];
    const keySpecs: Model.Product['keySpecs'] = [];

    // Iterate through CMS attribute configuration and pick values from product.attributes
    for (const config of attributesConfig) {
        const value = attributes[config.key];
        if (value == null || value === '') {
            continue;
        }

        detailedSpecs.push({
            label: config.label,
            value: String(value),
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
        actionButton: cms.labels.actionButtonLabel,
        specifications: cms.labels.specificationsTitle,
        description: cms.labels.descriptionTitle,
        download: cms.labels.downloadLabel,
        price: cms.labels.priceLabel,
        offer: cms.labels.offerLabel,
        variant: cms.labels.variantLabel,
    };

    return {
        __typename: 'ProductDetailsBlock',
        id: product.id,
        product: mappedProduct,
        actionButton:
            labels.actionButton && product.link
                ? {
                      label: labels.actionButton,
                      href: product.link,
                      variant: 'default',
                      icon: 'MessageCircle',
                  }
                : undefined,
        labels,
    };
};
