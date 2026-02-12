import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Contentful
    // For now, return a basic structure with labels

    const basePathMap: Record<string, string> = {
        en: '/products',
        de: '/produkte',
        pl: '/produkty',
    };

    const specFieldsMappingMap: Record<string, Record<string, string>> = {
        en: {
            weight: 'Weight (kg)',
            height: 'Height (cm)',
            width: 'Width (cm)',
            length: 'Length (cm)',
            material: 'Material',
            origin_country: 'Country of Origin',
            hs_code: 'HS Code',
            mid_code: 'MID Code',
        },
        de: {
            weight: 'Gewicht (kg)',
            height: 'Höhe (cm)',
            width: 'Breite (cm)',
            length: 'Länge (cm)',
            material: 'Material',
            origin_country: 'Herkunftsland',
            hs_code: 'HS-Code',
            mid_code: 'MID-Code',
        },
        pl: {
            weight: 'Waga (kg)',
            height: 'Wysokość (cm)',
            width: 'Szerokość (cm)',
            length: 'Długość (cm)',
            material: 'Materiał',
            origin_country: 'Kraj pochodzenia',
            hs_code: 'Kod HS',
            mid_code: 'Kod MID',
        },
    };

    return {
        id: 'product-details-1',
        labels: {
            actionButtonLabel: 'Request Quote',
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
            variantLabel: 'Variant',
        },
        basePath: basePathMap[locale] || basePathMap['en'],
        specFieldsMapping: specFieldsMappingMap[locale] || specFieldsMappingMap['en'],
    };
};
