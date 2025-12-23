import { Products } from '@o2s/configs.integrations';

import { Model } from './product-details.model';

export const mapProductDetails = (
    product: Products.Model.Product,
    popularOffers: Model.ProductSummary[] | undefined,
    locale: string,
): Model.ProductDetailsBlock => {
    const labels = getLabels(locale);

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
        equipment: product.equipment || [],
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

const getLabels = (locale: string): Model.Labels => {
    const defaultLabels: Model.Labels = {
        actionButtonLabel: 'Request Quote',
        equipmentTitle: 'Equipment',
        specificationsTitle: 'Specifications',
        descriptionTitle: 'Description',
        recommendedOffersTitle: 'You Might Also Like',
        downloadLabel: 'Download Brochure',
    };

    const labelsMap: Record<string, Model.Labels> = {
        en: defaultLabels,
        pl: {
            actionButtonLabel: 'Zapytaj o ofertę',
            equipmentTitle: 'Wyposażenie',
            specificationsTitle: 'Specyfikacja',
            descriptionTitle: 'Opis',
            recommendedOffersTitle: 'Popularne oferty',
            downloadLabel: 'Pobierz broszurę',
        },
    };

    return labelsMap[locale] ?? defaultLabels;
};
