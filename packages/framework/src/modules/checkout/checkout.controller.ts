import { Body, Controller, Get, Headers, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import * as Carts from '../carts';
import * as Payments from '../payments';

import { Request } from './';
import { CheckoutSummary, PlaceOrderResponse, ShippingOptions } from './checkout.model';
import { CheckoutService } from './checkout.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

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
    @ApiCreatedResponse({ description: 'Checkout addresses set.', type: Carts.Model.Cart })
    setAddresses(
        @Param() params: Request.SetAddressesParams,
        @Body() body: Request.SetAddressesBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setAddresses']> {
        return this.checkoutService.setAddresses(params, body, headers[H.Authorization]);
    }

    @Post(':cartId/shipping-method')
    @ApiOperation({ summary: 'Set checkout shipping method' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.SetShippingMethodBody, description: 'Shipping method selection payload.' })
    @ApiCreatedResponse({ description: 'Checkout shipping method set.', type: Carts.Model.Cart })
    setShippingMethod(
        @Param() params: Request.SetShippingMethodParams,
        @Body() body: Request.SetShippingMethodBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setShippingMethod']> {
        return this.checkoutService.setShippingMethod(params, body, headers[H.Authorization]);
    }

    @Post(':cartId/payment')
    @ApiOperation({ summary: 'Set checkout payment' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({ type: Request.SetPaymentBody, description: 'Payment provider selection payload.' })
    @ApiCreatedResponse({ description: 'Checkout payment set.', type: Payments.Model.PaymentSession })
    setPayment(
        @Param() params: Request.SetPaymentParams,
        @Body() body: Request.SetPaymentBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['setPayment']> {
        return this.checkoutService.setPayment(params, body, headers[H.Authorization]);
    }

    @Get(':cartId/shipping-options')
    @ApiOperation({ summary: 'Get checkout shipping options' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiOkResponse({ description: 'Returns checkout shipping options.', type: ShippingOptions })
    getShippingOptions(
        @Param() params: Request.GetShippingOptionsParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['getShippingOptions']> {
        return this.checkoutService.getShippingOptions(
            { ...params, locale: headers[H.Locale] },
            headers[H.Authorization],
        );
    }

    @Get(':cartId/summary')
    @ApiOperation({ summary: 'Get checkout summary' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiOkResponse({ description: 'Returns checkout summary.', type: CheckoutSummary })
    getCheckoutSummary(
        @Param() params: Request.GetCheckoutSummaryParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['getCheckoutSummary']> {
        return this.checkoutService.getCheckoutSummary(
            { ...params, locale: headers[H.Locale] },
            headers[H.Authorization],
        );
    }

    @Post(':cartId/place-order')
    @ApiOperation({ summary: 'Place order from cart' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({
        type: Request.PlaceOrderBody,
        description: 'Optional data required to place order (for example guest email).',
    })
    @ApiCreatedResponse({ description: 'Order placement started.', type: PlaceOrderResponse })
    placeOrder(
        @Param() params: Request.PlaceOrderParams,
        @Body() body: Request.PlaceOrderBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['placeOrder']> {
        return this.checkoutService.placeOrder(
            { ...params, locale: headers[H.Locale] },
            body,
            headers[H.Authorization],
        );
    }

    @Post(':cartId/complete')
    @ApiOperation({ summary: 'Complete checkout flow' })
    @ApiParam({ name: 'cartId', type: String, description: 'Cart identifier.' })
    @ApiBody({
        type: Request.CompleteCheckoutBody,
        description: 'Combined checkout payload used to complete checkout in one call.',
    })
    @ApiCreatedResponse({ description: 'Checkout completed.', type: PlaceOrderResponse })
    completeCheckout(
        @Param() params: Request.CompleteCheckoutParams,
        @Body() body: Request.CompleteCheckoutBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CheckoutService['completeCheckout']> {
        return this.checkoutService.completeCheckout(params, body, headers[H.Authorization]);
    }
}
