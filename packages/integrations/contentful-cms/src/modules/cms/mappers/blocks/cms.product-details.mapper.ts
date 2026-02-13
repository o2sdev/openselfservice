import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Contentful
    // For now, return a basic structure with labels

    const basePathMap: Record<string, string> = {
        en: '/products',
        de: '/produkte',
        pl: '/produkty',
    };

    const specFieldsMappingMap: Record<string, Record<string, CMS.Model.ProductDetailsBlock.SpecFieldConfig>> = {
        en: {
            weight: { label: 'Weight (kg)', showInKeySpecs: true, icon: 'Weight' },
            height: { label: 'Height (cm)', showInKeySpecs: true, icon: 'Ruler' },
            width: { label: 'Width (cm)', showInKeySpecs: true, icon: 'Ruler' },
            length: { label: 'Length (cm)', showInKeySpecs: true, icon: 'Ruler' },
            origin_country: { label: 'Country of Origin', showInKeySpecs: false },
            hs_code: { label: 'HS Code', showInKeySpecs: false },
            mid_code: { label: 'MID Code', showInKeySpecs: false },
        },
        de: {
            weight: { label: 'Gewicht (kg)', showInKeySpecs: true, icon: 'Weight' },
            height: { label: 'Höhe (cm)', showInKeySpecs: false },
            width: { label: 'Breite (cm)', showInKeySpecs: false },
            length: { label: 'Länge (cm)', showInKeySpecs: false },
            origin_country: { label: 'Herkunftsland', showInKeySpecs: false },
            hs_code: { label: 'HS-Code', showInKeySpecs: false },
            mid_code: { label: 'MID-Code', showInKeySpecs: false },
        },
        pl: {
            weight: { label: 'Waga (kg)', showInKeySpecs: true, icon: 'Weight' },
            height: { label: 'Wysokość (cm)', showInKeySpecs: false },
            width: { label: 'Szerokość (cm)', showInKeySpecs: false },
            length: { label: 'Długość (cm)', showInKeySpecs: false },
            origin_country: { label: 'Kraj pochodzenia', showInKeySpecs: false },
            hs_code: { label: 'Kod HS', showInKeySpecs: false },
            mid_code: { label: 'Kod MID', showInKeySpecs: false },
        },
    };

    const optionGroupsMappingMap: Record<string, Record<string, string>> = {
        en: {
            Size: 'Size',
            colors: 'Color',
        },
        de: {
            Size: 'Größe',
            colors: 'Farbe',
        },
        pl: {
            colors: 'Kolor',
            Size: 'Rozmiar',
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
        optionGroupsMapping: optionGroupsMappingMap[locale] || optionGroupsMappingMap['en'],
    };
};
