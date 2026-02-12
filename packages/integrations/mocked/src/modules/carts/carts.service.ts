import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Auth, Carts } from '@o2s/framework/modules';

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
    constructor(private readonly authService: Auth.Service) {}

    getCart(
        params: Carts.Request.GetCartParams,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart | undefined> {
        const cart = mapCart(params);

        // For guest carts (no customerId), allow access without auth
        if (cart && !cart.customerId) {
            return of(cart).pipe(responseDelay());
        }

        // For customer carts, verify authorization
        if (authorization) {
            const customerId = this.authService.getCustomerId(authorization);
            if (cart && cart.customerId && cart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to access this cart');
            }
        }

        return of(cart).pipe(responseDelay());
    }

    getCartList(
        query: Carts.Request.GetCartListQuery,
        authorization: string | undefined,
    ): Observable<Carts.Model.Carts> {
        let customerId: string | undefined;

        if (authorization) {
            customerId = this.authService.getCustomerId(authorization);
        }

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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

            // Verify authorization for customer carts
            if (existingCart.customerId && authorization) {
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
        const updatedCart = addCartItem(cartId, data);
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
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

        // Verify authorization for customer carts
        if (cart.customerId && authorization) {
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
            throw new NotFoundException('Cart not found');
        }

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to update this cart');
            }
        }

        // Build update data
        const updateData: Carts.Request.UpdateCartBody = {
            notes: data.notes,
            email: data.email,
            metadata: {
                ...existingCart.metadata,
            },
        };

        // Set addresses if provided
        if (data.shippingAddressId) {
            updateData.shippingAddressId = data.shippingAddressId;
        }
        if (data.shippingAddress) {
            // Store in metadata for mocked implementation
            updateData.metadata = {
                ...updateData.metadata,
                shippingAddress: data.shippingAddress,
            };
        }
        if (data.billingAddressId) {
            updateData.billingAddressId = data.billingAddressId;
        }
        if (data.billingAddress) {
            // Store in metadata for mocked implementation
            updateData.metadata = {
                ...updateData.metadata,
                billingAddress: data.billingAddress,
            };
        }

        const cart = updateCart({ id: params.cartId }, updateData);
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }

        return of(cart).pipe(responseDelay());
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

        // Verify authorization for customer carts
        if (existingCart.customerId && authorization) {
            const customerId = this.authService.getCustomerId(authorization);
            if (existingCart.customerId !== customerId) {
                throw new UnauthorizedException('Unauthorized to modify this cart');
            }
        }

        // Validate cart has items
        if (!existingCart.items || existingCart.items.data.length === 0) {
            throw new BadRequestException('Cart must have items before adding shipping method');
        }

        const cart = updateCart({ id: params.cartId }, { shippingMethodId: data.shippingOptionId });
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }

        return of(cart).pipe(responseDelay());
    }
}
