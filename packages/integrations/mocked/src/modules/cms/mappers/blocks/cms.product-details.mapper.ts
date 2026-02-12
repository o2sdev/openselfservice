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
        weight: 'Weight (kg)',
        height: 'Height (cm)',
        width: 'Width (cm)',
        length: 'Length (cm)',
        material: 'Material',
        origin_country: 'Country of Origin',
        hs_code: 'HS Code',
        mid_code: 'MID Code',
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
        weight: 'Gewicht (kg)',
        height: 'Höhe (cm)',
        width: 'Breite (cm)',
        length: 'Länge (cm)',
        material: 'Material',
        origin_country: 'Herkunftsland',
        hs_code: 'HS-Code',
        mid_code: 'MID-Code',
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
