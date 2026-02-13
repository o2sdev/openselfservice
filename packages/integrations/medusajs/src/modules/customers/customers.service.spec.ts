import { HttpTypes } from '@medusajs/types';
import { UnauthorizedException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth, Customers } from '@o2s/framework/modules';

import { CustomersService } from './customers.service';

const minimalAddress = {
    id: 'addr_1',
    first_name: 'John',
    last_name: 'Doe',
    country_code: 'pl',
    address_1: 'Street',
    address_2: '1',
    city: 'Warsaw',
    postal_code: '00-001',
    province: 'Mazovia',
    phone: '+48',
    is_default_shipping: true,
    is_default_billing: false,
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-01-02'),
};

describe('CustomersService', () => {
    let service: CustomersService;
    let mockSdk: {
        store: {
            customer: {
                listAddress: ReturnType<typeof vi.fn>;
                retrieveAddress: ReturnType<typeof vi.fn>;
                createAddress: ReturnType<typeof vi.fn>;
                updateAddress: ReturnType<typeof vi.fn>;
                deleteAddress: ReturnType<typeof vi.fn>;
            };
        };
    };
    let mockMedusaJsService: { getSdk: ReturnType<typeof vi.fn>; getStoreApiHeaders: ReturnType<typeof vi.fn> };
    let mockAuthService: { getCustomerId: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            store: {
                customer: {
                    listAddress: vi.fn(),
                    retrieveAddress: vi.fn(),
                    createAddress: vi.fn(),
                    updateAddress: vi.fn(),
                    deleteAddress: vi.fn(),
                },
            },
        };
        mockMedusaJsService = {
            getSdk: vi.fn(() => mockSdk),
            getStoreApiHeaders: vi.fn(() => ({})),
        };
        mockAuthService = { getCustomerId: vi.fn() };
        mockLogger = { debug: vi.fn() };

        service = new CustomersService(
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
            mockAuthService as unknown as Auth.Service,
        );
    });

    describe('getAddresses', () => {
        it('should throw UnauthorizedException when auth is missing', () => {
            expect(() => service.getAddresses(undefined)).toThrow(UnauthorizedException);
            expect(() => service.getAddresses(undefined)).toThrow('Authentication required');
        });

        it('should throw UnauthorizedException when getCustomerId returns undefined', () => {
            mockAuthService.getCustomerId.mockReturnValue(undefined);
            expect(() => service.getAddresses('Bearer token')).toThrow(UnauthorizedException);
            expect(() => service.getAddresses('Bearer token')).toThrow('Invalid authentication');
        });

        it('should call listAddress and return mapCustomerAddresses', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.listAddress.mockResolvedValue({
                addresses: [minimalAddress],
            } as unknown as HttpTypes.StoreCustomerAddressListResponse);

            const result = await firstValueFrom(service.getAddresses('Bearer token'));

            expect(mockSdk.store.customer.listAddress).toHaveBeenCalledWith({}, expect.any(Object));
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('addr_1');
            expect(result.total).toBe(1);
        });

        it('should throw UnauthorizedException on 401 or 403', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.listAddress.mockRejectedValue({ response: { status: 401 } });

            await expect(firstValueFrom(service.getAddresses('Bearer token'))).rejects.toThrow(UnauthorizedException);

            mockSdk.store.customer.listAddress.mockRejectedValue({ response: { status: 403 } });
            await expect(firstValueFrom(service.getAddresses('Bearer token'))).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('getAddress', () => {
        it('should throw UnauthorizedException when auth is missing', () => {
            expect(() => service.getAddress({ id: 'addr_1' } as Customers.Request.GetAddressParams, undefined)).toThrow(
                UnauthorizedException,
            );
        });

        it('should throw UnauthorizedException when getCustomerId returns undefined', () => {
            mockAuthService.getCustomerId.mockReturnValue(undefined);
            expect(() =>
                service.getAddress({ id: 'addr_1' } as Customers.Request.GetAddressParams, 'Bearer token'),
            ).toThrow(UnauthorizedException);
        });

        it('should call retrieveAddress and return mapped address', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.retrieveAddress.mockResolvedValue({
                address: minimalAddress,
            } as unknown as HttpTypes.StoreCustomerAddressResponse);

            const result = await firstValueFrom(
                service.getAddress({ id: 'addr_1' } as Customers.Request.GetAddressParams, 'Bearer token'),
            );

            expect(mockSdk.store.customer.retrieveAddress).toHaveBeenCalledWith('addr_1', {}, expect.any(Object));
            expect(result).toBeDefined();
            expect(result?.id).toBe('addr_1');
        });

        it('should return of(undefined) on 404', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.retrieveAddress.mockRejectedValue({ response: { status: 404 } });

            const result = await firstValueFrom(
                service.getAddress({ id: 'missing' } as Customers.Request.GetAddressParams, 'Bearer token'),
            );

            expect(result).toBeUndefined();
        });
    });

    describe('createAddress', () => {
        it('should throw UnauthorizedException when auth is missing', () => {
            expect(() =>
                service.createAddress({ address: {} } as Customers.Request.CreateAddressBody, undefined),
            ).toThrow(UnauthorizedException);
        });

        it('should call createAddress SDK and return mapped address', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.createAddress.mockResolvedValue({
                customer: { addresses: [minimalAddress] },
            } as unknown as HttpTypes.StoreCustomerResponse);

            const result = await firstValueFrom(
                service.createAddress(
                    {
                        address: {
                            firstName: 'John',
                            lastName: 'Doe',
                            country: 'PL',
                            city: 'Warsaw',
                        },
                    } as Customers.Request.CreateAddressBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.customer.createAddress).toHaveBeenCalled();
            expect(result).toBeDefined();
        });

        it('should call setDefaultAddress when data.isDefault is true', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.createAddress.mockResolvedValue({
                customer: { addresses: [{ ...minimalAddress, id: 'addr_new' }] },
            } as unknown as HttpTypes.StoreCustomerResponse);
            mockSdk.store.customer.updateAddress.mockResolvedValue({
                customer: { addresses: [{ ...minimalAddress, id: 'addr_new', is_default_shipping: true }] },
            } as unknown as HttpTypes.StoreCustomerResponse);

            const result = await firstValueFrom(
                service.createAddress(
                    {
                        address: { firstName: 'John', lastName: 'Doe', country: 'PL', city: 'Warsaw' },
                        isDefault: true,
                    } as Customers.Request.CreateAddressBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.customer.updateAddress).toHaveBeenCalledWith(
                'addr_new',
                expect.objectContaining({ is_default_shipping: true }),
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
        });
    });

    describe('updateAddress', () => {
        it('should throw UnauthorizedException when auth is missing', () => {
            expect(() =>
                service.updateAddress({ id: 'addr_1' }, {} as Customers.Request.UpdateAddressBody, undefined),
            ).toThrow(UnauthorizedException);
        });

        it('should call updateAddress SDK and return mapped address', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.updateAddress.mockResolvedValue({
                customer: { addresses: [{ ...minimalAddress, id: 'addr_1' }] },
            } as unknown as HttpTypes.StoreCustomerResponse);

            const result = await firstValueFrom(
                service.updateAddress(
                    { id: 'addr_1' },
                    { address: { firstName: 'Jane' } } as Customers.Request.UpdateAddressBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.customer.updateAddress).toHaveBeenCalledWith(
                'addr_1',
                expect.any(Object),
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
        });
    });

    describe('deleteAddress', () => {
        it('should throw UnauthorizedException when auth is missing', () => {
            expect(() =>
                service.deleteAddress({ id: 'addr_1' } as Customers.Request.DeleteAddressParams, undefined),
            ).toThrow(UnauthorizedException);
        });

        it('should call deleteAddress SDK', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.deleteAddress.mockResolvedValue({});

            await firstValueFrom(
                service.deleteAddress({ id: 'addr_1' } as Customers.Request.DeleteAddressParams, 'Bearer token'),
            );

            expect(mockSdk.store.customer.deleteAddress).toHaveBeenCalledWith('addr_1', expect.any(Object));
        });
    });

    describe('setDefaultAddress', () => {
        it('should call updateAddress with is_default_shipping and return mapped address', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.store.customer.updateAddress.mockResolvedValue({
                customer: { addresses: [{ ...minimalAddress, is_default_shipping: true }] },
            } as unknown as HttpTypes.StoreCustomerResponse);

            const result = await firstValueFrom(
                service.setDefaultAddress(
                    { id: 'addr_1' } as Customers.Request.SetDefaultAddressParams,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.customer.updateAddress).toHaveBeenCalledWith(
                'addr_1',
                { is_default_shipping: true },
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
            expect(result?.id).toBe('addr_1');
        });
    });
});
