import { Resources } from '@o2s/framework/modules';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_ASSET_1: Resources.Model.Asset = {
    id: 'AST-003',
    __typename: 'Asset',
    billingAccountId: 'BA-003',
    manufacturer: 'HyPro',
    model: 'TE 70-ATC/AVR',
    serialNo: 'HLT3456789',
    description: 'Hammer drill with Active Torque Control and Active Vibration Reduction',
    status: Resources.Model.AssetStatus.ACTIVE,
    product: {
        id: 'PRD-004',
        name: 'Rotary Hammer',
        description: 'Professional heavy-duty hammer drill for concrete and masonry',
        url: 'https://example.com/products/te-70-atc-avr',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'TOOLS',
    },
};

const MOCK_ASSET_2: Resources.Model.Asset = {
    id: 'AST-004',
    __typename: 'Asset',
    billingAccountId: 'BA-003',
    manufacturer: 'HyPro',
    model: 'AG 125-A22',
    serialNo: 'HLT567890',
    description: 'Cordless angle grinder with 22V battery platform',
    status: Resources.Model.AssetStatus.ACTIVE,
    product: {
        id: 'PRD-005',
        name: 'Angle Grinder',
        description: 'Battery-powered grinder for cutting and grinding applications',
        url: 'https://example.com/products/ag-125-a22',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'TOOLS',
    },
};

const MOCK_ASSET_3: Resources.Model.Asset = {
    id: 'AST-005',
    __typename: 'Asset',
    billingAccountId: 'BA-004',
    manufacturer: 'HyPro',
    model: 'PD-S',
    serialNo: 'HLT234567',
    description: 'Laser measurement device for distance measurements',
    status: Resources.Model.AssetStatus.ACTIVE,
    product: {
        id: 'PRD-006',
        name: 'Laser Measurement',
        description: 'Precision measurement tool for construction applications',
        url: 'https://example.com/products/pd-s',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'MEASUREMENT',
    },
};

const MOCK_ASSET_4: Resources.Model.Asset = {
    id: 'AST-006',
    __typename: 'Asset',
    billingAccountId: 'BA-004',
    manufacturer: 'HyPro',
    model: 'SFC 22-A',
    serialNo: 'HLT678901',
    description: 'Cordless drill driver with 22V battery platform',
    status: Resources.Model.AssetStatus.INACTIVE,
    product: {
        id: 'PRD-007',
        name: 'Cordless Drill Driver',
        description: 'Compact and lightweight driver for drilling and fastening',
        url: 'https://example.com/products/sfc-22-a',
        type: Resources.Model.ProductType.PHYSICAL,
        category: 'TOOLS',
    },
};

const MOCK_ASSET_5: Resources.Model.Asset = {
    id: 'AST-007',
    __typename: 'Asset',
    billingAccountId: 'BA-005',
    manufacturer: 'HyPro',
    model: 'PROFIS Engineering Suite',
    serialNo: 'PRO-SUB-789012',
    description: 'Engineering software for designing anchoring and installation systems',
    status: Resources.Model.AssetStatus.ACTIVE,
    product: {
        id: 'PRD-008',
        name: 'Engineering Software',
        description: 'Advanced software for construction engineering calculations',
        url: 'https://example.com/products/profis-engineering',
        type: Resources.Model.ProductType.VIRTUAL,
        category: 'SOFTWARE',
    },
};

const MOCK_RESOURCES = [MOCK_ASSET_1, MOCK_ASSET_2, MOCK_ASSET_3, MOCK_ASSET_4, MOCK_ASSET_5];

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

    return {
        data: filteredResources,
        total: filteredResources.length,
    };
};
