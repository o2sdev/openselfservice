import { Observable } from 'rxjs';

import { Cart, Carts } from './carts.model';
import {
    AddCartItemBody,
    AddShippingMethodBody,
    AddShippingMethodParams,
    ApplyPromotionBody,
    ApplyPromotionParams,
    CreateCartBody,
    DeleteCartParams,
    GetCartListQuery,
    GetCartParams,
    PrepareCheckoutParams,
    RemoveCartItemParams,
    RemovePromotionParams,
    UpdateCartAddressesBody,
    UpdateCartAddressesParams,
    UpdateCartBody,
    UpdateCartItemBody,
    UpdateCartItemParams,
    UpdateCartParams,
} from './carts.request';

export abstract class CartService {
    protected constructor(..._services: unknown[]) {}

    abstract getCart(params: GetCartParams, authorization?: string): Observable<Cart | undefined>;

    abstract getCartList(query: GetCartListQuery, authorization?: string): Observable<Carts>;

    abstract createCart(data: CreateCartBody, authorization?: string): Observable<Cart>;

    abstract updateCart(params: UpdateCartParams, data: UpdateCartBody, authorization?: string): Observable<Cart>;

    abstract deleteCart(params: DeleteCartParams, authorization?: string): Observable<void>;

    abstract addCartItem(data: AddCartItemBody, authorization?: string): Observable<Cart>;

    abstract updateCartItem(
        params: UpdateCartItemParams,
        data: UpdateCartItemBody,
        authorization?: string,
    ): Observable<Cart>;

    abstract removeCartItem(params: RemoveCartItemParams, authorization?: string): Observable<Cart>;

    abstract applyPromotion(
        params: ApplyPromotionParams,
        data: ApplyPromotionBody,
        authorization?: string,
    ): Observable<Cart>;

    abstract removePromotion(params: RemovePromotionParams, authorization?: string): Observable<Cart>;

    abstract getCurrentCart(authorization?: string): Observable<Cart | undefined>;

    abstract prepareCheckout(params: PrepareCheckoutParams, authorization?: string): Observable<Cart>;

    // Update cart addresses (shipping and/or billing)
    abstract updateCartAddresses(
        params: UpdateCartAddressesParams,
        data: UpdateCartAddressesBody,
        authorization?: string,
    ): Observable<Cart>;

    // Add shipping method to cart
    abstract addShippingMethod(
        params: AddShippingMethodParams,
        data: AddShippingMethodBody,
        authorization?: string,
    ): Observable<Cart>;
}
