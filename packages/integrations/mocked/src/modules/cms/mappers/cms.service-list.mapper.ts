import { CMS } from '@o2s/framework/modules';

const MOCK_SERVICE_LIST_BLOCK: CMS.Model.ServiceListBlock.ServiceListBlock = {
    id: 'service-list-1',
    title: 'Services',
    subtitle: 'List of your services',
    // table: {
    //     columns: [
    //         { id: 'id', title: 'Resource ID' },
    //         { id: 'product.type', title: 'Product Type' },
    //         { id: 'product.name', title: 'Product Name' },
    //         { id: 'product.category', title: 'Product Category' },
    //     ],
    //     actions: {
    //         title: 'Actions',
    //         label: 'View Details',
    //     },
    // },
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    // filters: {
    //     label: 'Filter',
    //     title: 'Filter Resources',
    //     description: 'Use filters to find specific resources',
    //     submit: 'Apply Filters',
    //     reset: 'Reset Filters',
    //     close: 'Close filters',
    //     items: [
    //         {
    //             __typename: 'FilterSelect',
    //             id: 'product.type',
    //             label: 'Resource Type',
    //             allowMultiple: true,
    //             options: [
    //                 { label: 'Asset', value: 'Asset' },
    //                 { label: 'Service', value: 'Service' },
    //             ],
    //         },
    //         {
    //             __typename: 'FilterSelect',
    //             id: 'product.type',
    //             label: 'Product Type',
    //             allowMultiple: true,
    //             options: [
    //                 { label: 'Physical', value: 'PHYSICAL' },
    //                 { label: 'Virtual', value: 'VIRTUAL' },
    //             ],
    //         },
    //         {
    //             __typename: 'FilterSelect',
    //             id: 'product.category',
    //             label: 'Product Category',
    //             allowMultiple: true,
    //             options: [
    //                 { label: 'Software', value: 'SOFTWARE' },
    //                 { label: 'Tools', value: 'TOOLS' },
    //                 { label: 'Hardware', value: 'HARDWARE' },
    //             ],
    //         },
    //     ],
    // },
    noResults: {
        title: 'No Resources Found',
        description: 'There are no resources matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        status: 'Status',
        type: 'Type',
    },
    detailsUrl: '/services/:id',
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
