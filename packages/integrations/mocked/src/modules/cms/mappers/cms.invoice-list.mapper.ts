import { CMS } from '@o2s/framework/modules';

const MOCK_INVOICE_LIST_BLOCK_EN: CMS.Model.InvoiceListBlock.InvoiceListBlock = {
    id: 'invoice-list-1',
    title: 'Invoices',
    fieldMapping: {
        type: {
            STANDARD: 'Standard',
            PROFORMA: 'Proforma',
            CREDIT_NOTE: 'Credit Note',
            DEBIT_NOTE: 'Debit Note',
        },
        paymentStatus: {
            PAYMENT_COMPLETE: 'Paid',
            PAYMENT_DECLINED: 'Declined',
            PAYMENT_DUE: 'Due',
            PAYMENT_PAST_DUE: 'Past Due',
        },
    },
    tableTitle: 'List of your invoices',
    table: {
        columns: [
            { id: 'type', title: 'Invoice Type' },
            { id: 'id', title: 'Invoice Number' },
            { id: 'paymentDueDate', title: 'Due Date' },
            { id: 'paymentStatus', title: 'Payment Status' },
            { id: 'totalAmountDue', title: 'Total Amount Due' },
            { id: 'amountToPay', title: 'To be Paid' },
        ],
        actions: {
            title: 'Actions',
            label: 'Download',
        },
    },
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter & Sort',
        title: 'Filter Invoices',
        description: 'Use filters to find specific invoices',
        submit: 'Apply Filters',
        reset: 'Reset Filters',
        close: 'Close filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort',
                allowMultiple: false,
                options: [
                    { label: 'Document Type (ascending)', value: 'type_ASC' },
                    { label: 'Document Type (descending)', value: 'type_DESC' },
                    { label: 'Payment Status (ascending)', value: 'paymentStatus_ASC' },
                    { label: 'Payment Status (descending)', value: 'paymentStatus_DESC' },
                    { label: 'Payment Due Date (ascending)', value: 'paymentDueDate_ASC' },
                    { label: 'Payment Due Date (descending)', value: 'paymentDueDate_DESC' },
                    { label: 'Total Amount Due (ascending)', value: 'totalAmountDue_ASC' },
                    { label: 'Total Amount Due (descending)', value: 'totalAmountDue_DESC' },
                    { label: 'To Be Paid (ascending)', value: 'totalToBePaid_ASC' },
                    { label: 'To Be Paid (descending)', value: 'totalToBePaid_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Invoice Type',
                allowMultiple: true,
                options: [
                    { label: 'Standard', value: 'STANDARD' },
                    { label: 'Proforma', value: 'PROFORMA' },
                    { label: 'Credit Note', value: 'CREDIT_NOTE' },
                    { label: 'Debit Note', value: 'DEBIT_NOTE' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'paymentStatus',
                label: 'Payment Status',
                allowMultiple: true,
                options: [
                    { label: 'Paid', value: 'PAYMENT_COMPLETE' },
                    { label: 'Declined', value: 'PAYMENT_DECLINED' },
                    { label: 'Due', value: 'PAYMENT_DUE' },
                    { label: 'Past Due', value: 'PAYMENT_PAST_DUE' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'issuedDate',
                label: 'Issue Date',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    noResults: {
        title: 'No Invoices Found',
        description: 'There are no invoices matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    downloadFileName: 'invoice-{id}.pdf',
    downloadButtonAriaDescription: 'Download invoice {id}',
};

const MOCK_INVOICE_LIST_BLOCK_DE: CMS.Model.InvoiceListBlock.InvoiceListBlock = {
    id: 'invoice-list-1',
    title: 'Rechnungen',
    fieldMapping: {
        type: {
            STANDARD: 'Standard',
            PROFORMA: 'Proforma',
            CREDIT_NOTE: 'Gutschrift',
            DEBIT_NOTE: 'Lastschrift',
        },
        paymentStatus: {
            PAYMENT_COMPLETE: 'Bezahlt',
            PAYMENT_DECLINED: 'Abgelehnt',
            PAYMENT_DUE: 'Fällig',
            PAYMENT_PAST_DUE: 'Überfällig',
        },
    },
    tableTitle: 'Liste Ihrer Rechnungen',
    table: {
        columns: [
            { id: 'type', title: 'Rechnungstyp' },
            { id: 'id', title: 'Rechnungsnummer' },
            { id: 'paymentDueDate', title: 'Fälligkeitsdatum' },
            { id: 'paymentStatus', title: 'Zahlungsstatus' },
            { id: 'totalAmountDue', title: 'Gesamtbetrag' },
            { id: 'amountToPay', title: 'Zu zahlen' },
        ],
        actions: {
            title: 'Aktionen',
            label: 'Herunterladen',
        },
    },
    pagination: {
        limit: 5,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
    filters: {
        label: 'Filtern & Sortieren',
        title: 'Rechnungen filtern',
        description: 'Verwenden Sie Filter, um bestimmte Rechnungen zu finden',
        submit: 'Filter anwenden',
        reset: 'Filter zurücksetzen',
        close: 'Filter schließen',
        removeFilters: 'Filter entfernen ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren',
                allowMultiple: false,
                options: [
                    { label: 'Dokumenttyp (aufsteigend)', value: 'type_ASC' },
                    { label: 'Dokumenttyp (absteigend)', value: 'type_DESC' },
                    { label: 'Zahlungsstatus (aufsteigend)', value: 'paymentStatus_ASC' },
                    { label: 'Zahlungsstatus (absteigend)', value: 'paymentStatus_DESC' },
                    { label: 'Fälligkeitsdatum (aufsteigend)', value: 'paymentDueDate_ASC' },
                    { label: 'Fälligkeitsdatum (absteigend)', value: 'paymentDueDate_DESC' },
                    { label: 'Gesamtbetrag (aufsteigend)', value: 'totalAmountDue_ASC' },
                    { label: 'Gesamtbetrag (absteigend)', value: 'totalAmountDue_DESC' },
                    { label: 'Zu zahlen (aufsteigend)', value: 'amountToPay_ASC' },
                    { label: 'Zu zahlen (absteigend)', value: 'amountToPay_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Rechnungstyp',
                allowMultiple: true,
                options: [
                    { label: 'Standard', value: 'STANDARD' },
                    { label: 'Proforma', value: 'PROFORMA' },
                    { label: 'Gutschrift', value: 'CREDIT_NOTE' },
                    { label: 'Lastschrift', value: 'DEBIT_NOTE' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'paymentStatus',
                label: 'Zahlungsstatus',
                allowMultiple: true,
                options: [
                    { label: 'Bezahlt', value: 'PAYMENT_COMPLETE' },
                    { label: 'Abgelehnt', value: 'PAYMENT_DECLINED' },
                    { label: 'Fällig', value: 'PAYMENT_DUE' },
                    { label: 'Überfällig', value: 'PAYMENT_PAST_DUE' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'issuedDate',
                label: 'Ausstellungsdatum',
                from: {
                    label: 'Von',
                },
                to: {
                    label: 'Bis',
                },
            },
        ],
    },
    noResults: {
        title: 'Keine Rechnungen gefunden',
        description: 'Es wurden keine Rechnungen gefunden, die Ihren Kriterien entsprechen',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    downloadFileName: 'rechnung-{id}.pdf',
    downloadButtonAriaDescription: 'Rechnung {id} herunterladen',
};

const MOCK_INVOICE_LIST_BLOCK_PL: CMS.Model.InvoiceListBlock.InvoiceListBlock = {
    id: 'invoice-list-1',
    title: 'Faktury',
    fieldMapping: {
        type: {
            STANDARD: 'Standardowa',
            PROFORMA: 'Proforma',
            CREDIT_NOTE: 'Nota kredytowa',
            DEBIT_NOTE: 'Nota debetowa',
        },
        paymentStatus: {
            PAYMENT_COMPLETE: 'Opłacona',
            PAYMENT_DECLINED: 'Odrzucona',
            PAYMENT_DUE: 'Do zapłaty',
            PAYMENT_PAST_DUE: 'Zaległa',
        },
    },
    tableTitle: 'Lista Twoich faktur',
    table: {
        columns: [
            { id: 'type', title: 'Typ faktury' },
            { id: 'id', title: 'Numer faktury' },
            { id: 'paymentDueDate', title: 'Termin płatności' },
            { id: 'paymentStatus', title: 'Status płatności' },
            { id: 'totalAmountDue', title: 'Kwota do zapłaty' },
            { id: 'amountToPay', title: 'Do zapłacenia' },
        ],
        actions: {
            title: 'Akcje',
            label: 'Pobierz',
        },
    },
    pagination: {
        limit: 5,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    filters: {
        label: 'Filtruj i sortuj',
        title: 'Filtruj faktury',
        description: 'Użyj filtrów, aby znaleźć konkretne faktury',
        submit: 'Zastosuj filtry',
        reset: 'Resetuj filtry',
        close: 'Zamknij filtry',
        removeFilters: 'Usuń filtry ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj',
                allowMultiple: false,
                options: [
                    { label: 'Typ dokumentu (rosnąco)', value: 'type_ASC' },
                    { label: 'Typ dokumentu (malejąco)', value: 'type_DESC' },
                    { label: 'Status płatności (rosnąco)', value: 'paymentStatus_ASC' },
                    { label: 'Status płatności (malejąco)', value: 'paymentStatus_DESC' },
                    { label: 'Termin płatności (rosnąco)', value: 'paymentDueDate_ASC' },
                    { label: 'Termin płatności (malejąco)', value: 'paymentDueDate_DESC' },
                    { label: 'Kwota do zapłaty (rosnąco)', value: 'totalAmountDue_ASC' },
                    { label: 'Kwota do zapłaty (malejąco)', value: 'totalAmountDue_DESC' },
                    { label: 'Do zapłacenia (rosnąco)', value: 'amountToPay_ASC' },
                    { label: 'Do zapłacenia (malejąco)', value: 'amountToPay_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Typ faktury',
                allowMultiple: true,
                options: [
                    { label: 'Standardowa', value: 'STANDARD' },
                    { label: 'Proforma', value: 'PROFORMA' },
                    { label: 'Nota kredytowa', value: 'CREDIT_NOTE' },
                    { label: 'Nota debetowa', value: 'DEBIT_NOTE' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'paymentStatus',
                label: 'Status płatności',
                allowMultiple: true,
                options: [
                    { label: 'Opłacona', value: 'PAYMENT_COMPLETE' },
                    { label: 'Odrzucona', value: 'PAYMENT_DECLINED' },
                    { label: 'Do zapłaty', value: 'PAYMENT_DUE' },
                    { label: 'Zaległa', value: 'PAYMENT_PAST_DUE' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'issuedDate',
                label: 'Data wystawienia',
                from: {
                    label: 'Od',
                },
                to: {
                    label: 'Do',
                },
            },
        ],
    },
    noResults: {
        title: 'Nie znaleziono faktur',
        description: 'Nie znaleziono faktur spełniających podane kryteria',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    downloadFileName: 'faktura-{id}.pdf',
    downloadButtonAriaDescription: 'Pobierz fakturę {id}',
};

export const mapInvoiceListBlock = (locale: string): CMS.Model.InvoiceListBlock.InvoiceListBlock => {
    switch (locale) {
        case 'de':
            return MOCK_INVOICE_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_INVOICE_LIST_BLOCK_PL;
        default:
            return MOCK_INVOICE_LIST_BLOCK_EN;
    }
};
