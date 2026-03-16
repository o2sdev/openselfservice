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
    };
};
