import { BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth, Carts, Checkout, Customers, Payments } from '@o2s/framework/modules';

import { CheckoutService } from './checkout.service';

const DEFAULT_CURRENCY = 'EUR';

const mappedCart = {
    id: 'cart_1',
    items: { data: [{ id: 'item_1' }], total: 1 },
    shippingAddress: {},
    billingAddress: {},
    shippingMethod: {},
    paymentMethod: {},
    subtotal: { value: 9000 },
    shippingTotal: { value: 0 },
    taxTotal: { value: 1000 },
    discountTotal: { value: 0 },
    total: { value: 10000 },
} as unknown as Carts.Model.Cart;

const mockPaymentSession = {
    id: 'ps_1',
    providerId: 'manual',
} as Payments.Model.PaymentSession;

describe('CheckoutService', () => {
    let service: CheckoutService;
    let mockCartsService: {
        getCart: ReturnType<typeof vi.fn>;
        updateCart: ReturnType<typeof vi.fn>;
        updateCartAddresses: ReturnType<typeof vi.fn>;
        addShippingMethod: ReturnType<typeof vi.fn>;
    };
    let mockPaymentsService: {
        createSession: ReturnType<typeof vi.fn>;
        getSession: ReturnType<typeof vi.fn>;
    };
    let mockSdk: {
        store: {
            cart: { complete: ReturnType<typeof vi.fn> };
            fulfillment: {
                listCartOptions: ReturnType<typeof vi.fn>;
                calculate: ReturnType<typeof vi.fn>;
            };
        };
    };
    let mockMedusaJsService: { getSdk: ReturnType<typeof vi.fn>; getStoreApiHeaders: ReturnType<typeof vi.fn> };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn>; warn: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockCartsService = {
            getCart: vi.fn(),
            updateCart: vi.fn(),
            updateCartAddresses: vi.fn(),
            addShippingMethod: vi.fn(),
        };
        mockPaymentsService = {
            createSession: vi.fn(),
            getSession: vi.fn(),
        };
        mockSdk = {
            store: {
                cart: { complete: vi.fn() },
                fulfillment: {
                    listCartOptions: vi.fn(),
                    calculate: vi.fn(),
                },
            },
        };
        mockMedusaJsService = {
            getSdk: vi.fn(() => mockSdk),
            getStoreApiHeaders: vi.fn(() => ({})),
        };
        mockConfig = {
            get: vi.fn((key: string) => (key === 'DEFAULT_CURRENCY' ? DEFAULT_CURRENCY : '')),
        };
        mockLogger = { debug: vi.fn(), warn: vi.fn() };

        service = new CheckoutService(
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockConfig as unknown as ConfigService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
            {} as unknown as Auth.Service,
            mockCartsService as unknown as Carts.Service,
            {} as unknown as Customers.Service,
            mockPaymentsService as unknown as Payments.Service,
        );
    });

    describe('setAddresses', () => {
        it('should delegate to cartsService.updateCartAddresses after validation', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            vi.mocked(mockCartsService.updateCartAddresses).mockReturnValue(of(mappedCart));

            const data = {
                shippingAddress: {
                    firstName: 'John',
                    lastName: 'Doe',
                    country: 'PL',
                    city: 'Warsaw',
                    postalCode: '00-001',
                },
            };
            const result = await firstValueFrom(
                service.setAddresses({ cartId: 'cart_1' }, data as Checkout.Request.SetAddressesBody, 'Bearer token'),
            );

            expect(mockCartsService.getCart).toHaveBeenCalledWith({ id: 'cart_1' }, 'Bearer token');
            expect(mockCartsService.updateCartAddresses).toHaveBeenCalledWith(
                { cartId: 'cart_1' },
                data,
                'Bearer token',
            );
            expect(result).toBe(mappedCart);
        });

        it('should throw NotFoundException when cart not found', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(undefined));

            await expect(
                firstValueFrom(
                    service.setAddresses(
                        { cartId: 'cart_1' },
                        { shippingAddress: {} } as Checkout.Request.SetAddressesBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(NotFoundException);
            expect(mockCartsService.updateCartAddresses).not.toHaveBeenCalled();
        });

        it('should throw when cart has no items', async () => {
            const emptyCart = { ...mappedCart, items: { data: [], total: 0 } };
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(emptyCart));

            await expect(
                firstValueFrom(
                    service.setAddresses(
                        { cartId: 'cart_1' },
                        { shippingAddress: {} } as Checkout.Request.SetAddressesBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow('Cart must have items before checkout');
            expect(mockCartsService.updateCartAddresses).not.toHaveBeenCalled();
        });
    });

    describe('setShippingMethod', () => {
        it('should delegate to cartsService.addShippingMethod', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            vi.mocked(mockCartsService.addShippingMethod).mockReturnValue(of(mappedCart));

            const result = await firstValueFrom(
                service.setShippingMethod({ cartId: 'cart_1' }, { shippingOptionId: 'opt_1' }, 'Bearer token'),
            );

            expect(mockCartsService.getCart).toHaveBeenCalledWith({ id: 'cart_1' }, 'Bearer token');
            expect(mockCartsService.addShippingMethod).toHaveBeenCalledWith(
                { cartId: 'cart_1' },
                { shippingOptionId: 'opt_1' },
                'Bearer token',
            );
            expect(result).toBe(mappedCart);
        });
    });

    describe('setPayment', () => {
        it('should delegate to paymentsService.createSession and cartsService.updateCart', async () => {
            vi.mocked(mockPaymentsService.createSession).mockReturnValue(of(mockPaymentSession));
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            vi.mocked(mockCartsService.updateCart).mockReturnValue(of(mappedCart));

            const result = await firstValueFrom(
                service.setPayment(
                    { cartId: 'cart_1' },
                    { providerId: 'manual' } as Checkout.Request.SetPaymentBody,
                    'Bearer token',
                ),
            );

            expect(mockPaymentsService.createSession).toHaveBeenCalledWith(
                expect.objectContaining({ cartId: 'cart_1', providerId: 'manual' }),
                'Bearer token',
            );
            expect(mockCartsService.getCart).toHaveBeenCalledWith({ id: 'cart_1' }, 'Bearer token');
            expect(mockCartsService.updateCart).toHaveBeenCalledWith(
                { id: 'cart_1' },
                expect.objectContaining({
                    metadata: expect.objectContaining({
                        paymentSessionId: 'ps_1',
                        paymentMethod: expect.objectContaining({ id: 'manual' }),
                    }),
                }),
                'Bearer token',
            );
            expect(result).toBe(mockPaymentSession);
        });
    });

    describe('getCheckoutSummary', () => {
        it('should return mapCheckoutSummary(cart) when no payment session', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));

            const result = await firstValueFrom(
                service.getCheckoutSummary(
                    { cartId: 'cart_1' } as Checkout.Request.GetCheckoutSummaryParams,
                    'Bearer token',
                ),
            );

            expect(mockCartsService.getCart).toHaveBeenCalledWith({ id: 'cart_1' }, 'Bearer token');
            expect(mockPaymentsService.getSession).not.toHaveBeenCalled();
            expect(result).toBeDefined();
        });

        it('should call paymentsService.getSession when cart has paymentSessionId', async () => {
            const cartWithPayment = { ...mappedCart, metadata: { paymentSessionId: 'ps_1' } };
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(cartWithPayment));
            vi.mocked(mockPaymentsService.getSession).mockReturnValue(of(mockPaymentSession));

            const result = await firstValueFrom(
                service.getCheckoutSummary(
                    { cartId: 'cart_1' } as Checkout.Request.GetCheckoutSummaryParams,
                    'Bearer token',
                ),
            );

            expect(mockPaymentsService.getSession).toHaveBeenCalledWith({ id: 'ps_1' }, 'Bearer token');
            expect(result).toBeDefined();
        });
    });

    describe('placeOrder', () => {
        it('should call SDK cart.complete and return mapPlaceOrderResponse', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            mockSdk.store.cart.complete.mockResolvedValue({
                type: 'order',
                order: {
                    id: 'order_1',
                    status: 'completed',
                    payment_status: 'captured',
                    currency_code: 'eur',
                    total: 10000,
                    subtotal: 9000,
                    tax_total: 1000,
                    discount_total: 0,
                    shipping_total: 0,
                    items: [],
                    shipping_address: null,
                    billing_address: null,
                    shipping_methods: [],
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            const result = await firstValueFrom(service.placeOrder({ cartId: 'cart_1' }, undefined, 'Bearer token'));

            expect(mockSdk.store.cart.complete).toHaveBeenCalledWith('cart_1', {}, expect.any(Object));
            expect(result.order).toBeDefined();
            expect(result.order?.id).toBe('order_1');
            expect(result.paymentRedirectUrl).toBeUndefined();
        });

        it('should throw BadRequestException when shipping or billing address missing', async () => {
            const cartNoAddress = { ...mappedCart, shippingAddress: undefined, billingAddress: undefined };
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(cartNoAddress));

            await expect(
                firstValueFrom(service.placeOrder({ cartId: 'cart_1' }, undefined, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException when shipping method missing', async () => {
            const cartNoShipping = { ...mappedCart, shippingMethod: undefined };
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(cartNoShipping));

            await expect(
                firstValueFrom(service.placeOrder({ cartId: 'cart_1' }, undefined, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should call updateCart when email differs from cart email before placing order', async () => {
            const cartWithDifferentEmail = { ...mappedCart, email: 'old@test.com' };
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(cartWithDifferentEmail));
            vi.mocked(mockCartsService.updateCart).mockReturnValue(
                of({ ...cartWithDifferentEmail, email: 'new@test.com' }),
            );
            mockSdk.store.cart.complete.mockResolvedValue({
                type: 'order',
                order: {
                    id: 'order_1',
                    status: 'completed',
                    payment_status: 'captured',
                    currency_code: 'eur',
                    total: 10000,
                    subtotal: 9000,
                    tax_total: 1000,
                    discount_total: 0,
                    shipping_total: 0,
                    items: [],
                    shipping_address: null,
                    billing_address: null,
                    shipping_methods: [],
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            const result = await firstValueFrom(
                service.placeOrder(
                    { cartId: 'cart_1' },
                    { email: 'new@test.com' } as Checkout.Request.PlaceOrderBody,
                    'Bearer token',
                ),
            );

            expect(mockCartsService.updateCart).toHaveBeenCalledWith(
                { id: 'cart_1' },
                { email: 'new@test.com' },
                'Bearer token',
            );
            expect(result.order).toBeDefined();
        });

        it('should throw BadRequestException when cart.complete returns non-order response', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            mockSdk.store.cart.complete.mockResolvedValue({ type: 'cart', cart: {} });

            await expect(
                firstValueFrom(service.placeOrder({ cartId: 'cart_1' }, undefined, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException when cart.complete returns 400', async () => {
            vi.mocked(mockCartsService.getCart).mockReturnValue(of(mappedCart));
            mockSdk.store.cart.complete.mockRejectedValue({
                response: { status: 400, data: { message: 'Payment required' } },
            });

            await expect(
                firstValueFrom(service.placeOrder({ cartId: 'cart_1' }, undefined, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });
    });

    describe('getShippingOptions', () => {
        it('should return flat-price options directly when no calculated options', async () => {
            mockSdk.store.fulfillment.listCartOptions.mockResolvedValue({
                shipping_options: [
                    {
                        id: 'opt_1',
                        name: 'Standard',
                        price_type: 'flat',
                        amount: 500,
                        calculated_price: {
                            calculated_amount: 500,
                            currency_code: 'eur',
                            calculated_amount_without_tax: 450,
                        },
                    },
                ],
            });

            const result = await firstValueFrom(
                service.getShippingOptions(
                    { cartId: 'cart_1' } as Checkout.Request.GetShippingOptionsParams,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.fulfillment.listCartOptions).toHaveBeenCalledWith(
                { cart_id: 'cart_1' },
                expect.any(Object),
            );
            expect(mockSdk.store.fulfillment.calculate).not.toHaveBeenCalled();
            expect(result.data).toBeDefined();
            expect(result.data.length).toBe(1);
        });

        it('should fallback to original option when fulfillment.calculate fails', async () => {
            const originalOption = {
                id: 'opt_calc',
                name: 'Calculated',
                price_type: 'calculated',
                amount: 0,
                calculated_price: {
                    calculated_amount: 0,
                    currency_code: 'eur',
                    calculated_amount_without_tax: 0,
                },
            };
            mockSdk.store.fulfillment.listCartOptions.mockResolvedValue({
                shipping_options: [originalOption],
            });
            mockSdk.store.fulfillment.calculate.mockRejectedValue(new Error('Calculation failed'));

            const result = await firstValueFrom(
                service.getShippingOptions(
                    { cartId: 'cart_1' } as Checkout.Request.GetShippingOptionsParams,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.fulfillment.calculate).toHaveBeenCalled();
            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Failed to calculate price for shipping option opt_calc',
                expect.any(Error),
            );
            expect(result.data).toBeDefined();
        });
    });
});
