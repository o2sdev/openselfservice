import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Contentful
    // For now, return a basic structure with labels

    const basePathMap: Record<string, string> = {
        en: '/products',
        de: '/produkte',
        pl: '/produkty',
    };

    const attributesMap: Record<string, CMS.Model.ProductDetailsBlock.AttributeConfig[]> = {
        en: [
            { key: 'weight', label: 'Weight (kg)', showInKeySpecs: true, icon: 'Weight' },
            { key: 'height', label: 'Height (cm)', showInKeySpecs: true, icon: 'Ruler' },
            { key: 'width', label: 'Width (cm)', showInKeySpecs: true, icon: 'Ruler' },
            { key: 'length', label: 'Length (cm)', showInKeySpecs: true, icon: 'Ruler' },
            { key: 'origin_country', label: 'Country of Origin', showInKeySpecs: false },
            { key: 'hs_code', label: 'HS Code', showInKeySpecs: false },
            { key: 'mid_code', label: 'MID Code', showInKeySpecs: false },
        ],
        de: [
            { key: 'weight', label: 'Gewicht (kg)', showInKeySpecs: true, icon: 'Weight' },
            { key: 'height', label: 'Höhe (cm)', showInKeySpecs: false },
            { key: 'width', label: 'Breite (cm)', showInKeySpecs: false },
            { key: 'length', label: 'Länge (cm)', showInKeySpecs: false },
            { key: 'origin_country', label: 'Herkunftsland', showInKeySpecs: false },
            { key: 'hs_code', label: 'HS-Code', showInKeySpecs: false },
            { key: 'mid_code', label: 'MID-Code', showInKeySpecs: false },
        ],
        pl: [
            { key: 'weight', label: 'Waga (kg)', showInKeySpecs: true, icon: 'Weight' },
            { key: 'height', label: 'Wysokość (cm)', showInKeySpecs: false },
            { key: 'width', label: 'Szerokość (cm)', showInKeySpecs: false },
            { key: 'length', label: 'Długość (cm)', showInKeySpecs: false },
            { key: 'origin_country', label: 'Kraj pochodzenia', showInKeySpecs: false },
            { key: 'hs_code', label: 'Kod HS', showInKeySpecs: false },
            { key: 'mid_code', label: 'Kod MID', showInKeySpecs: false },
        ],
    };

    const variantOptionGroupsMap: Record<string, CMS.Model.ProductDetailsBlock.VariantOptionGroupConfig[]> = {
        en: [
            { medusaTitle: 'Size', label: 'Size' },
            { medusaTitle: 'colors', label: 'Color' },
        ],
        de: [
            { medusaTitle: 'Size', label: 'Größe' },
            { medusaTitle: 'colors', label: 'Farbe' },
        ],
        pl: [
            { medusaTitle: 'colors', label: 'Kolor' },
            { medusaTitle: 'Size', label: 'Rozmiar' },
        ],
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
        attributes: attributesMap[locale] || attributesMap['en'],
        variantOptionGroups: variantOptionGroupsMap[locale] || variantOptionGroupsMap['en'],
    };
};
