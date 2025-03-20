import { Resources } from '@o2s/framework/modules';

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
    status: 'ACTIVE',
    product: {
        id: 'PRD-004',
        name: 'Rotary Hammer',
        description: 'Professional heavy-duty hammer drill for concrete and masonry',
        url: 'https://example.com/products/te-70-atc-avr',
        type: 'PHYSICAL',
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
    status: 'ACTIVE',
    product: {
        id: 'PRD-005',
        name: 'Angle Grinder',
        description: 'Battery-powered grinder for cutting and grinding applications',
        url: 'https://example.com/products/ag-125-a22',
        type: 'PHYSICAL',
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
    status: 'ACTIVE',
    product: {
        id: 'PRD-006',
        name: 'Laser Measurement',
        description: 'Precision measurement tool for construction applications',
        url: 'https://example.com/products/pd-s',
        type: 'PHYSICAL',
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
    status: 'INACTIVE',
    product: {
        id: 'PRD-007',
        name: 'Cordless Drill Driver',
        description: 'Compact and lightweight driver for drilling and fastening',
        url: 'https://example.com/products/sfc-22-a',
        type: 'PHYSICAL',
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
    status: 'ACTIVE',
    product: {
        id: 'PRD-008',
        name: 'Engineering Software',
        description: 'Advanced software for construction engineering calculations',
        url: 'https://example.com/products/profis-engineering',
        type: 'VIRTUAL',
        category: 'SOFTWARE',
    },
};

const MOCK_SERVICE_1: Resources.Model.Service = {
    id: 'SRV-001',
    __typename: 'Service',
    billingAccountId: 'BA-003',
    contract: {
        id: 'CNT-001',
        type: 'SUPPORT',
        status: 'ACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
    },
    product: {
        id: 'PRD-009',
        name: 'Premium Support',
        description: '24/7 Technical Support Service',
        url: 'https://example.com/services/premium-support',
        type: 'VIRTUAL',
        category: 'SUPPORT',
    },
};

const MOCK_SERVICE_2: Resources.Model.Service = {
    id: 'SRV-002',
    __typename: 'Service',
    billingAccountId: 'BA-003',
    contract: {
        id: 'CNT-002',
        type: 'TRAINING',
        status: 'ACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
    },
    product: {
        id: 'PRD-010',
        name: 'Professional Training',
        description: 'Comprehensive Tool Usage Training',
        url: 'https://example.com/services/training',
        type: 'VIRTUAL',
        category: 'TRAINING',
    },
};

const MOCK_SERVICE_3: Resources.Model.Service = {
    id: 'SRV-003',
    __typename: 'Service',
    billingAccountId: 'BA-004',
    contract: {
        id: 'CNT-003',
        type: 'MAINTENANCE',
        status: 'ACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
    },
    product: {
        id: 'PRD-011',
        name: 'Regular Maintenance',
        description: 'Scheduled Tool Maintenance Service',
        url: 'https://example.com/services/maintenance',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
    },
};

const MOCK_SERVICE_4: Resources.Model.Service = {
    id: 'SRV-004',
    __typename: 'Service',
    billingAccountId: 'BA-004',
    contract: {
        id: 'CNT-004',
        type: 'WARRANTY',
        status: 'ACTIVE',
        startDate: '2024-01-01',
        endDate: '2026-12-31',
    },
    product: {
        id: 'PRD-012',
        name: 'Extended Warranty',
        description: 'Additional 2 Years Warranty Coverage',
        url: 'https://example.com/services/warranty',
        type: 'VIRTUAL',
        category: 'WARRANTY',
    },
};

const MOCK_SERVICE_5: Resources.Model.Service = {
    id: 'SRV-005',
    __typename: 'Service',
    billingAccountId: 'BA-005',
    contract: {
        id: 'CNT-005',
        type: 'CLOUD',
        status: 'ACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
    },
    product: {
        id: 'PRD-013',
        name: 'Cloud Storage',
        description: 'Project Data Cloud Storage Service',
        url: 'https://example.com/services/cloud-storage',
        type: 'VIRTUAL',
        category: 'CLOUD',
    },
};

const MOCK_ASSETS = [MOCK_ASSET_1, MOCK_ASSET_2, MOCK_ASSET_3, MOCK_ASSET_4, MOCK_ASSET_5];
const MOCK_SERVICES = [MOCK_SERVICE_1, MOCK_SERVICE_2, MOCK_SERVICE_3, MOCK_SERVICE_4, MOCK_SERVICE_5];

export const mapAsset = (id: string): Resources.Model.Asset => {
    const asset = MOCK_ASSETS.find((asset) => asset.id === id);
    if (!asset) {
        throw new Error(`Asset with id ${id} not found`);
    }
    return asset;
};

export const mapAssets = (query: Resources.Request.GetAssetListQuery): Resources.Model.Assets => {
    const filteredAssets = MOCK_ASSETS.filter((asset) => {
        if (query.type && asset.product?.type !== query.type) {
            return false;
        }
        if (query.status && asset.status !== query.status) {
            return false;
        }
        if (query.billingAccountId && asset.billingAccountId !== query.billingAccountId) {
            return false;
        }
        return true;
    });

    return {
        data: filteredAssets,
        total: filteredAssets.length,
    };
};

export const mapService = (id: string): Resources.Model.Service => {
    const service = MOCK_SERVICES.find((service) => service.id === id);
    if (!service) {
        throw new Error(`Service with id ${id} not found`);
    }
    return service;
};

export const mapServices = (query: Resources.Request.GetServiceListQuery): Resources.Model.Services => {
    const filteredServices = MOCK_SERVICES.filter((service) => {
        if (query.type && service.product?.type !== query.type) {
            return false;
        }

        if (query.status && service.contract?.status !== query.status.toUpperCase()) {
            return false;
        }

        if (query.billingAccountId && service.billingAccountId !== query.billingAccountId) {
            return false;
        }
        return true;
    });

    return {
        data: filteredServices,
        total: filteredServices.length,
    };
};
