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
    specFieldsMapping: {
        weight: { label: 'Weight (kg)', showInKeySpecs: true, icon: 'Weight' },
        height: { label: 'Height (cm)', showInKeySpecs: true, icon: 'Ruler' },
        width: { label: 'Width (cm)', showInKeySpecs: true, icon: 'Ruler' },
        length: { label: 'Length (cm)', showInKeySpecs: true, icon: 'Ruler' },
        origin_country: { label: 'Country of Origin', showInKeySpecs: false },
        hs_code: { label: 'HS Code', showInKeySpecs: false },
        mid_code: { label: 'MID Code', showInKeySpecs: false },
    },
    optionGroupsMapping: {
        Size: 'Size',
        colors: 'Color',
    },
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
    specFieldsMapping: {
        weight: { label: 'Gewicht (kg)', showInKeySpecs: true, icon: 'Weight' },
        height: { label: 'Höhe (cm)', showInKeySpecs: true, icon: 'Ruler' },
        width: { label: 'Breite (cm)', showInKeySpecs: true, icon: 'Ruler' },
        length: { label: 'Länge (cm)', showInKeySpecs: true, icon: 'Ruler' },
        origin_country: { label: 'Herkunftsland', showInKeySpecs: false },
        hs_code: { label: 'HS-Code', showInKeySpecs: false },
        mid_code: { label: 'MID-Code', showInKeySpecs: false },
    },
    optionGroupsMapping: {
        Size: 'Größe',
        colors: 'Farbe',
    },
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
    specFieldsMapping: {
        weight: { label: 'Waga (kg)', showInKeySpecs: true, icon: 'Weight' },
        height: { label: 'Wysokość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        width: { label: 'Szerokość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        length: { label: 'Długość (cm)', showInKeySpecs: true, icon: 'Ruler' },
        origin_country: { label: 'Kraj pochodzenia', showInKeySpecs: false },
        hs_code: { label: 'Kod HS', showInKeySpecs: false },
    },
    optionGroupsMapping: {
        colors: 'Kolor',
        Size: 'Rozmiar',
    },
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
