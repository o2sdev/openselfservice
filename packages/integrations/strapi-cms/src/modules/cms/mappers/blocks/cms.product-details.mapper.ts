import { CMS } from '@o2s/framework/modules';

export const mapProductDetailsBlock = (locale: string): CMS.Model.ProductDetailsBlock.ProductDetailsBlock => {
    // TODO: Implement proper mapping from Strapi
    // For now, return a basic structure with labels

    const labelsMap: Record<string, CMS.Model.ProductDetailsBlock.Labels> = {
        en: {
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
            addToCartLabel: 'Add to Cart',
            addToCartSuccess: 'Product added to cart',
            addToCartError: 'Failed to add product to cart',
        },
        de: {
            specificationsTitle: 'Spezifikationen',
            descriptionTitle: 'Beschreibung',
            downloadLabel: 'Broschüre herunterladen',
            priceLabel: 'Preis',
            offerLabel: 'Angebot',
            addToCartLabel: 'In den Warenkorb',
            addToCartSuccess: 'Produkt wurde dem Warenkorb hinzugefügt',
            addToCartError: 'Fehler beim Hinzufügen zum Warenkorb',
        },
        pl: {
            specificationsTitle: 'Specyfikacja',
            descriptionTitle: 'Opis',
            downloadLabel: 'Pobierz broszurę',
            priceLabel: 'Cena',
            offerLabel: 'Oferta',
            addToCartLabel: 'Dodaj do koszyka',
            addToCartSuccess: 'Produkt dodany do koszyka',
            addToCartError: 'Nie udało się dodać produktu do koszyka',
        },
    };

    const labels = labelsMap[locale] ?? labelsMap['en']!;

    return {
        id: 'product-details-1',
        labels,
    };
};
