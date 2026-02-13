import { Observable } from 'rxjs';

import * as Carts from './';

export abstract class CartService {
    protected constructor(..._services: unknown[]) {}

    abstract getCart(
        params: Carts.Request.GetCartParams,
        authorization?: string,
    ): Observable<Carts.Model.Cart | undefined>;

    abstract getCartList(query: Carts.Request.GetCartListQuery, authorization?: string): Observable<Carts.Model.Carts>;

    abstract createCart(data: Carts.Request.CreateCartBody, authorization?: string): Observable<Carts.Model.Cart>;

    abstract updateCart(
        params: Carts.Request.UpdateCartParams,
        data: Carts.Request.UpdateCartBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    abstract deleteCart(params: Carts.Request.DeleteCartParams, authorization?: string): Observable<void>;

    abstract addCartItem(data: Carts.Request.AddCartItemBody, authorization?: string): Observable<Carts.Model.Cart>;

    abstract updateCartItem(
        params: Carts.Request.UpdateCartItemParams,
        data: Carts.Request.UpdateCartItemBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    abstract removeCartItem(
        params: Carts.Request.RemoveCartItemParams,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    abstract applyPromotion(
        params: Carts.Request.ApplyPromotionParams,
        data: Carts.Request.ApplyPromotionBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    abstract removePromotion(
        params: Carts.Request.RemovePromotionParams,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    abstract getCurrentCart(authorization?: string): Observable<Carts.Model.Cart | undefined>;

    abstract prepareCheckout(
        params: Carts.Request.PrepareCheckoutParams,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    // Update cart addresses (shipping and/or billing)
    abstract updateCartAddresses(
        params: Carts.Request.UpdateCartAddressesParams,
        data: Carts.Request.UpdateCartAddressesBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    // Add shipping method to cart
    abstract addShippingMethod(
        params: Carts.Request.AddShippingMethodParams,
        data: Carts.Request.AddShippingMethodBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;
}
