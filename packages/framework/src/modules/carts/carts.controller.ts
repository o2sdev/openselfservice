import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CartService } from './carts.service';
import { AppHeaders } from '@/utils/models/headers';

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
    @ApiResponse({ status: 200, description: 'Returns active cart for current user/session.' })
    getCurrentCart(@Headers() headers: AppHeaders): ReturnType<CartService['getCurrentCart']> {
        return this.cartService.getCurrentCart(headers.authorization);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get cart by id' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiResponse({ status: 200, description: 'Returns cart details.' })
    @ApiResponse({ status: 404, description: 'Cart was not found.' })
    getCart(
        @Param() params: Request.GetCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCart']> {
        return this.cartService.getCart(params, headers.authorization);
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
    @ApiResponse({ status: 200, description: 'Returns paginated carts list.' })
    getCartList(
        @Query() query: Request.GetCartListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCartList']> {
        return this.cartService.getCartList(query, headers.authorization);
    }

    @Post()
    @ApiOperation({ summary: 'Create cart' })
    @ApiBody({ type: Request.CreateCartBody })
    @ApiResponse({ status: 201, description: 'Cart created successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid cart payload.' })
    createCart(
        @Body() body: Request.CreateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['createCart']> {
        return this.cartService.createCart(body, headers.authorization);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update cart' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.UpdateCartBody })
    @ApiResponse({ status: 200, description: 'Cart updated successfully.' })
    @ApiResponse({ status: 404, description: 'Cart was not found.' })
    updateCart(
        @Param() params: Request.UpdateCartParams,
        @Body() body: Request.UpdateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCart']> {
        return this.cartService.updateCart(params, body, headers.authorization);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete cart' })
    @ApiParam({ name: 'id', type: String, description: 'Cart identifier.' })
    @ApiResponse({ status: 204, description: 'Cart deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Cart was not found.' })
    deleteCart(
        @Param() params: Request.DeleteCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['deleteCart']> {
        return this.cartService.deleteCart(params, headers.authorization);
    }

    // Cart item operations
    @Post('items')
    @ApiOperation({ summary: 'Add item to cart' })
    @ApiBody({ type: Request.AddCartItemBody })
    @ApiResponse({ status: 201, description: 'Item added to cart.' })
    @ApiResponse({ status: 400, description: 'Invalid cart item payload.' })
    addCartItem(
        @Body() body: Request.AddCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['addCartItem']> {
        return this.cartService.addCartItem(body, headers.authorization);
    }

    @Patch(':cartId/items/:itemId')
    @ApiOperation({ summary: 'Update cart item' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'itemId', type: String, description: 'Cart item identifier.' })
    @ApiBody({ type: Request.UpdateCartItemBody })
    @ApiResponse({ status: 200, description: 'Cart item updated.' })
    @ApiResponse({ status: 404, description: 'Cart or item was not found.' })
    updateCartItem(
        @Param() params: Request.UpdateCartItemParams,
        @Body() body: Request.UpdateCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCartItem']> {
        return this.cartService.updateCartItem(params, body, headers.authorization);
    }

    @Delete(':cartId/items/:itemId')
    @ApiOperation({ summary: 'Remove cart item' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'itemId', type: String, description: 'Cart item identifier.' })
    @ApiResponse({ status: 204, description: 'Cart item removed.' })
    @ApiResponse({ status: 404, description: 'Cart or item was not found.' })
    removeCartItem(
        @Param() params: Request.RemoveCartItemParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removeCartItem']> {
        return this.cartService.removeCartItem(params, headers.authorization);
    }

    // Promotion operations
    @Post(':cartId/promotions')
    @ApiOperation({ summary: 'Apply promotion code' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.ApplyPromotionBody })
    @ApiResponse({ status: 200, description: 'Promotion applied.' })
    @ApiResponse({ status: 404, description: 'Cart was not found.' })
    applyPromotion(
        @Param() params: Request.ApplyPromotionParams,
        @Body() body: Request.ApplyPromotionBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['applyPromotion']> {
        return this.cartService.applyPromotion(params, body, headers.authorization);
    }

    @Delete(':cartId/promotions/:code')
    @ApiOperation({ summary: 'Remove promotion code' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiParam({ name: 'code', type: String, description: 'Promotion/coupon code.' })
    @ApiResponse({ status: 204, description: 'Promotion removed.' })
    @ApiResponse({ status: 404, description: 'Cart or promotion was not found.' })
    removePromotion(
        @Param() params: Request.RemovePromotionParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removePromotion']> {
        return this.cartService.removePromotion(params, headers.authorization);
    }
}
