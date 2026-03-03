import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CartService } from './carts.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for carts. Base path: `/carts`. All methods delegate to {@link CartService}.
 */
@Controller('/carts')
@UseInterceptors(LoggerService)
export class CartsController {
    constructor(protected readonly cartService: CartService) {}

    @Get('current')
    getCurrentCart(@Headers() headers: AppHeaders): ReturnType<CartService['getCurrentCart']> {
        return this.cartService.getCurrentCart(headers.authorization);
    }

    @Get(':id')
    getCart(
        @Param() params: Request.GetCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCart']> {
        return this.cartService.getCart(params, headers.authorization);
    }

    @Get()
    getCartList(
        @Query() query: Request.GetCartListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['getCartList']> {
        return this.cartService.getCartList(query, headers.authorization);
    }

    @Post()
    createCart(
        @Body() body: Request.CreateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['createCart']> {
        return this.cartService.createCart(body, headers.authorization);
    }

    @Patch(':id')
    updateCart(
        @Param() params: Request.UpdateCartParams,
        @Body() body: Request.UpdateCartBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCart']> {
        return this.cartService.updateCart(params, body, headers.authorization);
    }

    @Delete(':id')
    deleteCart(
        @Param() params: Request.DeleteCartParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['deleteCart']> {
        return this.cartService.deleteCart(params, headers.authorization);
    }

    // Cart item operations
    @Post('items')
    addCartItem(
        @Body() body: Request.AddCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['addCartItem']> {
        return this.cartService.addCartItem(body, headers.authorization);
    }

    @Patch(':cartId/items/:itemId')
    updateCartItem(
        @Param() params: Request.UpdateCartItemParams,
        @Body() body: Request.UpdateCartItemBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['updateCartItem']> {
        return this.cartService.updateCartItem(params, body, headers.authorization);
    }

    @Delete(':cartId/items/:itemId')
    removeCartItem(
        @Param() params: Request.RemoveCartItemParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removeCartItem']> {
        return this.cartService.removeCartItem(params, headers.authorization);
    }

    // Promotion operations
    @Post(':cartId/promotions')
    applyPromotion(
        @Param() params: Request.ApplyPromotionParams,
        @Body() body: Request.ApplyPromotionBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['applyPromotion']> {
        return this.cartService.applyPromotion(params, body, headers.authorization);
    }

    @Delete(':cartId/promotions/:code')
    removePromotion(
        @Param() params: Request.RemovePromotionParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CartService['removePromotion']> {
        return this.cartService.removePromotion(params, headers.authorization);
    }
}
