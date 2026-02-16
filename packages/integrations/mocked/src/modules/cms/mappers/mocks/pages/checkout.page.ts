import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

const createCheckoutPage = (
    id: string,
    slug: string,
    locale: string,
    title: string,
    description: string,
    blockTypename: string,
    blockId: string,
): CMS.Model.Page.Page => ({
    id,
    slug,
    locale,
    seo: {
        noIndex: false,
        noFollow: false,
        title,
        description,
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: blockTypename as CMS.Model.Page.SlotBlock['__typename'],
                    id: blockId,
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
});

// Checkout 1: Company Data
export const PAGE_CHECKOUT_COMPANY_DATA_EN = createCheckoutPage(
    'checkout-company-data-1',
    '/checkout/company-data',
    'en',
    'Company data',
    'Enter your company details',
    'CheckoutCompanyDataBlock',
    'checkout-company-data-1',
);
export const PAGE_CHECKOUT_COMPANY_DATA_DE = createCheckoutPage(
    'checkout-company-data-1',
    '/kasse/firmendaten',
    'de',
    'Firmendaten',
    'Geben Sie Ihre Firmendaten ein',
    'CheckoutCompanyDataBlock',
    'checkout-company-data-1',
);
export const PAGE_CHECKOUT_COMPANY_DATA_PL = createCheckoutPage(
    'checkout-company-data-1',
    '/zamowienie/dane-firmy',
    'pl',
    'Dane firmy',
    'Wprowadź dane firmy',
    'CheckoutCompanyDataBlock',
    'checkout-company-data-1',
);

// Checkout 2: Shipping Address
export const PAGE_CHECKOUT_SHIPPING_ADDRESS_EN = createCheckoutPage(
    'checkout-shipping-address-1',
    '/checkout/shipping-address',
    'en',
    'Shipping address',
    'Enter your shipping address',
    'CheckoutShippingAddressBlock',
    'checkout-shipping-address-1',
);
export const PAGE_CHECKOUT_SHIPPING_ADDRESS_DE = createCheckoutPage(
    'checkout-shipping-address-1',
    '/kasse/lieferadresse',
    'de',
    'Lieferadresse',
    'Geben Sie Ihre Lieferadresse ein',
    'CheckoutShippingAddressBlock',
    'checkout-shipping-address-1',
);
export const PAGE_CHECKOUT_SHIPPING_ADDRESS_PL = createCheckoutPage(
    'checkout-shipping-address-1',
    '/zamowienie/adres-dostawy',
    'pl',
    'Adres dostawy',
    'Wprowadź adres dostawy',
    'CheckoutShippingAddressBlock',
    'checkout-shipping-address-1',
);

// Checkout 3: Billing & Payment
export const PAGE_CHECKOUT_BILLING_PAYMENT_EN = createCheckoutPage(
    'checkout-billing-payment-1',
    '/checkout/billing-payment',
    'en',
    'Billing & payment',
    'Enter billing and payment details',
    'CheckoutBillingPaymentBlock',
    'checkout-billing-payment-1',
);
export const PAGE_CHECKOUT_BILLING_PAYMENT_DE = createCheckoutPage(
    'checkout-billing-payment-1',
    '/kasse/rechnung-zahlung',
    'de',
    'Rechnung & Zahlung',
    'Geben Sie Rechnungs- und Zahlungsdetails ein',
    'CheckoutBillingPaymentBlock',
    'checkout-billing-payment-1',
);
export const PAGE_CHECKOUT_BILLING_PAYMENT_PL = createCheckoutPage(
    'checkout-billing-payment-1',
    '/zamowienie/platnosc',
    'pl',
    'Płatność i rozliczenie',
    'Wprowadź dane rozliczeniowe i płatności',
    'CheckoutBillingPaymentBlock',
    'checkout-billing-payment-1',
);

// Checkout 4: Summary
export const PAGE_CHECKOUT_SUMMARY_EN = createCheckoutPage(
    'checkout-summary-1',
    '/checkout/summary',
    'en',
    'Order summary',
    'Review and place your order',
    'CheckoutSummaryBlock',
    'checkout-summary-1',
);
export const PAGE_CHECKOUT_SUMMARY_DE = createCheckoutPage(
    'checkout-summary-1',
    '/kasse/zusammenfassung',
    'de',
    'Bestellübersicht',
    'Überprüfen und bestellen',
    'CheckoutSummaryBlock',
    'checkout-summary-1',
);
export const PAGE_CHECKOUT_SUMMARY_PL = createCheckoutPage(
    'checkout-summary-1',
    '/zamowienie/podsumowanie',
    'pl',
    'Podsumowanie zamówienia',
    'Sprawdź i złóż zamówienie',
    'CheckoutSummaryBlock',
    'checkout-summary-1',
);
