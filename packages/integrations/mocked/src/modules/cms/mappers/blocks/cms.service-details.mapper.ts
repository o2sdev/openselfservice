import { CMS } from '@o2s/framework/modules';

const MOCK_SERVICE_DETAILS_BLOCK_EN: CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock = {
    id: 'service-list-1',
    title: 'Service details',
    properties: {
        price: 'Price',
        status: 'Status',
        type: 'Type',
        category: 'Category',
        startDate: 'Start date',
        endDate: 'End date',
    },
    fields: {
        type: {
            PHYSICAL: 'Physical',
            VIRTUAL: 'Virtual',
        },
        category: {
            TOOLS: 'Tools',
            HARDWARE: 'Hardware',
            SOFTWARE: 'Software',
            MEASUREMENT: 'Measurement',
            SAFETY: 'Safety',
            TRAINING: 'Training',
            RENTAL: 'Rental',
            MAINTENANCE: 'Maintenance',
        },
        status: {
            ACTIVE: 'Active',
            INACTIVE: 'Inactive',
            EXPIRED: 'Expired',
        },
        paymentPeriod: {
            MONTHLY: 'mo',
            YEARLY: 'ye',
        },
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        settings: 'Settings',
        renew: 'Renew',
    },
};

const MOCK_SERVICE_DETAILS_BLOCK_PL: CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock = {
    id: 'service-list-1',
    title: 'Szczegóły sprawy',
    properties: {
        id: 'ID sprawy',
        topic: 'Temat',
        type: 'Typ sprawy',
        status: 'Status',
        description: 'Dodatkowe notatki',
        address: 'Adres serwisowy',
        contact: 'Forma kontaktu',
    },
    fields: {
        type: {
            PHYSICAL: 'Fizyczny',
            VIRTUAL: 'Wirtualny',
        },
        category: {
            TOOLS: 'Narzędzia',
            HARDWARE: 'Sprzęt',
            SOFTWARE: 'Oprogramowanie',
            MEASUREMENT: 'Pomiar',
        },
        status: {
            ACTIVE: 'Aktywny',
            INACTIVE: 'Nieaktywny',
            EXPIRED: 'Wygasły',
        },
        paymentPeriod: {
            MONTHLY: 'Miesięczny',
            YEARLY: 'Roczny',
        },
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        settings: 'Ustawienia',
        renew: 'Odnowić',
    },
};

const MOCK_SERVICE_DETAILS_BLOCK_DE: CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock = {
    id: 'service-list-1',
    title: 'Falldetails',
    properties: {
        id: 'Fall-ID',
        topic: 'Thema',
        type: 'Falltyp',
        status: 'Status',
        description: 'Zusätzliche Notizen',
        address: 'Serviceadresse',
        contact: 'Kontaktform',
    },
    fields: {
        type: {
            PHYSICAL: 'Physikalisch',
            VIRTUAL: 'Virtuell',
        },
        category: {
            TOOLS: 'Werkzeuge',
            HARDWARE: 'Hardware',
            SOFTWARE: 'Software',
            MEASUREMENT: 'Messung',
        },
        status: {
            ACTIVE: 'Aktiv',
            INACTIVE: 'Inaktiv',
            EXPIRED: 'Abgelaufen',
        },
        paymentPeriod: {
            MONTHLY: 'Monatlich',
            YEARLY: 'Jährlich',
        },
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        settings: 'Einstellungen',
        renew: 'Erneuern',
    },
};

export const mapServiceDetailsBlock = (_locale: string): CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock => {
    switch (_locale) {
        case 'pl':
            return MOCK_SERVICE_DETAILS_BLOCK_PL;
        case 'de':
            return MOCK_SERVICE_DETAILS_BLOCK_DE;
        default:
            return MOCK_SERVICE_DETAILS_BLOCK_EN;
    }
};
