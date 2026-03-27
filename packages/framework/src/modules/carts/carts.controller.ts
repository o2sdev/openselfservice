import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiHeader,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { Cart, PaginatedCarts } from './carts.model';
import { CartService } from './carts.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for carts. Base path: `/carts`. All methods delegate to {@link CartService}.
 */
@Controller('/carts')
@UseInterceptors(LoggerService)
@ApiTags('carts')
@ApiHeader({
    name: 'authorization',
    required: false,
    description: 'Bearer token used by the integration layer.',
})
export class CartsController {
    constructor(protected readonly cartService: CartService) {}

    @Get('current')
    @ApiOperation({ summary: 'Get current cart' })
    @ApiOkResponse({ description: 'Returns active cart for current user/session.', type: Cart })
    getCurrentCart(@Headers() headers: AppHeaders): ReturnType<CartService['getCurrentCart']> {
        return this.cartService.getCurrentCart(headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get cart by id' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiOkResponse({ description: 'Returns cart details.', type: Cart })
    @ApiNotFoundResponse({ description: 'Cart was not found.' })
    getCart(
        @Param() params: Request.GetCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCart']> {
        return this.cartService.getCart(params, headers[H.Authorization]);
    }

    @Get()
    @ApiOperation({ summary: 'List carts' })
    @ApiQuery({
        name: 'customerId',
        required: false,
        type: String,
        description: 'Optional customer identifier filter.',
    })
    @ApiQuery({
        name: 'sort',
        required: false,
        type: String,
        description: 'Sort expression, for example `createdAt_DESC`.',
    })
    @ApiQuery({
        name: 'locale',
        required: false,
        type: String,
        description: 'Optional locale code used to localize response values.',
    })
    @ApiOkResponse({ description: 'Returns paginated carts list.', type: PaginatedCarts })
    getCartList(
        @Query() query: Request.GetCartListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCartList']> {
        return this.cartService.getCartList(query, headers[H.Authorization]);
    }

    @Post()
    @ApiOperation({ summary: 'Create cart' })
    @ApiBody({ type: Request.CreateCartBody })
    @ApiCreatedResponse({ description: 'Cart created successfully.', type: Cart })
    createCart(
        @Body() body: Request.CreateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['createCart']> {
        return this.cartService.createCart(body, headers[H.Authorization]);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update cart' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.UpdateCartBody })
    @ApiOkResponse({ description: 'Cart updated successfully.', type: Cart })
    @ApiNotFoundResponse({ description: 'Cart was not found.' })
    updateCart(
        @Param() params: Request.UpdateCartParams,
        @Body() body: Request.UpdateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCart']> {
        return this.cartService.updateCart(params, body, headers[H.Authorization]);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete cart' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiNoContentResponse({ description: 'Cart deleted successfully.' })
    @ApiNotFoundResponse({ description: 'Cart was not found.' })
    deleteCart(
        @Param() params: Request.DeleteCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['deleteCart']> {
        return this.cartService.deleteCart(params, headers[H.Authorization]);
    }

    @Post('items')
    @ApiOperation({ summary: 'Add item to cart' })
    @ApiBody({ type: Request.AddCartItemBody })
    @ApiCreatedResponse({ description: 'Item added to cart.', type: Cart })
    addCartItem(
        @Body() body: Request.AddCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['addCartItem']> {
        return this.cartService.addCartItem(body, headers[H.Authorization]);
    }

    @Patch(':cartId/items/:itemId')
    @ApiOperation({ summary: 'Update cart item' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'itemId', type: String, description: 'Cart item identifier.' })
    @ApiBody({ type: Request.UpdateCartItemBody })
    @ApiOkResponse({ description: 'Cart item updated.', type: Cart })
    @ApiNotFoundResponse({ description: 'Cart or item was not found.' })
    updateCartItem(
        @Param() params: Request.UpdateCartItemParams,
        @Body() body: Request.UpdateCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCartItem']> {
        return this.cartService.updateCartItem(params, body, headers[H.Authorization]);
    }

    @Delete(':cartId/items/:itemId')
    @ApiOperation({ summary: 'Remove cart item' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'itemId', type: String, description: 'Cart item identifier.' })
    @ApiNoContentResponse({ description: 'Cart item removed.' })
    @ApiNotFoundResponse({ description: 'Cart or item was not found.' })
    removeCartItem(
        @Param() params: Request.RemoveCartItemParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removeCartItem']> {
        return this.cartService.removeCartItem(params, headers[H.Authorization]);
    }

    @Post(':cartId/promotions')
    @ApiOperation({ summary: 'Apply promotion code' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.ApplyPromotionBody })
    @ApiOkResponse({ description: 'Promotion applied.', type: Cart })
    @ApiNotFoundResponse({ description: 'Cart was not found.' })
    applyPromotion(
        @Param() params: Request.ApplyPromotionParams,
        @Body() body: Request.ApplyPromotionBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['applyPromotion']> {
        return this.cartService.applyPromotion(params, body, headers[H.Authorization]);
    }

    @Delete(':cartId/promotions/:code')
    @ApiOperation({ summary: 'Remove promotion code' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'code', type: String, description: 'Promotion/coupon code.' })
    @ApiNoContentResponse({ description: 'Promotion removed.' })
    @ApiNotFoundResponse({ description: 'Cart or promotion was not found.' })
    removePromotion(
        @Param() params: Request.RemovePromotionParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removePromotion']> {
        return this.cartService.removePromotion(params, headers[H.Authorization]);
    }
}
