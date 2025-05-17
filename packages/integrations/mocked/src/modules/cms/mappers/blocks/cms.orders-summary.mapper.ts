import { CMS } from '@o2s/framework/modules';

const MOCK_ORDER_LIST_BLOCK_EN: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock = {
    id: 'orders-summary-1',
    title: 'At a glance',
    subtitle: 'Compared to the same period a year before',
    totalValue: {
        title: 'Total order value',
        icon: 'Coins',
    },
    averageValue: {
        title: 'Avg. order value',
        icon: 'ShoppingCart',
    },
    averageNumber: {
        title: 'Avg. number of orders',
        icon: 'Package',
    },
    chart: {
        title: 'Number of orders',
        legend: {
            prev: 'Previous period',
            current: 'Current period',
        },
    },
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
    ranges: [
        {
            label: '1 Wk',
            value: 7,
            type: 'day',
        },
        {
            label: '1 Mo',
            value: 30,
            type: 'day',
        },
        {
            label: '6 Mo',
            value: 6,
            type: 'month',
            isDefault: true,
        },
    ],
};

const MOCK_ORDER_LIST_BLOCK_DE: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock = {
    id: 'orders-summary-1',
    title: 'Auf einen Blick',
    subtitle: 'Im Vergleich zum gleichen Zeitraum des Vorjahres',
    totalValue: {
        title: 'Gesamtbestellwert',
        icon: 'Coins',
    },
    averageValue: {
        title: 'Durchschn. Bestellwert',
        icon: 'ShoppingCart',
    },
    averageNumber: {
        title: 'Durchschn. Anzahl der Bestellungen',
        icon: 'Package',
    },
    chart: {
        title: 'Anzahl der Bestellungen',
        legend: {
            prev: 'Vorheriger Zeitraum',
            current: 'Aktueller Zeitraum',
        },
    },
    noResults: {
        title: 'Bisher gibt es hier nichts',
        description: '',
    },
    ranges: [
        {
            label: '1 Wo',
            value: 7,
            type: 'day',
        },
        {
            label: '1 Mt',
            value: 30,
            type: 'day',
        },
        {
            label: '6 Mt',
            value: 6,
            type: 'month',
            isDefault: true,
        },
    ],
};

const MOCK_ORDER_LIST_BLOCK_PL: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock = {
    id: 'orders-summary-1',
    title: 'W skrócie',
    subtitle: 'W porównaniu z tym samym okresem roku poprzedniego',
    totalValue: {
        title: 'Całkowita wartość zamówień',
        icon: 'Coins',
    },
    averageValue: {
        title: 'Średnia wartość zamówienia',
        icon: 'ShoppingCart',
    },
    averageNumber: {
        title: 'Średnia liczba zamówień',
        icon: 'Package',
    },
    chart: {
        title: 'Liczba zamówień',
        legend: {
            prev: 'Poprzedni okres',
            current: 'Obecny okres',
        },
    },
    noResults: {
        title: 'Jak dotąd nie ma tu nic',
        description: '',
    },
    ranges: [
        {
            label: '1 Tydz',
            value: 7,
            type: 'day',
        },
        {
            label: '1 Mies',
            value: 30,
            type: 'day',
        },
        {
            label: '6 Mies',
            value: 6,
            type: 'month',
            isDefault: true,
        },
    ],
};

export const mapOrdersSummaryBlock = (locale: string): CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock => {
    switch (locale) {
        case 'de':
            return { ...MOCK_ORDER_LIST_BLOCK_DE };
        case 'pl':
            return { ...MOCK_ORDER_LIST_BLOCK_PL };
        default:
            return { ...MOCK_ORDER_LIST_BLOCK_EN };
    }
};
