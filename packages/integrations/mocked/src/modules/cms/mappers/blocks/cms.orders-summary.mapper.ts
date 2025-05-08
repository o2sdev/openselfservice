import { CMS } from '@o2s/framework/modules';

const MOCK_ORDER_LIST_BLOCK_EN: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock = {
    id: 'orders-summary-1',
    title: 'At a glance',
    subtitle: 'Compared to the same period a year before',
    totalValue: {
        title: 'Total order value',
    },
    averageValue: {
        title: 'Avg. order value',
    },
    averageNumber: {
        title: 'Avg. number of orders',
    },
    chart: {
        title: 'Number of orders',
    },
    noResults: {
        title: "So far, there's nothing here",
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
    },
    averageValue: {
        title: 'Durchschn. Bestellwert',
    },
    averageNumber: {
        title: 'Durchschn. Anzahl der Bestellungen',
    },
    chart: {
        title: 'Anzahl der Bestellungen',
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
    },
    averageValue: {
        title: 'Średnia wartość zamówienia',
    },
    averageNumber: {
        title: 'Średnia liczba zamówień',
    },
    chart: {
        title: 'Liczba zamówień',
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
