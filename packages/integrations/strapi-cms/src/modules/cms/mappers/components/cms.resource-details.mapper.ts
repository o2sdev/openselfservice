import { CMS } from '@o2s/framework/modules';

const MOCK_RESOURCE_DETAILS_COMPONENT: CMS.Model.ResourceDetailsComponent.ResourceDetailsComponent = {
    id: 'resource-details-1',
    fieldMapping: {
        'asset.status': {
            ACTIVE: 'Active',
            INACTIVE: 'Inactive',
            RETIRED: 'Retired',
        },
        'contract.status': {
            ACTIVE: 'Active',
            EXPIRED: 'Expired',
            INACTIVE: 'Inactive',
        },
        'product.type': {
            PHYSICAL: 'Physical',
            VIRTUAL: 'Virtual',
        },
    },
    properties: {
        id: 'Resource ID',
        billingAccountId: 'Billing Account',
        __typename: 'Resource Type',
        'product.type': 'Product Type',
        'product.name': 'Product Name',
        'product.category': 'Product Category',
        'asset.manufacturer': 'Manufacturer',
        'asset.model': 'Model',
        'asset.serialNo': 'Serial Number',
        'asset.status': 'Status',
        'contract.startDate': 'Start Date',
        'contract.endDate': 'End Date',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
        status: 'Status',
        type: 'Type',
    },
};

export const mapResourceDetailsComponent = (): CMS.Model.ResourceDetailsComponent.ResourceDetailsComponent => {
    return {
        ...MOCK_RESOURCE_DETAILS_COMPONENT,
    };
};
