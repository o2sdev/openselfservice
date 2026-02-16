import { HttpTypes } from '@medusajs/types';
import { BadRequestException } from '@nestjs/common';
import { NotFoundException, NotImplementedException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth, Carts } from '@o2s/framework/modules';

import { CartsService } from './carts.service';

const DEFAULT_CURRENCY = 'EUR';

const minimalCart = {
    id: 'cart_1',
    customer_id: null,
    currency_code: 'eur',
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-01-02'),
    items: [],
    subtotal: 9000,
    total: 10000,
    discount_total: 0,
    tax_total: 1000,
    shipping_total: 0,
    shipping_address: null,
    billing_address: null,
    shipping_methods: [],
    metadata: {},
};

describe('CartsService', () => {
    let service: CartsService;
    let mockSdk: {
        store: {
            cart: {
                retrieve: ReturnType<typeof vi.fn>;
                create: ReturnType<typeof vi.fn>;
                createLineItem: ReturnType<typeof vi.fn>;
                updateLineItem: ReturnType<typeof vi.fn>;
                deleteLineItem: ReturnType<typeof vi.fn>;
                update: ReturnType<typeof vi.fn>;
                addShippingMethod: ReturnType<typeof vi.fn>;
            };
        };
        client: { fetch: ReturnType<typeof vi.fn> };
    };
    let mockMedusaJsService: { getSdk: ReturnType<typeof vi.fn>; getStoreApiHeaders: ReturnType<typeof vi.fn> };
    let mockAuthService: { getCustomerId: ReturnType<typeof vi.fn> };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };
    let mockCustomersService: Record<string, ReturnType<typeof vi.fn>>;

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            store: {
                cart: {
                    retrieve: vi.fn(),
                    create: vi.fn(),
                    createLineItem: vi.fn(),
                    updateLineItem: vi.fn(),
                    deleteLineItem: vi.fn(),
                    update: vi.fn(),
                    addShippingMethod: vi.fn(),
                },
            },
            client: { fetch: vi.fn() },
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
        mockCustomersService = {};

        service = new CartsService(
            mockConfig as unknown as ConfigService,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
            mockAuthService as unknown as Auth.Service,
            mockCustomersService as unknown as import('@o2s/framework/modules').Customers.Service,
        );
    });

    describe('constructor', () => {
        it('should throw when DEFAULT_CURRENCY is not defined', () => {
            vi.mocked(mockConfig.get).mockReturnValue('');

            expect(
                () =>
                    new CartsService(
                        mockConfig as unknown as ConfigService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                        mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
                        mockAuthService as unknown as Auth.Service,
                        mockCustomersService as unknown as import('@o2s/framework/modules').Customers.Service,
                    ),
            ).toThrow('DEFAULT_CURRENCY is not defined');
        });
    });

    describe('getCart', () => {
        it('should call retrieve and return mapped cart', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });

            const result = await firstValueFrom(service.getCart({ id: 'cart_1' }, 'Bearer token'));

            expect(mockSdk.store.cart.retrieve).toHaveBeenCalledWith('cart_1', {}, expect.any(Object));
            expect(result).toBeDefined();
            expect(result?.id).toBe('cart_1');
            expect(result?.currency).toBe('EUR');
        });

        it('should throw UnauthorizedException when cart.customerId !== auth customerId', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: { ...minimalCart, customer_id: 'cust_1' } });
            mockAuthService.getCustomerId.mockReturnValue('cust_other');

            await expect(firstValueFrom(service.getCart({ id: 'cart_1' }, 'Bearer token'))).rejects.toThrow(
                UnauthorizedException,
            );
            expect(mockAuthService.getCustomerId).toHaveBeenCalledWith('Bearer token');
        });

        it('should throw NotFoundException on 404', async () => {
            mockSdk.store.cart.retrieve.mockRejectedValue({ status: 404 });

            await expect(firstValueFrom(service.getCart({ id: 'missing' }, 'Bearer token'))).rejects.toThrow(
                NotFoundException,
            );
        });
    });

    describe('createCart', () => {
        it('should call cart.create with currency_code and region_id', async () => {
            mockSdk.store.cart.create.mockResolvedValue({ cart: minimalCart });

            await firstValueFrom(service.createCart({ currency: 'EUR', regionId: 'reg_1' }, 'Bearer token'));

            expect(mockSdk.store.cart.create).toHaveBeenCalledWith(
                { currency_code: 'eur', region_id: 'reg_1', metadata: undefined },
                {},
                expect.any(Object),
            );
        });
    });

    describe('addCartItem', () => {
        it('should throw BadRequestException when sku is missing', () => {
            expect(() => service.addCartItem({ quantity: 1 } as Carts.Request.AddCartItemBody, 'Bearer token')).toThrow(
                BadRequestException,
            );
        });

        it('should throw BadRequestException when cartId absent and currency missing', () => {
            expect(() =>
                service.addCartItem({ sku: 'SKU1', quantity: 1 } as Carts.Request.AddCartItemBody, 'Bearer token'),
            ).toThrow(BadRequestException);
        });

        it('should retrieve then createLineItem when cartId provided', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });
            mockSdk.store.cart.createLineItem.mockResolvedValue({
                cart: { ...minimalCart, items: [{ id: 'item_1' }] },
            });
            mockAuthService.getCustomerId.mockReturnValue(undefined);

            const result = await firstValueFrom(
                service.addCartItem(
                    { cartId: 'cart_1', sku: 'SKU1', quantity: 2 } as Carts.Request.AddCartItemBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.retrieve).toHaveBeenCalledWith('cart_1', {}, expect.any(Object));
            expect(mockSdk.store.cart.createLineItem).toHaveBeenCalledWith(
                'cart_1',
                { variant_id: 'SKU1', quantity: 2, metadata: undefined },
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
            expect(result?.id).toBe('cart_1');
        });

        it('should succeed when cart has no customerId (guest cart)', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: { ...minimalCart, customer_id: null } });
            mockSdk.store.cart.createLineItem.mockResolvedValue({ cart: minimalCart });
            mockAuthService.getCustomerId.mockReturnValue(undefined);

            const result = await firstValueFrom(
                service.addCartItem(
                    { cartId: 'cart_1', sku: 'SKU1', quantity: 1 } as Carts.Request.AddCartItemBody,
                    'Bearer token',
                ),
            );

            expect(result?.id).toBe('cart_1');
        });

        it('should create new cart for guest when no cartId (createCartAndAddItem)', async () => {
            mockSdk.store.cart.create.mockResolvedValue({ cart: { ...minimalCart, id: 'cart_new' } });
            mockSdk.store.cart.createLineItem.mockResolvedValue({ cart: { ...minimalCart, id: 'cart_new' } });
            mockAuthService.getCustomerId.mockReturnValue(undefined);

            const result = await firstValueFrom(
                service.addCartItem(
                    { sku: 'SKU1', quantity: 2, currency: 'EUR' } as Carts.Request.AddCartItemBody,
                    undefined,
                ),
            );

            expect(mockSdk.store.cart.create).toHaveBeenCalledWith(
                { currency_code: 'eur', region_id: undefined, metadata: undefined },
                {},
                expect.any(Object),
            );
            expect(mockSdk.store.cart.createLineItem).toHaveBeenCalled();
            expect(result?.id).toBe('cart_new');
        });

        it('should create new cart for authenticated user when no cartId', async () => {
            mockSdk.store.cart.create.mockResolvedValue({ cart: { ...minimalCart, id: 'cart_auth' } });
            mockSdk.store.cart.createLineItem.mockResolvedValue({ cart: { ...minimalCart, id: 'cart_auth' } });
            mockAuthService.getCustomerId.mockReturnValue('cust_1');

            const result = await firstValueFrom(
                service.addCartItem(
                    { sku: 'SKU1', quantity: 1, currency: 'EUR' } as Carts.Request.AddCartItemBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.create).toHaveBeenCalled();
            expect(result?.id).toBe('cart_auth');
        });
    });

    describe('updateCartItem', () => {
        it('should call updateLineItem', async () => {
            mockSdk.store.cart.updateLineItem.mockResolvedValue({ cart: minimalCart });

            const result = await firstValueFrom(
                service.updateCartItem({ cartId: 'cart_1', itemId: 'item_1' }, { quantity: 3 }, 'Bearer token'),
            );

            expect(mockSdk.store.cart.updateLineItem).toHaveBeenCalledWith(
                'cart_1',
                'item_1',
                { quantity: 3, metadata: undefined },
                {},
                expect.any(Object),
            );
            expect(result?.id).toBe('cart_1');
        });
    });

    describe('removeCartItem', () => {
        it('should call deleteLineItem', async () => {
            mockSdk.store.cart.deleteLineItem.mockResolvedValue({
                parent: minimalCart,
            } as unknown as HttpTypes.StoreLineItemDeleteResponse);

            const result = await firstValueFrom(
                service.removeCartItem({ cartId: 'cart_1', itemId: 'item_1' }, 'Bearer token'),
            );

            expect(mockSdk.store.cart.deleteLineItem).toHaveBeenCalledWith('cart_1', 'item_1', expect.any(Object));
            expect(result?.id).toBe('cart_1');
        });

        it('should throw NotFoundException when parent is missing', async () => {
            mockSdk.store.cart.deleteLineItem.mockResolvedValue({
                parent: null,
            } as unknown as HttpTypes.StoreLineItemDeleteResponse);

            await expect(
                firstValueFrom(service.removeCartItem({ cartId: 'cart_1', itemId: 'item_1' }, 'Bearer token')),
            ).rejects.toThrow(NotFoundException);
        });
    });

    describe('updateCart', () => {
        it('should call cart.update with regionId, email, metadata, notes', async () => {
            mockSdk.store.cart.update.mockResolvedValue({ cart: minimalCart });

            const result = await firstValueFrom(
                service.updateCart(
                    { id: 'cart_1' },
                    {
                        regionId: 'reg_1',
                        email: 'user@test.com',
                        notes: 'Gift wrap',
                        metadata: { custom: 'value' },
                    } as Carts.Request.UpdateCartBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.update).toHaveBeenCalledWith(
                'cart_1',
                expect.objectContaining({
                    region_id: 'reg_1',
                    email: 'user@test.com',
                    metadata: expect.objectContaining({ notes: 'Gift wrap', custom: 'value' }),
                }),
                {},
                expect.any(Object),
            );
            expect(result?.id).toBe('cart_1');
        });
    });

    describe('updateCartAddresses', () => {
        it('should update cart with inline shipping and billing addresses', async () => {
            const cartWithItems = {
                ...minimalCart,
                items: [{ id: 'item_1', quantity: 1 }],
                metadata: {},
            };
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: cartWithItems });
            mockSdk.store.cart.update.mockResolvedValue({ cart: cartWithItems });

            const shippingAddress = {
                firstName: 'John',
                lastName: 'Doe',
                country: 'PL',
                city: 'Warsaw',
                postalCode: '00-001',
                streetName: 'Main',
                streetNumber: '1',
            };
            const billingAddress = { ...shippingAddress, streetName: 'Billing St' };

            const result = await firstValueFrom(
                service.updateCartAddresses(
                    { cartId: 'cart_1' },
                    { shippingAddress, billingAddress } as Carts.Request.UpdateCartAddressesBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.update).toHaveBeenCalledWith(
                'cart_1',
                expect.objectContaining({
                    shipping_address: expect.objectContaining({ first_name: 'John', country_code: 'pl' }),
                    billing_address: expect.objectContaining({ address_1: 'Billing St' }),
                }),
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
        });

        it('should throw BadRequestException when both addresses missing', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });

            await expect(
                firstValueFrom(
                    service.updateCartAddresses(
                        { cartId: 'cart_1' },
                        {} as Carts.Request.UpdateCartAddressesBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(BadRequestException);
        });
    });

    describe('addShippingMethod', () => {
        it('should add shipping method when cart has items', async () => {
            const cartWithItems = {
                ...minimalCart,
                items: [{ id: 'item_1', quantity: 1 }],
            };
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: cartWithItems });
            mockSdk.store.cart.addShippingMethod.mockResolvedValue({ cart: cartWithItems });

            const result = await firstValueFrom(
                service.addShippingMethod(
                    { cartId: 'cart_1' },
                    { shippingOptionId: 'opt_1' } as Carts.Request.AddShippingMethodBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.addShippingMethod).toHaveBeenCalledWith(
                'cart_1',
                { option_id: 'opt_1' },
                {},
                expect.any(Object),
            );
            expect(result).toBeDefined();
        });

        it('should throw BadRequestException when cart has no items', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });

            await expect(
                firstValueFrom(
                    service.addShippingMethod(
                        { cartId: 'cart_1' },
                        { shippingOptionId: 'opt_1' } as Carts.Request.AddShippingMethodBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(BadRequestException);
        });
    });

    describe('applyPromotion', () => {
        it('should call client.fetch with promo_codes', async () => {
            mockSdk.client.fetch.mockResolvedValue({ cart: minimalCart });

            const result = await firstValueFrom(
                service.applyPromotion(
                    { cartId: 'cart_1' } as Carts.Request.ApplyPromotionParams,
                    { code: 'SAVE10' } as Carts.Request.ApplyPromotionBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.client.fetch).toHaveBeenCalledWith(
                '/store/carts/cart_1/promotions',
                expect.objectContaining({
                    method: 'POST',
                    body: expect.objectContaining({ promo_codes: ['SAVE10'] }),
                }),
            );
            expect(result?.id).toBe('cart_1');
        });
    });

    describe('removePromotion', () => {
        it('should call client.fetch with promotion code in promo_codes', async () => {
            mockSdk.client.fetch.mockResolvedValue({ cart: minimalCart });

            const result = await firstValueFrom(
                service.removePromotion(
                    { cartId: 'cart_1', code: 'SAVE10' } as Carts.Request.RemovePromotionParams,
                    'Bearer token',
                ),
            );

            expect(mockSdk.client.fetch).toHaveBeenCalledWith(
                '/store/carts/cart_1/promotions',
                expect.objectContaining({
                    method: 'POST',
                    body: expect.objectContaining({ promo_codes: ['SAVE10'] }),
                }),
            );
            expect(result).toBeDefined();
            expect(result?.id).toBe('cart_1');
        });
    });

    describe('prepareCheckout', () => {
        it('should return cart when valid', async () => {
            const cartWithItems = {
                ...minimalCart,
                items: [{ id: 'item_1', quantity: 1 }],
            };
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: cartWithItems });

            const result = await firstValueFrom(
                service.prepareCheckout({ cartId: 'cart_1' } as Carts.Request.PrepareCheckoutParams, 'Bearer token'),
            );

            expect(result).toBeDefined();
            expect(result?.id).toBe('cart_1');
        });

        it('should throw BadRequestException when cart has no items', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });

            await expect(
                firstValueFrom(
                    service.prepareCheckout(
                        { cartId: 'cart_1' } as Carts.Request.PrepareCheckoutParams,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(BadRequestException);
            await expect(
                firstValueFrom(
                    service.prepareCheckout(
                        { cartId: 'cart_1' } as Carts.Request.PrepareCheckoutParams,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow('Cart must have items before preparing checkout');
        });
    });

    describe('getCartList', () => {
        it('should throw NotImplementedException', async () => {
            await expect(
                firstValueFrom(service.getCartList({ limit: 10, offset: 0 } as Carts.Request.GetCartListQuery)),
            ).rejects.toThrow(NotImplementedException);
        });
    });

    describe('getCurrentCart', () => {
        it('should throw NotImplementedException', async () => {
            await expect(firstValueFrom(service.getCurrentCart('Bearer token'))).rejects.toThrow(
                NotImplementedException,
            );
        });
    });
});
