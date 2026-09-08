import { CMS } from '@o2s/framework/modules';

export const checkoutCompanyDataPage = CMS.Pages.definePage({
    id: 'checkout-company-data-1',
    hasOwnTitle: true,
    locales: {
        en: {
            slug: '/checkout/company-data',
            seo: { title: 'Company data', description: 'Enter your company details' },
        },
        pl: { slug: '/zamowienie/dane-firmy', seo: { title: 'Dane firmy', description: 'Wprowadź dane firmy' } },
        de: {
            slug: '/kasse/firmendaten',
            seo: { title: 'Firmendaten', description: 'Geben Sie Ihre Firmendaten ein' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CheckoutCompanyDataBlock', id: 'checkout-company-data-1' }] },
    },
});

export const checkoutShippingAddressPage = CMS.Pages.definePage({
    id: 'checkout-shipping-address-1',
    hasOwnTitle: true,
    locales: {
        en: {
            slug: '/checkout/shipping-address',
            seo: { title: 'Shipping address', description: 'Enter your shipping address' },
        },
        pl: {
            slug: '/zamowienie/adres-dostawy',
            seo: { title: 'Adres dostawy', description: 'Wprowadź adres dostawy' },
        },
        de: {
            slug: '/kasse/lieferadresse',
            seo: { title: 'Lieferadresse', description: 'Geben Sie Ihre Lieferadresse ein' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CheckoutShippingAddressBlock', id: 'checkout-shipping-address-1' }] },
    },
});

export const checkoutBillingPaymentPage = CMS.Pages.definePage({
    id: 'checkout-billing-payment-1',
    hasOwnTitle: true,
    locales: {
        en: {
            slug: '/checkout/billing-payment',
            seo: { title: 'Billing & payment', description: 'Enter billing and payment details' },
        },
        pl: {
            slug: '/zamowienie/platnosc',
            seo: { title: 'Płatność i rozliczenie', description: 'Wprowadź dane rozliczeniowe i płatności' },
        },
        de: {
            slug: '/kasse/rechnung-zahlung',
            seo: { title: 'Rechnung & Zahlung', description: 'Geben Sie Rechnungs- und Zahlungsdetails ein' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CheckoutBillingPaymentBlock', id: 'checkout-billing-payment-1' }] },
    },
});

export const checkoutSummaryPage = CMS.Pages.definePage({
    id: 'checkout-summary-1',
    hasOwnTitle: true,
    locales: {
        en: { slug: '/checkout/summary', seo: { title: 'Order summary', description: 'Review and place your order' } },
        pl: {
            slug: '/zamowienie/podsumowanie',
            seo: { title: 'Podsumowanie zamówienia', description: 'Sprawdź i złóż zamówienie' },
        },
        de: {
            slug: '/kasse/zusammenfassung',
            seo: { title: 'Bestellübersicht', description: 'Überprüfen und bestellen' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CheckoutSummaryBlock', id: 'checkout-summary-1' }] },
    },
});
