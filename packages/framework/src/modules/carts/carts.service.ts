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

/**
 * Abstract cart service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class CartService {
    protected constructor(..._services: unknown[]) {}

    /** Returns a single cart by id. Returns undefined if not found. */
    abstract getCart(params: GetCartParams, authorization?: string): Observable<Cart | undefined>;

    /** Cart list with pagination and filters. */
    abstract getCartList(query: GetCartListQuery, authorization?: string): Observable<Carts>;

    /** Creates a new cart. */
    abstract createCart(data: CreateCartBody, authorization?: string): Observable<Cart>;

    /** Updates cart metadata. */
    abstract updateCart(params: UpdateCartParams, data: UpdateCartBody, authorization?: string): Observable<Cart>;

    /** Deletes a cart. */
    abstract deleteCart(params: DeleteCartParams, authorization?: string): Observable<void>;

    /** Adds an item (product) to the cart. */
    abstract addCartItem(data: AddCartItemBody, authorization?: string): Observable<Cart>;

    /** Updates quantity or options of a cart item. */
    abstract updateCartItem(
        params: UpdateCartItemParams,
        data: UpdateCartItemBody,
        authorization?: string,
    ): Observable<Cart>;

    /** Removes an item from the cart. */
    abstract removeCartItem(params: RemoveCartItemParams, authorization?: string): Observable<Cart>;

    /** Applies a promotion code to the cart. */
    abstract applyPromotion(
        params: ApplyPromotionParams,
        data: ApplyPromotionBody,
        authorization?: string,
    ): Observable<Cart>;

    /** Removes a promotion from the cart. */
    abstract removePromotion(params: RemovePromotionParams, authorization?: string): Observable<Cart>;

    /** Returns the current user's active cart. Returns undefined if none. */
    abstract getCurrentCart(authorization?: string): Observable<Cart | undefined>;

    /** Prepares cart for checkout (validates items, availability). */
    abstract prepareCheckout(params: PrepareCheckoutParams, authorization?: string): Observable<Cart>;

    /** Updates cart addresses (shipping and/or billing). */
    abstract updateCartAddresses(
        params: UpdateCartAddressesParams,
        data: UpdateCartAddressesBody,
        authorization?: string,
    ): Observable<Cart>;

    /** Adds shipping method to the cart. */
    abstract addShippingMethod(
        params: AddShippingMethodParams,
        data: AddShippingMethodBody,
        authorization?: string,
    ): Observable<Cart>;
}
