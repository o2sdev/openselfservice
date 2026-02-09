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
