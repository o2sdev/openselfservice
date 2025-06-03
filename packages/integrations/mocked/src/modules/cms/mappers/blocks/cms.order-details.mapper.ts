import { CMS } from '@o2s/framework/modules';

const MOCK_ORDER_DETAILS_BLOCK_EN: CMS.Model.OrderDetailsBlock.OrderDetailsBlock = {
    id: 'order-details-1',
    title: 'Order details',
    totalValue: {
        title: 'Order value',
        icon: 'Package',
        message: '{value} times',
    },
    createdOrderAt: {
        title: 'Order date',
        icon: 'CalendarClock',
    },
    paymentDueDate: {
        title: 'Payment due date',
        icon: 'Coins',
        message: 'Document no. {value}',
    },
    overdue: {
        title: 'Overdue',
        icon: 'Info',
        message: '{days} days overdue',
        altMessage: 'No orders to be paid',
    },
    orderStatus: {
        title: 'Order status',
        icon: 'CheckCheck',
    },
    customerComment: {
        title: 'Comment',
        icon: 'Text',
        link: {
            label: 'See full',
            icon: 'ArrowRight',
            url: '',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Pending',
            COMPLETED: 'Completed',
            SHIPPED: 'Shipped',
            CANCELLED: 'Cancelled',
            ARCHIVED: 'Archived',
            REQUIRES_ACTION: 'Requires Action',
            UNKNOWN: 'Unknown',
        },
        unit: {
            PCS: 'pcs',
            SET: 'set',
            BOX: 'box',
            KG: 'kg',
            L: 'l',
        },
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        showMore: 'Show more',
        close: 'Close',
    },
    productsTitle: 'Product list',
    table: {
        columns: [
            { id: 'image', title: 'Image' },
            { id: 'name', title: 'Name' },
            { id: 'sku', title: 'SKU no.' },
            { id: 'unit', title: 'Unit' },
            { id: 'price', title: 'Net price' },
            { id: 'discountTotal', title: 'Discount' },
            { id: 'quantity', title: 'Items' },
            { id: 'total', title: 'Net value' },
        ],
    },
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filters & Sort',
        title: 'Filters & Sort',
        description: 'Filter your products by name, type, or date range to find what you need quickly.',
        submit: 'Apply',
        reset: 'Clear',
        close: 'Close filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Name (ascending)', value: 'name_ASC' },
                    { label: 'Name (descending)', value: 'name_DESC' },
                    { label: 'SKU (ascending)', value: 'sku_ASC' },
                    { label: 'SKU (descending)', value: 'sku_DESC' },
                    { label: 'Net value (ascending)', value: 'total_ASC' },
                    { label: 'Net value (descending)', value: 'total_DESC' },
                    { label: 'Net price (ascending)', value: 'price_ASC' },
                    { label: 'Net price (descending)', value: 'price_DESC' },
                    { label: 'Discount value (ascending)', value: 'discountTotal_ASC' },
                    { label: 'Discount value (descending)', value: 'discountTotal_DESC' },
                    { label: 'Unit (ascending)', value: 'unit_ASC' },
                    { label: 'Unit (descending)', value: 'unit_DESC' },
                    { label: 'Items (ascending)', value: 'quantity_ASC' },
                    { label: 'Items (descending)', value: 'quantity_DESC' },
                ],
            },
        ],
    },
    statusLadder: ['Created', 'Confirmed', 'Completed'],
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
    reorderLabel: 'Reorder',
    trackOrderLabel: 'Track order',
    payOnlineLabel: 'Pay online',
};

const MOCK_ORDER_DETAILS_BLOCK_DE: CMS.Model.OrderDetailsBlock.OrderDetailsBlock = {
    id: 'order-details-1',
    title: 'Bestellung Details',
    totalValue: {
        title: 'Gesamt',
        icon: 'Package',
        message: '{value} mal',
    },
    createdOrderAt: {
        title: 'Bestellungsdatum',
        icon: 'CalendarClock',
    },
    paymentDueDate: {
        title: 'Zahlungsfrist',
        icon: 'Coins',
        message: 'Dokumenten-Nr. {value}',
    },
    overdue: {
        title: 'Überfällig',
        icon: 'Info',
        message: '{days} Tage überfällig',
        altMessage: 'Keine Bestellungen zu zahlen',
    },
    orderStatus: {
        title: 'Bestellstatus',
        icon: 'CheckCheck',
    },
    customerComment: {
        title: 'Kommentar',
        icon: 'Text',
        link: {
            label: 'Sehen',
            icon: 'ArrowRight',
            url: '',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Ausstehend',
            COMPLETED: 'Abgeschlossen',
            SHIPPED: 'Versendet',
            CANCELLED: 'Storniert',
            ARCHIVED: 'Archiviert',
            REQUIRES_ACTION: 'Aktion erforderlich',
            UNKNOWN: 'Unbekannt',
        },
        unit: {
            PCS: 'Stk.',
            SET: 'Set',
            BOX: 'Box',
            KG: 'kg',
            L: 'l',
        },
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
        showMore: 'Mehr anzeigen',
        close: 'Schließen',
    },
    productsTitle: 'Produktliste',
    table: {
        columns: [
            { id: 'image', title: 'Bild' },
            { id: 'name', title: 'Name' },
            { id: 'sku', title: 'SKU no.' },
            { id: 'unit', title: 'Einheit' },
            { id: 'price', title: 'Nettopreis' },
            { id: 'discountTotal', title: 'Rabatt' },
            { id: 'quantity', title: 'Menge' },
            { id: 'total', title: 'Nettobetrag' },
        ],
    },
    filters: {
        label: 'Filter & Sortierung',
        title: 'Filter & Sortierung',
        description: 'Filtern Sie Ihre Produkte nach Name, Typ oder Datumsbereich, um schnell das Richtige zu finden.',
        submit: 'Anwenden',
        reset: 'Zurücksetzen',
        close: 'Filter schließen',
        removeFilters: 'Filter entfernen ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortieren nach',
                allowMultiple: false,
                options: [
                    { label: 'Name (aufsteigend)', value: 'name_ASC' },
                    { label: 'Name (absteigend)', value: 'name_DESC' },
                    { label: 'SKU (aufsteigend)', value: 'sku_ASC' },
                    { label: 'SKU (absteigend)', value: 'sku_DESC' },
                    { label: 'Nettobetrag (aufsteigend)', value: 'total_ASC' },
                    { label: 'Nettobetrag (absteigend)', value: 'total_DESC' },
                    { label: 'Nettopreis (aufsteigend)', value: 'price_ASC' },
                    { label: 'Nettopreis (absteigend)', value: 'price_DESC' },
                    { label: 'Rabattbetrag (aufsteigend)', value: 'discountTotal_ASC' },
                    { label: 'Rabattbetrag (absteigend)', value: 'discountTotal_DESC' },
                    { label: 'Einheit (aufsteigend)', value: 'unit_ASC' },
                    { label: 'Einheit (absteigend)', value: 'unit_DESC' },
                    { label: 'Menge (aufsteigend)', value: 'quantity_ASC' },
                    { label: 'Menge (absteigend)', value: 'quantity_DESC' },
                ],
            },
        ],
    },
    pagination: {
        limit: 5,
        legend: 'von {totalPages} Seiten',
        prev: 'Vorherige',
        next: 'Nächste',
        selectPage: 'Seite auswählen',
    },
    statusLadder: ['Erstellt', 'Bestätigt', 'Abgeschlossen'],
    noResults: {
        title: 'Bis jetzt ist hier nichts',
        description: '',
    },
    reorderLabel: 'Erneut bestellen',
    trackOrderLabel: 'Bestellung verfolgen',
    payOnlineLabel: 'Online bezahlen',
};

const MOCK_ORDER_DETAILS_BLOCK_PL: CMS.Model.OrderDetailsBlock.OrderDetailsBlock = {
    id: 'order-details-1',
    title: 'Szczegóły zamówienia',

    totalValue: {
        title: 'Wartość',
        icon: 'Package',
        message: '{value} elementów',
    },
    createdOrderAt: {
        title: 'Data zamówienia',
        icon: 'CalendarClock',
    },
    paymentDueDate: {
        title: 'Data płatności',
        icon: 'Coins',
        message: 'Numer dokumentu {value}',
    },
    overdue: {
        title: 'Niezrealizowane',
        icon: 'Info',
        message: '{days} dni przekroczone',
        altMessage: 'Brak zamówień do zapłacenia',
    },
    orderStatus: {
        title: 'Status zamówienia',
        icon: 'CheckCheck',
    },
    customerComment: {
        title: 'Komentarz',
        icon: 'Text',
        link: {
            label: 'Zobacz',
            icon: 'ArrowRight',
            url: '',
        },
    },
    fieldMapping: {
        status: {
            PENDING: 'Oczekuje',
            COMPLETED: 'Zakończone',
            SHIPPED: 'Wysłane',
            CANCELLED: 'Anulowane',
            ARCHIVED: 'Archiwum',
            REQUIRES_ACTION: 'Akcja wymagana',
            UNKNOWN: 'Nieznane',
        },
        unit: {
            PCS: 'szt.',
            SET: 'kom.',
            BOX: 'op.',
            KG: 'kg',
            L: 'l',
        },
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
        showMore: 'Więcej',
        close: 'Zamknij',
    },
    productsTitle: 'Lista produktów',
    table: {
        columns: [
            { id: 'image', title: 'Obraz' },
            { id: 'name', title: 'Nazwa' },
            { id: 'sku', title: 'SKU no.' },
            { id: 'unit', title: 'Jednostka' },
            { id: 'price', title: 'Cena netto' },
            { id: 'discountTotal', title: 'Rabat' },
            { id: 'quantity', title: 'Ilość' },
            { id: 'total', title: 'Wartość netto' },
        ],
    },
    filters: {
        label: 'Filtry & Sortowanie',
        title: 'Filtry & Sortowanie',
        description: 'Filtruj swoje produkty według nazwy, typu lub daty, aby szybko znaleźć to, czego potrzebujesz.',
        submit: 'Zastosuj',
        reset: 'Wyczyść',
        close: 'Zamknij filtry',
        removeFilters: 'Usuń filtry ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sortuj według',
                allowMultiple: false,
                options: [
                    { label: 'Nazwa (rosnąco)', value: 'name_ASC' },
                    { label: 'Nazwa (malejąco)', value: 'name_DESC' },
                    { label: 'SKU (rosnąco)', value: 'sku_ASC' },
                    { label: 'SKU (malejąco)', value: 'sku_DESC' },
                    { label: 'Wartość netto (rosnąco)', value: 'total_ASC' },
                    { label: 'Wartość netto (malejąco)', value: 'total_DESC' },
                    { label: 'Cena netto (rosnąco)', value: 'price_ASC' },
                    { label: 'Cena netto (malejąco)', value: 'price_DESC' },
                    { label: 'Wartość rabatu (rosnąco)', value: 'discountTotal_ASC' },
                    { label: 'Wartość rabatu (malejąco)', value: 'discountTotal_DESC' },
                    { label: 'Jednostka (rosnąco)', value: 'unit_ASC' },
                    { label: 'Jednostka (malejąco)', value: 'unit_DESC' },
                    { label: 'Ilość (rosnąco)', value: 'quantity_ASC' },
                    { label: 'Ilość (malejąco)', value: 'quantity_DESC' },
                ],
            },
        ],
    },
    pagination: {
        limit: 5,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
    statusLadder: ['Utworzono', 'Zatwierdzono', 'Zakończono'],
    noResults: {
        title: 'Dotąd nic tu nie ma',
        description: '',
    },
    reorderLabel: 'Zamów ponownie',
    trackOrderLabel: 'Śledź zamówienie',
    payOnlineLabel: 'Płatność online',
};

export const mapOrderDetailsBlock = (_locale: string): CMS.Model.OrderDetailsBlock.OrderDetailsBlock => {
    switch (_locale) {
        case 'pl':
            return MOCK_ORDER_DETAILS_BLOCK_PL;
        case 'de':
            return MOCK_ORDER_DETAILS_BLOCK_DE;
        default:
            return MOCK_ORDER_DETAILS_BLOCK_EN;
    }
};
