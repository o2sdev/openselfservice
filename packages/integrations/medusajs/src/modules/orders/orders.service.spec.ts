import { UnauthorizedException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth } from '@o2s/framework/modules';

import { OrdersService } from './orders.service';

const DEFAULT_CURRENCY = 'EUR';

const minimalOrder = {
    id: 'order_1',
    customer_id: 'cust_1',
    currency_code: 'eur',
    total: 10000,
    subtotal: 9000,
    tax_total: 1000,
    discount_total: 0,
    shipping_total: 0,
    payment_status: 'captured',
    status: 'completed',
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-01-02'),
    items: [],
    shipping_address: null,
    billing_address: null,
    shipping_methods: [],
};

describe('OrdersService', () => {
    let service: OrdersService;
    let mockSdk: { store: { order: { retrieve: ReturnType<typeof vi.fn>; list: ReturnType<typeof vi.fn> } } };
    let mockMedusaJsService: { getSdk: ReturnType<typeof vi.fn>; getStoreApiHeaders: ReturnType<typeof vi.fn> };
    let mockAuthService: { getCustomerId: ReturnType<typeof vi.fn> };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            store: {
                order: {
                    retrieve: vi.fn(),
                    list: vi.fn(),
                },
            },
        };
        mockMedusaJsService = {
            getSdk: vi.fn(() => mockSdk),
            getStoreApiHeaders: vi.fn(() => ({})),
        };
        mockAuthService = { getCustomerId: vi.fn() };
        mockConfig = {
            get: vi.fn((key: string) => (key === 'DEFAULT_CURRENCY' ? DEFAULT_CURRENCY : '')),
        };
        mockLogger = { debug: vi.fn() };

        service = new OrdersService(
            mockConfig as unknown as ConfigService,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
            mockAuthService as unknown as Auth.Service,
        );
    });

    describe('constructor', () => {
        it('should throw when DEFAULT_CURRENCY is not defined', () => {
            vi.mocked(mockConfig.get).mockReturnValue('');

            expect(
                () =>
                    new OrdersService(
                        mockConfig as unknown as ConfigService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                        mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
                        mockAuthService as unknown as Auth.Service,
                    ),
            ).toThrow('DEFAULT_CURRENCY is not defined');
        });
    });

    describe('getOrder', () => {
        it('should throw UnauthorizedException when authorization is missing', () => {
            expect(() => service.getOrder({ id: 'order_1' }, undefined)).toThrow(UnauthorizedException);
            expect(mockLogger.debug).toHaveBeenCalledWith('Authorization token not found');
        });

        it('should call sdk.store.order.retrieve and return mapped order', async () => {
            mockSdk.store.order.retrieve.mockResolvedValue({ order: minimalOrder });

            const result = await firstValueFrom(service.getOrder({ id: 'order_1' }, 'Bearer token'));

            expect(mockSdk.store.order.retrieve).toHaveBeenCalledWith(
                'order_1',
                expect.objectContaining({ fields: expect.any(String) }),
                expect.any(Object),
            );
            expect(result).toBeDefined();
            expect(result?.id).toBe('order_1');
            expect(result?.status).toBe('COMPLETED');
            expect(result?.paymentStatus).toBe('CAPTURED');
        });

        it('should throw NotFoundException when SDK returns 404', async () => {
            mockSdk.store.order.retrieve.mockRejectedValue({ status: 404 });

            await expect(firstValueFrom(service.getOrder({ id: 'missing' }, 'Bearer token'))).rejects.toThrow(
                NotFoundException,
            );
        });
    });

    describe('getOrderList', () => {
        it('should throw UnauthorizedException when authorization is missing', () => {
            expect(() => service.getOrderList({ limit: 10, offset: 0 }, undefined)).toThrow(UnauthorizedException);
            expect(mockLogger.debug).toHaveBeenCalledWith('Authorization token not found');
        });

        it('should call sdk.store.order.list with params and return mapped orders', async () => {
            mockSdk.store.order.list.mockResolvedValue({
                orders: [minimalOrder],
                count: 1,
            });

            const result = await firstValueFrom(service.getOrderList({ limit: 10, offset: 0 }, 'Bearer token'));

            expect(mockSdk.store.order.list).toHaveBeenCalledWith(
                expect.objectContaining({
                    limit: 10,
                    offset: 0,
                    fields: expect.any(String),
                }),
                expect.any(Object),
            );
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]?.id).toBe('order_1');
        });

        it('should pass status filter to getMedusaStatus when query.status is provided', async () => {
            mockSdk.store.order.list.mockResolvedValue({ orders: [], count: 0 });

            await firstValueFrom(
                service.getOrderList(
                    {
                        limit: 10,
                        offset: 0,
                        status: 'PENDING',
                    } as import('@o2s/framework/modules').Orders.Request.GetOrderListQuery,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.order.list).toHaveBeenCalledWith(
                expect.objectContaining({ status: 'pending' }),
                expect.any(Object),
            );
        });

        it('should map COMPLETED and CANCELLED status correctly', async () => {
            mockSdk.store.order.list.mockResolvedValue({ orders: [], count: 0 });

            await firstValueFrom(
                service.getOrderList(
                    {
                        limit: 10,
                        offset: 0,
                        status: 'COMPLETED',
                    } as import('@o2s/framework/modules').Orders.Request.GetOrderListQuery,
                    'Bearer token',
                ),
            );
            expect(mockSdk.store.order.list).toHaveBeenCalledWith(
                expect.objectContaining({ status: 'completed' }),
                expect.any(Object),
            );

            mockSdk.store.order.list.mockClear();
            await firstValueFrom(
                service.getOrderList(
                    {
                        limit: 10,
                        offset: 0,
                        status: 'CANCELLED',
                    } as import('@o2s/framework/modules').Orders.Request.GetOrderListQuery,
                    'Bearer token',
                ),
            );
            expect(mockSdk.store.order.list).toHaveBeenCalledWith(
                expect.objectContaining({ status: 'canceled' }),
                expect.any(Object),
            );
        });
    });
});
