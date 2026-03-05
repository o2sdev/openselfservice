import { CMS } from '@o2s/framework/modules';

const MOCK_CHECKOUT_SHIPPING_ADDRESS_EN: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Shipping',
    subtitle: 'Select shipping method and delivery address',
    fields: {
        sameAsBillingAddress: {
            label: 'Same as billing address',
        },
        firstName: {
            label: 'First name',
            placeholder: 'e.g. John',
            required: false,
        },
        lastName: {
            label: 'Last name',
            placeholder: 'e.g. Doe',
            required: false,
        },
        phone: {
            label: 'Phone',
            placeholder: 'e.g. +48 123 456 789',
            required: false,
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
        cartNotFound: 'Your cart is no longer available.',
        submitError: 'Something went wrong. Please try again.',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT',
        totalLabel: 'Total',
        discountLabel: 'Discount',
        shippingLabel: 'Shipping',
        freeLabel: 'Free',
    },
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 2,
    },
    cartPath: '/cart',
};

const MOCK_CHECKOUT_SHIPPING_ADDRESS_DE: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Lieferung',
    subtitle: 'Wählen Sie Versandart und Lieferadresse',
    fields: {
        sameAsBillingAddress: {
            label: 'Gleich wie Rechnungsadresse',
        },
        firstName: {
            label: 'Vorname',
            placeholder: 'z.B. Max',
            required: false,
        },
        lastName: {
            label: 'Nachname',
            placeholder: 'z.B. Mustermann',
            required: false,
        },
        phone: {
            label: 'Telefon',
            placeholder: 'z.B. +49 123 456 789',
            required: false,
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
        cartNotFound: 'Ihr Warenkorb ist nicht mehr verfügbar.',
        submitError: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
    summaryLabels: {
        title: 'Zusammenfassung',
        subtotalLabel: 'Nettosumme',
        taxLabel: 'MwSt.',
        totalLabel: 'Gesamt',
        discountLabel: 'Rabatt',
        shippingLabel: 'Versand',
        freeLabel: 'Kostenlos',
    },
    stepIndicator: {
        steps: ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung'],
        currentStep: 2,
    },
    cartPath: '/warenkorb',
};

const MOCK_CHECKOUT_SHIPPING_ADDRESS_PL: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock = {
    id: 'checkout-shipping-address-1',
    title: 'Dostawa',
    subtitle: 'Wybierz metodę dostawy i adres',
    fields: {
        sameAsBillingAddress: {
            label: 'Ten sam adres co adres rozliczeniowy',
        },
        firstName: {
            label: 'Imię',
            placeholder: 'np. Jan',
            required: false,
        },
        lastName: {
            label: 'Nazwisko',
            placeholder: 'np. Kowalski',
            required: false,
        },
        phone: {
            label: 'Telefon',
            placeholder: 'np. +48 123 456 789',
            required: false,
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
        cartNotFound: 'Twój koszyk jest niedostępny.',
        submitError: 'Wystąpił błąd. Spróbuj ponownie.',
    },
    summaryLabels: {
        title: 'Podsumowanie',
        subtotalLabel: 'Wartość netto',
        taxLabel: 'VAT',
        totalLabel: 'Razem',
        discountLabel: 'Rabat',
        shippingLabel: 'Dostawa',
        freeLabel: 'Gratis',
    },
    stepIndicator: {
        steps: ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie'],
        currentStep: 2,
    },
    cartPath: '/koszyk',
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
