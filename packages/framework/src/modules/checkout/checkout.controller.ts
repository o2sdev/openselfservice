import { Body, Controller, Get, Headers, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CheckoutService } from './checkout.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for checkout. Base path: `/checkout`. All methods delegate to {@link CheckoutService}.
 */
@Controller('/checkout')
@UseInterceptors(LoggerService)
@ApiTags('checkout')
export class CheckoutController {
    constructor(protected readonly checkoutService: CheckoutService) {}

    @Post(':cartId/addresses')
    @ApiOperation({ summary: 'Set checkout addresses' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.SetAddressesBody, description: 'Shipping/billing address payload for checkout.' })
    @ApiResponse({ status: 201, description: 'Checkout addresses set.' })
    setAddresses(
        @Param() params: Request.SetAddressesParams,
        @Body() body: Request.SetAddressesBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setAddresses']> {
        return this.checkoutService.setAddresses(params, body, headers.authorization);
    }

    @Post(':cartId/shipping-method')
    @ApiOperation({ summary: 'Set checkout shipping method' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.SetShippingMethodBody, description: 'Shipping method selection payload.' })
    @ApiResponse({ status: 201, description: 'Checkout shipping method set.' })
    setShippingMethod(
        @Param() params: Request.SetShippingMethodParams,
        @Body() body: Request.SetShippingMethodBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setShippingMethod']> {
        return this.checkoutService.setShippingMethod(params, body, headers.authorization);
    }

    @Post(':cartId/payment')
    @ApiOperation({ summary: 'Set checkout payment' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.SetPaymentBody, description: 'Payment provider selection payload.' })
    @ApiResponse({ status: 201, description: 'Checkout payment set.' })
    setPayment(
        @Param() params: Request.SetPaymentParams,
        @Body() body: Request.SetPaymentBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setPayment']> {
        return this.checkoutService.setPayment(params, body, headers.authorization);
    }

    @Get(':cartId/shipping-options')
    @ApiOperation({ summary: 'Get checkout shipping options' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiResponse({ status: 200, description: 'Returns checkout shipping options.' })
    getShippingOptions(
        @Param() params: Request.GetShippingOptionsParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['getShippingOptions']> {
        return this.checkoutService.getShippingOptions(
            { ...params, locale: headers['x-locale'] },
            headers.authorization,
        );
    }

    @Get(':cartId/summary')
    @ApiOperation({ summary: 'Get checkout summary' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiResponse({ status: 200, description: 'Returns checkout summary.' })
    getCheckoutSummary(
        @Param() params: Request.GetCheckoutSummaryParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['getCheckoutSummary']> {
        return this.checkoutService.getCheckoutSummary(
            { ...params, locale: headers['x-locale'] },
            headers.authorization,
        );
    }

    @Post(':cartId/place-order')
    @ApiOperation({ summary: 'Place order from cart' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({
        type: Request.PlaceOrderBody,
        description: 'Optional data required to place order (for example guest email).',
    })
    @ApiResponse({ status: 201, description: 'Order placement started.' })
    placeOrder(
        @Param() params: Request.PlaceOrderParams,
        @Body() body: Request.PlaceOrderBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['placeOrder']> {
        return this.checkoutService.placeOrder(params, body, headers.authorization);
    }

    @Post(':cartId/complete')
    @ApiOperation({ summary: 'Complete checkout flow' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({
        type: Request.CompleteCheckoutBody,
        description: 'Combined checkout payload used to complete checkout in one call.',
    })
    @ApiResponse({ status: 201, description: 'Checkout completed.' })
    completeCheckout(
        @Param() params: Request.CompleteCheckoutParams,
        @Body() body: Request.CompleteCheckoutBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['completeCheckout']> {
        return this.checkoutService.completeCheckout(params, body, headers.authorization);
    }
}
