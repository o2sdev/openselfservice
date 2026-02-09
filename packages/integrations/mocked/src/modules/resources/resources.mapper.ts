import jwt from 'jsonwebtoken';

import { Products, Resources } from '@o2s/framework/modules';

import { MOCK_PRODUCTS } from './mock/products.mock';

interface Jwt extends jwt.JwtPayload {
    role: string;
    customer: {
        id: string;
        roles: string[];
    };
}

const MOCK_ASSET_1: Resources.Model.Asset = {
    id: 'AST-003',
    __typename: 'Asset',
    billingAccountId: 'BA-003',
    manufacturer: 'HyPro',
    model: 'TE 70-ATC/AVR',
    serialNo: 'HLT3456789',
    description: 'Hammer drill with Active Torque Control and Active Vibration Reduction',
    status: 'ACTIVE',
    product: MOCK_PRODUCTS[0]!,
    endOfWarranty: '2027-12-31',
    address: {
        city: 'New York',
        streetName: 'Broadway',
        postalCode: '10001',
        country: 'USA',
        district: 'Manhattan',
        region: 'New York',
        streetNumber: '350',
        apartment: '15A',
        email: 'test@test.com',
        phone: '1234567890',
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
    product: MOCK_PRODUCTS[1]!,
    endOfWarranty: '2027-07-31',
    address: {
        city: 'Los Angeles',
        streetName: 'Hollywood Boulevard',
        postalCode: '90028',
        country: 'USA',
        district: 'Hollywood',
        region: 'California',
        streetNumber: '6801',
        apartment: 'B',
        email: 'test@test.com',
        phone: '1234567890',
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
    product: MOCK_PRODUCTS[2]!,
    endOfWarranty: '2027-03-12',
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
    product: MOCK_PRODUCTS[3]!,
    endOfWarranty: '2027-03-21',
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
    product: MOCK_PRODUCTS[4]!,
    endOfWarranty: '2027-04-21',
    address: {
        city: 'Toronto',
        streetName: 'Yonge Street',
        postalCode: 'M5B 2L7',
        country: 'Canada',
        district: 'Downtown',
        region: 'Ontario',
        streetNumber: '220',
        apartment: '1203',
        email: 'test@test.com',
        phone: '1234567890',
    },
};

const MOCK_ASSET_6: Resources.Model.Asset = {
    id: 'AST-008',
    __typename: 'Asset',
    billingAccountId: 'BA-006',
    manufacturer: 'HyPro',
    model: 'PROFIS 2.0',
    serialNo: 'PRO-SUB-789013',
    description: 'Engineering software for designing anchoring and installation systems 2.0',
    status: 'ACTIVE',
    product: MOCK_PRODUCTS[5]!,
    endOfWarranty: '2027-04-21',
    address: {
        city: 'Los Angeles',
        streetName: 'Hollywood Boulevard',
        postalCode: '90028',
        country: 'USA',
        district: 'Hollywood',
        region: 'California',
        streetNumber: '6801',
        apartment: 'B',
        email: 'test@test.com',
        phone: '1234567890',
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
        paymentPeriod: 'YEARLY',
        price: {
            value: 89.9,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[5]!,
    assets: [],
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
        price: {
            value: 67.0,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[6]!,
    assets: [],
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
        price: {
            value: 88.0,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[7]!,
    assets: [],
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
        price: {
            value: 89.99,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[8]!,
    assets: [],
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
        price: {
            value: 66.5,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[9]!,
    assets: [],
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
        price: {
            value: 78.9,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[10]!,
    assets: [],
};

const MOCK_SERVICE_7: Resources.Model.Service = {
    id: 'SRV-007',
    __typename: 'Service',
    billingAccountId: 'BA-006',
    contract: {
        id: 'CNT-007',
        type: 'RENTAL',
        status: 'INACTIVE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        paymentPeriod: 'MONTHLY',
        price: {
            value: 78.9,
            currency: 'USD',
        },
    },
    product: MOCK_PRODUCTS[2]!,
    assets: [],
};

const MOCK_COMPATIBLE_SERVICE_1: Products.Model.Product = {
    id: 'SRV-001',
    sku: 'SRV-001',
    name: 'WeldGuard Safety',
    description: 'WeldGuard Safety - Protective Solutions for Welding Environments',
    shortDescription: 'WeldGuard Safety - Protective Solutions for Welding Environments',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'WeldGuard Safety',
    },
    price: {
        value: 79.83,
        currency: 'USD',
    },
    link: 'https://example.com/products/weldguard-safety',
    type: 'VIRTUAL',
    category: 'SAFETY',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_COMPATIBLE_SERVICE_2: Products.Model.Product = {
    id: 'SRV-002',
    sku: 'SRV-002',
    name: 'MaxFlow Air Systems',
    description: 'MaxFlow Air Systems - Industrial Pneumatics Maintenance',
    shortDescription: 'MaxFlow Air Systems - Industrial Pneumatics Maintenance',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'MaxFlow Air Systems',
    },
    price: {
        value: 79.83,
        currency: 'USD',
    },
    link: 'https://example.com/products/maxflow-air-systems',
    type: 'VIRTUAL',
    category: 'SAFETY',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_COMPATIBLE_SERVICE_3: Products.Model.Product = {
    id: 'SRV-003',
    sku: 'SRV-003',
    name: 'RapidFix Repair',
    description: 'RapidFix Repair - Fast & Reliable Industrial Tool Repairs',
    shortDescription: 'RapidFix Repair - Fast & Reliable Industrial Tool Repairs',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
        width: 640,
        height: 656,
        alt: 'RapidFix Repair',
    },
    price: {
        value: 79.83,
        currency: 'USD',
    },
    link: 'https://example.com/products/rapidfix-repair',
    type: 'VIRTUAL',
    category: 'SAFETY',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_ASSETS = [MOCK_ASSET_1, MOCK_ASSET_2, MOCK_ASSET_3, MOCK_ASSET_4, MOCK_ASSET_5, MOCK_ASSET_6];
const MOCK_ASSETS_FOR_CUSTOMER_1 = [MOCK_ASSET_1, MOCK_ASSET_2, MOCK_ASSET_3, MOCK_ASSET_4, MOCK_ASSET_5];
const MOCK_ASSETS_FOR_CUSTOMER_2 = [MOCK_ASSET_6];

const MOCK_SERVICES_DEFAULT = [
    MOCK_SERVICE_1,
    MOCK_SERVICE_2,
    MOCK_SERVICE_3,
    MOCK_SERVICE_4,
    MOCK_SERVICE_5,
    MOCK_SERVICE_6,
    MOCK_SERVICE_7,
];
const MOCK_SERVICES_FOR_CUSTOMER_1 = [MOCK_SERVICE_3, MOCK_SERVICE_2, MOCK_SERVICE_1, MOCK_SERVICE_7];
const MOCK_SERVICES_FOR_CUSTOMER_2 = [MOCK_SERVICE_5, MOCK_SERVICE_6];

const MOCK_COMPATIBLE_SERVICES = [MOCK_COMPATIBLE_SERVICE_1, MOCK_COMPATIBLE_SERVICE_2, MOCK_COMPATIBLE_SERVICE_3];

export const mapAsset = (id: string): Resources.Model.Asset => {
    const asset = MOCK_ASSETS.find((asset) => asset.id === id);
    if (!asset) {
        throw new Error(`Asset with id ${id} not found`);
    }
    return asset;
};

export const mapAssets = (
    query: Resources.Request.GetAssetListQuery,
    authorization: string,
): Resources.Model.Assets => {
    const { offset = 0, limit = 10, sort } = query;

    const customerId = getCastomerId(authorization);

    let assets: Resources.Model.Asset[] = [];

    switch (customerId) {
        case 'cus_01KGSR4NSX1S7Y48E6MVWPPVDP':
            assets = MOCK_ASSETS_FOR_CUSTOMER_1;
            break;
        case 'cust-002':
            assets = MOCK_ASSETS_FOR_CUSTOMER_2;
            break;
        default:
            assets = MOCK_ASSETS;
    }

    const filteredAssets = assets.filter((asset) => {
        if (query.status && asset.status !== query.status) {
            return false;
        }
        if (query.billingAccountId && asset.billingAccountId !== query.billingAccountId) {
            return false;
        }
        return true;
    });

    if (!filteredAssets.length) {
        return {
            data: [],
            total: 0,
        };
    }

    const data = filteredAssets;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Resources.Model.Asset];
            const bValue = b[field as keyof Resources.Model.Asset];

            if (field === 'name') {
                const aField = a.product?.[field] ?? '';
                const bField = b.product?.[field] ?? '';
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'endOfWarranty') {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(Number(offset), Number(offset) + Number(limit)),
        total: data.length,
    };
};

export const mapService = (id: string): Resources.Model.Service => {
    const service = MOCK_SERVICES_DEFAULT.find((service) => service.id === id);
    if (!service) {
        throw new Error(`Service with id ${id} not found`);
    }
    return service;
};

export const mapServices = (
    query: Resources.Request.GetServiceListQuery,
    authorization: string,
): Resources.Model.Services => {
    const { offset = 0, limit = 10, sort } = query;

    const customerId = getCastomerId(authorization);

    let services = MOCK_SERVICES_DEFAULT;

    switch (customerId) {
        case 'cus_01KGSR4NSX1S7Y48E6MVWPPVDP':
            services = MOCK_SERVICES_FOR_CUSTOMER_1;
            break;
        case 'cust-002':
            services = MOCK_SERVICES_FOR_CUSTOMER_2;
            break;
        default:
            services = MOCK_SERVICES_DEFAULT;
    }

    const filteredServices = services.filter((service) => {
        if (query.status && service.contract?.status !== query.status.toUpperCase()) {
            return false;
        }

        if (query.type && service.product.type.toLowerCase() !== query.type.toLowerCase()) {
            return false;
        }

        if (query.category && service.product.category.toLowerCase() !== query.category.toLowerCase()) {
            return false;
        }

        if (query.billingAccountId && service.billingAccountId !== query.billingAccountId) {
            return false;
        }
        return true;
    });

    if (!filteredServices.length) {
        return {
            data: [],
            total: 0,
        };
    }

    const data = filteredServices;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Resources.Model.Service];
            const bValue = b[field as keyof Resources.Model.Service];

            if (field === 'name') {
                const aField = a.product?.[field] ?? '';
                const bField = b.product?.[field] ?? '';
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(Number(offset), Number(offset) + Number(limit)),
        total: data.length,
    };
};

export const mapCompatibleServices = (_query: Resources.Request.GetAssetParams): Products.Model.Products => {
    return {
        data: MOCK_COMPATIBLE_SERVICES,
        total: MOCK_COMPATIBLE_SERVICES.length,
    };
};

export const mapFeaturedServices = (): Products.Model.Products => {
    return {
        data: MOCK_COMPATIBLE_SERVICES,
        total: MOCK_COMPATIBLE_SERVICES.length,
    };
};

const getCastomerId = (authorization: string): string | null => {
    const decodedToken = jwt.decode(authorization.replace('Bearer ', '')) as Jwt | null;

    if (!decodedToken) {
        return null;
    }
    return decodedToken?.customer?.id;
};
