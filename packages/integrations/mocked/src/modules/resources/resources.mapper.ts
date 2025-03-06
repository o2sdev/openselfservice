import { Resources } from '@o2s/framework/modules';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_ASSET_1: Resources.Model.Asset = {
    id: 'AST-001',
    __typename: 'Asset',
    billingAccountId: 'BA-001',
    manufacturer: 'Cisco',
    model: 'Router 2000',
    serialNo: 'CSC123456',
    description: 'High performance router',
    status: Resources.Model.AssetStatus.ACTIVE,
    product: {
        id: 'PRD-001',
        name: 'Enterprise Router',
        description: 'Enterprise grade networking equipment',
        url: 'https://example.com/products/router-2000',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'NETWORK',
    },
};

const MOCK_SERVICE_1: Resources.Model.Service = {
    id: 'SRV-001',
    __typename: 'Service',
    billingAccountId: 'BA-001',
    contract: {
        id: 'CNT-001',
        type: 'SUBSCRIPTION',
        status: Resources.Model.ContractStatus.ACTIVE,
        startDate: dateToday.toISOString(),
        endDate: '2025-12-31',
    },
    product: {
        id: 'PRD-002',
        name: 'Internet 1Gb/s',
        description: 'High-speed fiber internet connection',
        url: 'https://example.com/products/internet-1gb',
        type: Resources.Model.ProductType.VIRTUAL,
        category: 'INTERNET',
    },
};

const MOCK_ASSET_2: Resources.Model.Asset = {
    id: 'AST-002',
    __typename: 'Asset',
    billingAccountId: 'BA-002',
    manufacturer: 'Nokia',
    model: 'ONT G-240W-C',
    serialNo: 'NOK789012',
    description: 'Optical Network Terminal',
    status: Resources.Model.AssetStatus.INACTIVE,
    product: {
        id: 'PRD-003',
        name: 'Fiber Modem',
        description: 'GPON Optical Network Terminal',
        url: 'https://example.com/products/ont-g240w',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'NETWORK',
    },
};

const MOCK_RESOURCES = [MOCK_ASSET_1, MOCK_SERVICE_1, MOCK_ASSET_2];

export const mapResource = (id: string): Resources.Model.Resource => {
    const resource = MOCK_RESOURCES.find((resource) => resource.id === id);
    if (!resource) {
        throw new Error(`Resource with id ${id} not found`);
    }
    return resource;
};

export const mapResources = (query: Resources.Request.GetResourceListQuery): Resources.Model.Resources => {
    const filteredResources = MOCK_RESOURCES.filter((resource) => {
        if (query.type && resource.product?.type !== query.type) {
            return false;
        }
        if (query.resourceType && resource.__typename !== query.resourceType) {
            return false;
        }
        if (query.billingAccountId && resource.billingAccountId !== query.billingAccountId) {
            return false;
        }
        return true;
    });

    shuffleArray(filteredResources);

    return {
        data: filteredResources,
        total: filteredResources.length,
    };
};

function shuffleArray(array: Resources.Model.Resource[]) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j] as Resources.Model.Resource, array[i] as Resources.Model.Resource];
    }
}
