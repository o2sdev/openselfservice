import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Observable, forkJoin, of, switchMap, throwError } from 'rxjs';

import { Auth, Carts, Customers } from '@o2s/framework/modules';

import { getShippingOptionById } from '../checkout/checkout.mapper';

import {
    addCartItem,
    applyPromotion,
    createCart,
    deleteCart,
    findActiveCartByCustomerId,
    mapCart,
    mapCarts,
    removeCartItem,
    removePromotion,
    updateCart,
    updateCartItem,
} from './carts.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CartsService implements Carts.Service {
    constructor(
        private readonly authService: Auth.Service,
        private readonly customersService: Customers.Service,
    ) {}

    getCart(
        params: Carts.Request.GetCartParams,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart | undefined> {
        const cart = mapCart(params);

        // Customer carts require authorization
        if (cart?.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to access this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (cart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to access this cart');
            }
        }

        return of(cart).pipe(responseDelay());
    }

    getCartList(
        query: Carts.Request.GetCartListQuery,
        authorization: string | undefined,
    ): Observable<Carts.Model.Carts> {
        // Guests cannot list carts — return empty to prevent enumerating other users' carts
        if (!authorization) {
            return of({ data: [], total: 0 }).pipe(responseDelay());
        }

        const customerId = this.authService.getCustomerId(authorization);
        return of(mapCarts(query, customerId)).pipe(responseDelay());
    }

    createCart(data: Carts.Request.CreateCartBody, authorization: string | undefined): Observable<Carts.Model.Cart> {
        // If no customerId provided but user is authenticated, use their ID
        if (!data.customerId && authorization) {
            const customerId = this.authService.getCustomerId(authorization);
            if (customerId) {
                data = { ...data, customerId };
            }
        }

        const cart = createCart(data);
        return of(cart).pipe(responseDelay());
    }

    updateCart(
        params: Carts.Request.UpdateCartParams,
        data: Carts.Request.UpdateCartBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.id });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to update this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to update this cart');
            }
        }

        const cart = updateCart(params, data);
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }

        return of(cart).pipe(responseDelay());
    }

    deleteCart(params: Carts.Request.DeleteCartParams, authorization: string | undefined): Observable<void> {
        const existingCart = mapCart({ id: params.id });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to delete this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to delete this cart');
            }
        }

        const deleted = deleteCart(params);
        if (!deleted) {
            throw new NotFoundException('Cart not found');
        }

        return of(void 0).pipe(responseDelay());
    }

    addCartItem(data: Carts.Request.AddCartItemBody, authorization: string | undefined): Observable<Carts.Model.Cart> {
        let cartId: string;
        let customerId: string | undefined;

        // Extract customerId if authenticated
        if (authorization) {
            customerId = this.authService.getCustomerId(authorization);
        }

        // If cartId provided, use it
        if (data.cartId) {
            const existingCart = mapCart({ id: data.cartId });

            if (!existingCart) {
                throw new NotFoundException('Cart not found');
            }

            // Customer carts require authorization
            if (existingCart.customerId) {
                if (!authorization) {
                    throw new UnauthorizedException('Authentication required to modify this cart');
                }
                if (existingCart.customerId !== customerId) {
                    throw new UnauthorizedException('Unauthorized to modify this cart');
                }
            }

            cartId = data.cartId;
        } else {
            // No cartId provided - find or create cart
            let cart: Carts.Model.Cart | undefined;

            if (customerId) {
                // For authenticated users: find active cart or create one
                cart = findActiveCartByCustomerId(customerId);

                if (!cart) {
                    // Create new active cart
                    if (!data.currency) {
                        throw new NotFoundException('Currency is required when creating a new cart');
                    }
                    cart = createCart({
                        customerId,
                        type: 'ACTIVE',
                        currency: data.currency,
                        regionId: data.regionId,
                    });
                }
            } else {
                // For guests: create new cart
                if (!data.currency) {
                    throw new NotFoundException('Currency is required when creating a new cart');
                }
                cart = createCart({
                    currency: data.currency,
                    regionId: data.regionId,
                    type: 'ACTIVE',
                });
            }

            cartId = cart.id;
        }

        // Add item to cart
        const updatedCart = addCartItem(cartId, data, data.locale);
        if (!updatedCart) {
            throw new NotFoundException('Cart or product not found');
        }

        return of(updatedCart).pipe(responseDelay());
    }

    updateCartItem(
        params: Carts.Request.UpdateCartItemParams,
        data: Carts.Request.UpdateCartItemBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to modify this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        const cart = updateCartItem(params, data);
        if (!cart) {
            throw new NotFoundException('Cart or item not found');
        }

        return of(cart).pipe(responseDelay());
    }

    removeCartItem(
        params: Carts.Request.RemoveCartItemParams,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to modify this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        const cart = removeCartItem(params);
        if (!cart) {
            throw new NotFoundException('Cart or item not found');
        }

        return of(cart).pipe(responseDelay());
    }

    applyPromotion(
        params: Carts.Request.ApplyPromotionParams,
        data: Carts.Request.ApplyPromotionBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to modify this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        const cart = applyPromotion(params, data);
        if (!cart) {
            throw new NotFoundException('Cart not found or invalid promotion code');
        }

        return of(cart).pipe(responseDelay());
    }

    removePromotion(
        params: Carts.Request.RemovePromotionParams,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to modify this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        const cart = removePromotion(params);
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }

        return of(cart).pipe(responseDelay());
    }

    getCurrentCart(authorization: string | undefined): Observable<Carts.Model.Cart | undefined> {
        let customerId: string | undefined;

        if (authorization) {
            customerId = this.authService.getCustomerId(authorization);
        }

        if (!customerId) {
            // Guest users don't have a "current" cart
            return of(undefined).pipe(responseDelay());
        }

        const cart = findActiveCartByCustomerId(customerId);
        return of(cart).pipe(responseDelay());
    }

    prepareCheckout(
        params: Carts.Request.PrepareCheckoutParams,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const cart = mapCart({ id: params.cartId });

        if (!cart) {
            throw new NotFoundException(`Cart with ID ${params.cartId} not found`);
        }

        // Customer carts require authorization
        if (cart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to prepare checkout for this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (cart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to prepare checkout for this cart');
            }
        }

        // Validate cart has items
        if (!cart.items || cart.items.data.length === 0) {
            throw new BadRequestException('Cart must have items before preparing checkout');
        }

        return of(cart).pipe(responseDelay());
    }

    updateCartAddresses(
        params: Carts.Request.UpdateCartAddressesParams,
        data: Carts.Request.UpdateCartAddressesBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            return throwError(() => new NotFoundException('Cart not found'));
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                return throwError(() => new UnauthorizedException('Authentication required to update this cart'));
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                return throwError(() => new UnauthorizedException('Unauthorized to update this cart'));
            }
        }

        // Guest: require inline addresses when only IDs provided
        const isGuest = !authorization;
        const hasAddressIdsOnly =
            (data.shippingAddressId && !data.shippingAddress) || (data.billingAddressId && !data.billingAddress);
        if (isGuest && hasAddressIdsOnly) {
            return throwError(() => new BadRequestException('Inline addresses required for guest checkout'));
        }

        const resolveAddresses$ = (): Observable<{
            shippingAddress?: Carts.Model.Cart['shippingAddress'];
            billingAddress?: Carts.Model.Cart['billingAddress'];
        }> => {
            if (!authorization) {
                return of({
                    shippingAddress: data.shippingAddress,
                    billingAddress: data.billingAddress,
                });
            }

            const resolveAddress = (addr: Customers.Model.CustomerAddress | undefined, id: string) =>
                addr ? of(addr.address) : throwError(() => new NotFoundException(`Address ${id} not found`));

            const shipping$ =
                data.shippingAddressId && !data.shippingAddress
                    ? this.customersService
                          .getAddress({ id: data.shippingAddressId }, authorization)
                          .pipe(switchMap((addr) => resolveAddress(addr, data.shippingAddressId!)))
                    : of(data.shippingAddress);

            const billing$ =
                data.billingAddressId && !data.billingAddress
                    ? this.customersService
                          .getAddress({ id: data.billingAddressId }, authorization)
                          .pipe(switchMap((addr) => resolveAddress(addr, data.billingAddressId!)))
                    : of(data.billingAddress);

            return forkJoin([shipping$, billing$]).pipe(
                switchMap(([shippingAddress, billingAddress]) =>
                    of({
                        shippingAddress: shippingAddress ?? existingCart.shippingAddress,
                        billingAddress: billingAddress ?? existingCart.billingAddress,
                    }),
                ),
            );
        };

        return resolveAddresses$().pipe(
            switchMap(({ shippingAddress, billingAddress }) => {
                const updateData: Carts.Request.UpdateCartBody = {
                    notes: data.notes,
                    email: data.email,
                    metadata: {
                        ...existingCart.metadata,
                        ...(shippingAddress && { shippingAddress }),
                        ...(billingAddress && { billingAddress }),
                    },
                };

                const cart = updateCart({ id: params.cartId }, updateData);
                if (!cart) {
                    return throwError(() => new NotFoundException('Cart not found'));
                }
                return of(cart);
            }),
            responseDelay(),
        );
    }

    addShippingMethod(
        params: Carts.Request.AddShippingMethodParams,
        data: Carts.Request.AddShippingMethodBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        const existingCart = mapCart({ id: params.cartId });

        if (!existingCart) {
            throw new NotFoundException('Cart not found');
        }

        // Customer carts require authorization
        if (existingCart.customerId) {
            if (!authorization) {
                throw new UnauthorizedException('Authentication required to modify this cart');
            }
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        // Validate cart has items
        if (!existingCart.items || existingCart.items.data.length === 0) {
            throw new BadRequestException('Cart must have items before adding shipping method');
        }

        const option = getShippingOptionById(data.shippingOptionId);
        if (!option) {
            throw new BadRequestException(`Shipping option ${data.shippingOptionId} not found`);
        }

        const cart = updateCart(
            { id: params.cartId },
            {
                shippingMethod: {
                    id: option.id,
                    name: option.name,
                    description: option.description,
                    total: option.total,
                },
                shippingTotal: option.total,
            },
        );
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }

        return of(cart).pipe(responseDelay());
    }
}
