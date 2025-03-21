import { CMS } from '@o2s/framework/modules';

const MOCK_SERVICE_LIST_BLOCK: CMS.Model.ServiceListBlock.ServiceListBlock = {
    id: 'service-list-1',
    title: 'Services',
    subtitle: 'List of your services',
    detailsLabel: 'Details',
    fieldMapping: {
        type: {
            PHYSICAL: 'Physical',
            VIRTUAL: 'Virtual',
        },
        category: {
            TOOLS: 'Tools',
            HARDWARE: 'Hardware',
            SOFTWARE: 'Software',
            MEASUREMENT: 'Measurement',
        },
        status: {
            ACTIVE: 'Active',
            INACTIVE: 'Inactive',
            EXPIRED: 'Expired',
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
        label: 'Filter',
        title: 'Filter Services',
        description: 'Use filters to find specific services',
        submit: 'Apply Filters',
        reset: 'Reset Filters',
        close: 'Close filters',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Product Type',
                allowMultiple: true,
                options: [
                    { label: 'Physical', value: 'PHYSICAL' },
                    { label: 'Virtual', value: 'VIRTUAL' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'category',
                label: 'Product Category',
                allowMultiple: true,
                options: [
                    { label: 'Software', value: 'SOFTWARE' },
                    { label: 'Tools', value: 'TOOLS' },
                    { label: 'Hardware', value: 'HARDWARE' },
                ],
            },
        ],
    },
    noResults: {
        title: 'No Services Found',
        description: 'There are no services matching your criteria',
    },
    detailsUrl: '/services/{id}',
};

export const mapServiceListBlock = (locale: string): CMS.Model.ServiceListBlock.ServiceListBlock => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/services/{id}`;
            case 'de':
                return `/services/{id}`;
            case 'pl':
                return `/usługi/{id}`;
        }

        return '';
    };

    return {
        ...MOCK_SERVICE_LIST_BLOCK,
        detailsUrl: getDetailsUrl(),
    };
};
