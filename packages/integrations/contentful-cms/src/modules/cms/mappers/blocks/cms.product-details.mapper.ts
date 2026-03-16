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

    const labelsMap: Record<string, CMS.Model.ProductDetailsBlock.Labels> = {
        en: {
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
            variantLabel: 'Variant',
            addToCartLabel: 'Add to Cart',
            addToCartSuccess: '{productName} added to cart',
            addToCartError: 'Failed to add product to cart',
            viewCartLabel: 'View Cart',
        },
        de: {
            specificationsTitle: 'Spezifikationen',
            descriptionTitle: 'Beschreibung',
            downloadLabel: 'Broschüre herunterladen',
            priceLabel: 'Preis',
            offerLabel: 'Angebot',
            variantLabel: 'Variante',
            addToCartLabel: 'In den Warenkorb',
            addToCartSuccess: '{productName} zum Warenkorb hinzugefügt',
            addToCartError: 'Fehler beim Hinzufügen zum Warenkorb',
            viewCartLabel: 'Warenkorb anzeigen',
        },
        pl: {
            specificationsTitle: 'Specyfikacja',
            descriptionTitle: 'Opis',
            downloadLabel: 'Pobierz broszurę',
            priceLabel: 'Cena',
            offerLabel: 'Oferta',
            variantLabel: 'Wariant',
            addToCartLabel: 'Dodaj do koszyka',
            addToCartSuccess: '{productName} dodany do koszyka',
            addToCartError: 'Nie udało się dodać produktu do koszyka',
            viewCartLabel: 'Zobacz koszyk',
        },
    };

    const cartPathMap: Record<string, string> = {
        en: '/cart',
        de: '/warenkorb',
        pl: '/koszyk',
    };

    const labels = labelsMap[locale] ?? labelsMap['en']!;

    return {
        id: 'product-details-1',
        labels,
        cartPath: cartPathMap[locale] || cartPathMap['en'],
        basePath: basePathMap[locale] || basePathMap['en'],
        attributes: attributesMap[locale] || attributesMap['en'],
        variantOptionGroups: variantOptionGroupsMap[locale] || variantOptionGroupsMap['en'],
    };
};
