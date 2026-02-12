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
    let mockSdk: { admin: { order: { retrieve: ReturnType<typeof vi.fn>; list: ReturnType<typeof vi.fn> } } };
    let mockMedusaJsService: { getSdk: ReturnType<typeof vi.fn> };
    let mockAuthService: { getCustomerId: ReturnType<typeof vi.fn> };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            admin: {
                order: {
                    retrieve: vi.fn(),
                    list: vi.fn(),
                },
            },
        };
        mockMedusaJsService = { getSdk: vi.fn(() => mockSdk) };
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

        it('should call sdk.admin.order.retrieve and return mapped order', async () => {
            mockSdk.admin.order.retrieve.mockResolvedValue({ order: minimalOrder });

            const result = await firstValueFrom(service.getOrder({ id: 'order_1' }, 'Bearer token'));

            expect(mockSdk.admin.order.retrieve).toHaveBeenCalledWith(
                'order_1',
                expect.objectContaining({ fields: 'items.product.*' }),
            );
            expect(result).toBeDefined();
            expect(result?.id).toBe('order_1');
            expect(result?.status).toBe('COMPLETED');
            expect(result?.paymentStatus).toBe('CAPTURED');
        });

        it('should throw NotFoundException when SDK returns 404', async () => {
            mockSdk.admin.order.retrieve.mockRejectedValue({ status: 404 });

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

        it('should throw UnauthorizedException when getCustomerId returns undefined', () => {
            mockAuthService.getCustomerId.mockReturnValue(undefined);
            expect(() => service.getOrderList({ limit: 10, offset: 0 }, 'Bearer token')).toThrow(UnauthorizedException);
            expect(mockLogger.debug).toHaveBeenCalledWith('Customer ID not found in authorization token');
        });

        it('should call sdk.admin.order.list with customerId and return mapped orders', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockSdk.admin.order.list.mockResolvedValue({
                orders: [minimalOrder],
                count: 1,
            });

            const result = await firstValueFrom(service.getOrderList({ limit: 10, offset: 0 }, 'Bearer token'));

            expect(mockSdk.admin.order.list).toHaveBeenCalledWith(
                expect.objectContaining({
                    limit: 10,
                    offset: 0,
                    customer_id: 'cust_1',
                    fields: expect.any(String),
                }),
            );
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]?.id).toBe('order_1');
        });
    });
});
