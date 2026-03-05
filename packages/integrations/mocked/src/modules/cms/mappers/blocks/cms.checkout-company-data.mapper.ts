import { CMS } from '@o2s/framework/modules';

const MOCK_CHECKOUT_COMPANY_DATA_EN: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock = {
    id: 'checkout-company-data-1',
    title: 'Company details',
    subtitle: 'Fill in your company details',
    fields: {
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
        email: {
            label: 'Email',
            placeholder: 'e.g. john@example.com',
            required: true,
        },
        phone: {
            label: 'Phone',
            placeholder: 'e.g. +48 123 456 789',
            required: false,
        },
        companyName: {
            label: 'Company name',
            placeholder: 'e.g. ACME Inc.',
            required: true,
        },
        taxId: {
            label: 'Tax ID (NIP)',
            placeholder: 'XXXXXXXXXX',
            required: true,
        },
        notes: {
            label: 'Order notes',
            placeholder: 'Any additional information about your order...',
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
    },
    buttons: {
        back: { label: 'Back to cart', path: '/cart' },
        next: { label: 'Next', path: '/checkout/shipping-address' },
    },
    errors: {
        required: 'This field is required',
        invalidTaxId: 'Invalid tax ID',
        invalidPostalCode: 'Invalid postal code',
        invalidEmail: 'Invalid email address',
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
        currentStep: 1,
    },
    billingInfoNote: {
        icon: 'Info',
        text: 'This address will appear on your invoice.',
    },
    cartPath: '/cart',
};

const MOCK_CHECKOUT_COMPANY_DATA_DE: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock = {
    id: 'checkout-company-data-1',
    title: 'Firmendaten',
    subtitle: 'Geben Sie Ihre Firmendaten ein',
    fields: {
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
        email: {
            label: 'E-Mail',
            placeholder: 'z.B. max@beispiel.de',
            required: true,
        },
        phone: {
            label: 'Telefon',
            placeholder: 'z.B. +49 123 456 789',
            required: false,
        },
        companyName: {
            label: 'Firmenname',
            placeholder: 'z.B. ACME GmbH',
            required: true,
        },
        taxId: {
            label: 'USt-IdNr. / Steuer-ID',
            placeholder: 'XXXXXXXXXX',
            required: true,
        },
        notes: {
            label: 'Bestellhinweise',
            placeholder: 'Zusätzliche Informationen zu Ihrer Bestellung...',
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
    },
    buttons: {
        back: { label: 'Zurück zum Warenkorb', path: '/warenkorb' },
        next: { label: 'Weiter', path: '/kasse/lieferadresse' },
    },
    errors: {
        required: 'Dieses Feld ist erforderlich',
        invalidTaxId: 'Ungültige Steuer-ID',
        invalidPostalCode: 'Ungültige Postleitzahl',
        invalidEmail: 'Ungültige E-Mail-Adresse',
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
        currentStep: 1,
    },
    billingInfoNote: {
        icon: 'Info',
        text: 'Diese Adresse erscheint auf Ihrer Rechnung.',
    },
    cartPath: '/warenkorb',
};

const MOCK_CHECKOUT_COMPANY_DATA_PL: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock = {
    id: 'checkout-company-data-1',
    title: 'Dane firmy',
    subtitle: 'Wypełnij dane firmowe',
    fields: {
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
        email: {
            label: 'Email',
            placeholder: 'np. jan@example.com',
            required: true,
        },
        phone: {
            label: 'Telefon',
            placeholder: 'np. +48 123 456 789',
            required: false,
        },
        companyName: {
            label: 'Nazwa firmy',
            placeholder: 'np. ACME Sp. z o.o.',
            required: true,
        },
        taxId: {
            label: 'NIP',
            placeholder: 'XXXXXXXXXX',
            required: true,
        },
        notes: {
            label: 'Uwagi do zamówienia',
            placeholder: 'Dodatkowe informacje do zamówienia...',
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
    },
    buttons: {
        back: { label: 'Wróć do koszyka', path: '/koszyk' },
        next: { label: 'Dalej', path: '/zamowienie/adres-dostawy' },
    },
    errors: {
        required: 'To pole jest wymagane',
        invalidTaxId: 'Nieprawidłowy NIP',
        invalidPostalCode: 'Nieprawidłowy kod pocztowy',
        invalidEmail: 'Nieprawidłowy adres email',
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
        currentStep: 1,
    },
    billingInfoNote: {
        icon: 'Info',
        text: 'Ten adres będzie widoczny na fakturze.',
    },
    cartPath: '/koszyk',
};

export const mapCheckoutCompanyDataBlock = (
    options: CMS.Request.GetCmsEntryParams,
): CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_CHECKOUT_COMPANY_DATA_PL;
        case 'de':
            return MOCK_CHECKOUT_COMPANY_DATA_DE;
        default:
            return MOCK_CHECKOUT_COMPANY_DATA_EN;
    }
};
