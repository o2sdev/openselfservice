import { CMS } from '@o2s/framework/modules';

const MOCK_CHECKOUT_SHIPPING_ADDRESS_EN: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Shipping address',
    subtitle: 'Select shipping method and delivery address',
    fields: {
        sameAsBillingAddress: {
            label: 'Same as billing address',
        },
        address: {
            streetName: {
                label: 'Street name',
                placeholder: 'e.g. Main Street',
                required: true,
            },
            streetNumber: {
                label: 'Number',
                placeholder: 'e.g. 123',
                required: true,
            },
            apartment: {
                label: 'Apartment / suite',
                placeholder: 'e.g. 4B',
                required: false,
            },
            city: {
                label: 'City',
                placeholder: 'City',
                required: true,
            },
            postalCode: {
                label: 'Postal code',
                placeholder: 'XX-XXX',
                required: true,
            },
            country: {
                label: 'Country',
                placeholder: 'Country',
                required: true,
            },
        },
        shippingMethod: {
            label: 'Shipping method',
            placeholder: 'Select method',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Back', path: '/checkout/company-data' },
        next: { label: 'Next', path: '/checkout/billing-payment' },
    },
    errors: {
        required: 'This field is required',
        invalidPostalCode: 'Invalid postal code',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
    },
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 2,
    },
};

const MOCK_CHECKOUT_SHIPPING_ADDRESS_DE: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Lieferadresse',
    subtitle: 'Wählen Sie Versandart und Lieferadresse',
    fields: {
        sameAsBillingAddress: {
            label: 'Gleich wie Rechnungsadresse',
        },
        address: {
            streetName: {
                label: 'Straße',
                placeholder: 'z.B. Musterstraße',
                required: true,
            },
            streetNumber: {
                label: 'Hausnummer',
                placeholder: 'z.B. 1',
                required: true,
            },
            apartment: {
                label: 'Zusatz',
                placeholder: 'z.B. 2. OG',
                required: false,
            },
            city: {
                label: 'Stadt',
                placeholder: 'Berlin',
                required: true,
            },
            postalCode: {
                label: 'Postleitzahl',
                placeholder: 'XXXXX',
                required: true,
            },
            country: {
                label: 'Land',
                placeholder: 'Deutschland',
                required: true,
            },
        },
        shippingMethod: {
            label: 'Versandart',
            placeholder: 'Methode wählen',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Zurück', path: '/kasse/firmendaten' },
        next: { label: 'Weiter', path: '/kasse/rechnung-zahlung' },
    },
    errors: {
        required: 'Dieses Feld ist erforderlich',
        invalidPostalCode: 'Ungültige Postleitzahl',
    },
    summaryLabels: {
        title: 'Zusammenfassung',
        subtotalLabel: 'Nettosumme',
        taxLabel: 'MwSt. (23%)',
        totalLabel: 'Gesamt',
    },
    stepIndicator: {
        steps: ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung'],
        currentStep: 2,
    },
};

const MOCK_CHECKOUT_SHIPPING_ADDRESS_PL: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Adres dostawy',
    subtitle: 'Wybierz metodę dostawy i adres',
    fields: {
        sameAsBillingAddress: {
            label: 'Ten sam adres co adres rozliczeniowy',
        },
        address: {
            streetName: {
                label: 'Ulica',
                placeholder: 'np. ul. Przykładowa',
                required: true,
            },
            streetNumber: {
                label: 'Numer',
                placeholder: 'np. 1',
                required: true,
            },
            apartment: {
                label: 'Lokal',
                placeholder: 'np. 4B',
                required: false,
            },
            city: {
                label: 'Miasto',
                placeholder: 'Warszawa',
                required: true,
            },
            postalCode: {
                label: 'Kod pocztowy',
                placeholder: 'XX-XXX',
                required: true,
            },
            country: {
                label: 'Kraj',
                placeholder: 'Polska',
                required: true,
            },
        },
        shippingMethod: {
            label: 'Metoda dostawy',
            placeholder: 'Wybierz metodę',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Wstecz', path: '/zamowienie/dane-firmy' },
        next: { label: 'Dalej', path: '/zamowienie/platnosc' },
    },
    errors: {
        required: 'To pole jest wymagane',
        invalidPostalCode: 'Nieprawidłowy kod pocztowy',
    },
    summaryLabels: {
        title: 'Podsumowanie',
        subtotalLabel: 'Wartość netto',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Razem',
    },
    stepIndicator: {
        steps: ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie'],
        currentStep: 2,
    },
};

export const mapCheckoutShippingAddressBlock = (
    options: CMS.Request.GetCmsEntryParams,
): CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_CHECKOUT_SHIPPING_ADDRESS_PL;
        case 'de':
            return MOCK_CHECKOUT_SHIPPING_ADDRESS_DE;
        default:
            return MOCK_CHECKOUT_SHIPPING_ADDRESS_EN;
    }
};
