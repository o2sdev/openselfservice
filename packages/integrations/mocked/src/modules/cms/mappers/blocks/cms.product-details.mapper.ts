import { CMS } from '@o2s/framework/modules';

const MOCK_PRODUCT_DETAILS_BLOCK_EN: CMS.Model.ProductDetailsBlock.ProductDetailsBlock = {
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
    basePath: '/products',
    attributes: [
        { key: 'weight', label: 'Weight (kg)', showInKeySpecs: true, icon: 'Weight' },
        { key: 'height', label: 'Height (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'width', label: 'Width (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'length', label: 'Length (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'origin_country', label: 'Country of Origin', showInKeySpecs: false },
        { key: 'hs_code', label: 'HS Code', showInKeySpecs: false },
        { key: 'mid_code', label: 'MID Code', showInKeySpecs: false },
    ],
    variantOptionGroups: [
        { medusaTitle: 'Size', label: 'Size' },
        { medusaTitle: 'colors', label: 'Color' },
    ],
};

const MOCK_PRODUCT_DETAILS_BLOCK_DE: CMS.Model.ProductDetailsBlock.ProductDetailsBlock = {
    id: 'product-details-1',
    labels: {
        actionButtonLabel: 'Angebot anfordern',
        specificationsTitle: 'Spezifikationen',
        descriptionTitle: 'Beschreibung',
        downloadLabel: 'Broschüre herunterladen',
        priceLabel: 'Preis',
        offerLabel: 'Angebot',
        variantLabel: 'Variante',
    },
    basePath: '/produkte',
    attributes: [
        { key: 'weight', label: 'Gewicht (kg)', showInKeySpecs: true, icon: 'Weight' },
        { key: 'height', label: 'Höhe (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'width', label: 'Breite (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'length', label: 'Länge (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'origin_country', label: 'Herkunftsland', showInKeySpecs: false },
        { key: 'hs_code', label: 'HS-Code', showInKeySpecs: false },
        { key: 'mid_code', label: 'MID-Code', showInKeySpecs: false },
    ],
    variantOptionGroups: [
        { medusaTitle: 'Size', label: 'Größe' },
        { medusaTitle: 'colors', label: 'Farbe' },
    ],
};

const MOCK_PRODUCT_DETAILS_BLOCK_PL: CMS.Model.ProductDetailsBlock.ProductDetailsBlock = {
    id: 'product-details-1',
    labels: {
        actionButtonLabel: 'Zapytaj o ofertę',
        specificationsTitle: 'Specyfikacja',
        descriptionTitle: 'Opis',
        downloadLabel: 'Pobierz broszurę',
        priceLabel: 'Cena',
        offerLabel: 'Oferta',
        variantLabel: 'Wariant',
    },
    basePath: '/produkty',
    attributes: [
        { key: 'weight', label: 'Waga (kg)', showInKeySpecs: true, icon: 'Weight' },
        { key: 'height', label: 'Wysokość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'width', label: 'Szerokość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'length', label: 'Długość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        { key: 'origin_country', label: 'Kraj pochodzenia', showInKeySpecs: false },
        { key: 'hs_code', label: 'Kod HS', showInKeySpecs: false },
    ],
    variantOptionGroups: [
        { medusaTitle: 'colors', label: 'Kolor' },
        { medusaTitle: 'Size', label: 'Rozmiar' },
    ],
};

export const mapProductDetailsBlock = (locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    switch (locale) {
        case 'en':
            return MOCK_PRODUCT_DETAILS_BLOCK_EN;
        case 'de':
            return MOCK_PRODUCT_DETAILS_BLOCK_DE;
        case 'pl':
            return MOCK_PRODUCT_DETAILS_BLOCK_PL;
        default:
            return MOCK_PRODUCT_DETAILS_BLOCK_EN;
    }
};
