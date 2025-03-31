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
    productId: 'PRD-004',
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
    productId: 'PRD-005',
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
    productId: 'PRD-006',
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
    productId: 'PRD-007',
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
    productId: 'PRD-008',
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
        paymentPeriod: 'YEARLY',
    },
    productId: 'PRD-009',
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
    productId: 'PRD-010',
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
        paymentPeriod: 'MONTHLY',
    },
    productId: 'PRD-011',
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
        paymentPeriod: 'MONTHLY',
    },
    productId: 'PRD-012',
};

const MOCK_SERVICE_5: Resources.Model.Service = {
    id: 'SRV-005',
    __typename: 'Service',
    billingAccountId: 'BA-005',
    contract: {
        id: 'CNT-005',
        type: 'CLOUD',
        status: 'INACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        paymentPeriod: 'MONTHLY',
    },
    productId: 'PRD-013',
};

const MOCK_SERVICE_6: Resources.Model.Service = {
    id: 'SRV-006',
    __typename: 'Service',
    billingAccountId: 'BA-005',
    contract: {
        id: 'CNT-006',
        type: 'RENTAL',
        status: 'EXPIRED',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        paymentPeriod: 'YEARLY',
    },
    productId: 'PRD-014',
};

const MOCK_ASSETS = [MOCK_ASSET_1, MOCK_ASSET_2, MOCK_ASSET_3, MOCK_ASSET_4, MOCK_ASSET_5];
const MOCK_SERVICES = [MOCK_SERVICE_1, MOCK_SERVICE_2, MOCK_SERVICE_3, MOCK_SERVICE_4, MOCK_SERVICE_5, MOCK_SERVICE_6];

export const mapAsset = (id: string): Resources.Model.Asset => {
    const asset = MOCK_ASSETS.find((asset) => asset.id === id);
    if (!asset) {
        throw new Error(`Asset with id ${id} not found`);
    }
    return asset;
};

export const mapAssets = (query: Resources.Request.GetAssetListQuery): Resources.Model.Assets => {
    const filteredAssets = MOCK_ASSETS.filter((asset) => {
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
