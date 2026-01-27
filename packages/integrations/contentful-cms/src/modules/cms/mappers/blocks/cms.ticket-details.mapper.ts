import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_DETAILS_BLOCK_EN: CMS.Model.TicketDetailsBlock.TicketDetailsBlock = {
    id: 'ticket-list-1',
    title: 'Case details',
    commentsTitle: 'Comments',
    attachmentsTitle: 'Attachments',
    properties: {
        id: 'Case ID',
        status: 'Status',
        // Custom fields from Zendesk (using readable names from ZendeskFieldMapper)
        machineName: 'Machine Name',
        serialNumber: 'Serial Number',
        maintenanceType: 'Maintenance Type',
        preferredDate: 'Preferred Date',
        additionalNotes: 'Additional Notes',
        contactInformation: 'Contact Information',
        issueDate: 'Issue Date',
        organizationName: 'Organization Name',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        invoiceNumber: 'Invoice Number',
        address: 'Address',
        inquiryType: 'Inquiry Type',
        productCategory: 'Product Category',
        preferredContactMethod: 'Preferred Contact Method',
        termsAcceptance: 'Terms Acceptance',
        newsletterConsent: 'Newsletter Consent',
        marketingConsent: 'Marketing Consent',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Contact Form',
            REQUEST_DEVICE_MAINTENANCE: 'Device Maintenance',
            COMPLAINT: 'Complaint',
        },
        status: {
            OPEN: 'Under consideration',
            CLOSED: 'Resolved',
            IN_PROGRESS: 'New response',
        },
    },
    labels: {
        showMore: 'Show case details',
        showLess: 'Show less details',
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

const MOCK_TICKET_DETAILS_BLOCK_PL: CMS.Model.TicketDetailsBlock.TicketDetailsBlock = {
    id: 'ticket-list-1',
    title: 'Szczegóły zgłoszenia',
    commentsTitle: 'Komentarze',
    attachmentsTitle: 'Załączniki',
    properties: {
        id: 'ID zgłoszenia',
        status: 'Status',
        // Custom fields from Zendesk (using readable names from ZendeskFieldMapper)
        machineName: 'Nazwa urządzenia',
        serialNumber: 'Numer seryjny',
        maintenanceType: 'Typ konserwacji',
        preferredDate: 'Preferowana data',
        additionalNotes: 'Dodatkowe uwagi',
        contactInformation: 'Informacje kontaktowe',
        issueDate: 'Data wystąpienia problemu',
        organizationName: 'Nazwa organizacji',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'Email',
        phone: 'Telefon',
        invoiceNumber: 'Numer faktury',
        address: 'Adres',
        inquiryType: 'Typ zapytania',
        productCategory: 'Kategoria produktu',
        preferredContactMethod: 'Preferowana forma kontaktu',
        termsAcceptance: 'Akceptacja regulaminu',
        newsletterConsent: 'Zgoda na newsletter',
        marketingConsent: 'Zgoda marketingowa',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Formularz kontaktowy',
            REQUEST_DEVICE_MAINTENANCE: 'Konserwacja urządzenia',
            COMPLAINT: 'Reklamacja',
        },
        status: {
            OPEN: 'W rozpatrzeniu',
            CLOSED: 'Rozwiązane',
            IN_PROGRESS: 'Nowa odpowiedź',
        },
    },
    labels: {
        showMore: 'Pokaż szczegóły zgłoszenia',
        showLess: 'Pokaż mniej szczegółów',
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
};

const MOCK_TICKET_DETAILS_BLOCK_DE: CMS.Model.TicketDetailsBlock.TicketDetailsBlock = {
    id: 'ticket-list-1',
    title: 'Falldetails',
    commentsTitle: 'Kommentare',
    attachmentsTitle: 'Anhänge',
    properties: {
        id: 'Fall-ID',
        status: 'Status',
        // Custom fields from Zendesk (using readable names from ZendeskFieldMapper)
        machineName: 'Gerätename',
        serialNumber: 'Seriennummer',
        maintenanceType: 'Wartungstyp',
        preferredDate: 'Bevorzugtes Datum',
        additionalNotes: 'Zusätzliche Hinweise',
        contactInformation: 'Kontaktinformationen',
        issueDate: 'Problemdatum',
        organizationName: 'Organisationsname',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        invoiceNumber: 'Rechnungsnummer',
        address: 'Adresse',
        inquiryType: 'Anfragetyp',
        productCategory: 'Produktkategorie',
        preferredContactMethod: 'Bevorzugte Kontaktmethode',
        termsAcceptance: 'AGB-Akzeptanz',
        newsletterConsent: 'Newsletter-Zustimmung',
        marketingConsent: 'Marketing-Zustimmung',
    },
    fieldMapping: {
        topic: {
            CONTACT_US: 'Kontaktformular',
            REQUEST_DEVICE_MAINTENANCE: 'Gerätewartung',
            COMPLAINT: 'Beschwerde',
        },
        status: {
            OPEN: 'In Bearbeitung',
            CLOSED: 'Gelöst',
            IN_PROGRESS: 'Neue Antwort',
        },
    },
    labels: {
        showMore: 'Falldetails anzeigen',
        showLess: 'Weniger Details anzeigen',
        today: 'Heute',
        yesterday: 'Gestern',
    },
};

export const mapTicketDetailsBlock = (_locale: string): CMS.Model.TicketDetailsBlock.TicketDetailsBlock => {
    switch (_locale) {
        case 'pl':
            return MOCK_TICKET_DETAILS_BLOCK_PL;
        case 'de':
            return MOCK_TICKET_DETAILS_BLOCK_DE;
        default:
            return MOCK_TICKET_DETAILS_BLOCK_EN;
    }
};
