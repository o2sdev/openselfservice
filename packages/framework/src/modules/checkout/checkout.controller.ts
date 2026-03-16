import { Body, Controller, Get, Headers, Param, Post, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CheckoutService } from './checkout.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/checkout')
@UseInterceptors(LoggerService)
export class CheckoutController {
    constructor(protected readonly checkoutService: CheckoutService) {}

    @Post(':cartId/addresses')
    setAddresses(
        @Param() params: Request.SetAddressesParams,
        @Body() body: Request.SetAddressesBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.checkoutService.setAddresses(params, body, headers[H.Authorization]);
    }

    @Post(':cartId/shipping-method')
    setShippingMethod(
        @Param() params: Request.SetShippingMethodParams,
        @Body() body: Request.SetShippingMethodBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.checkoutService.setShippingMethod(params, body, headers[H.Authorization]);
    }

    @Post(':cartId/payment')
    setPayment(
        @Param() params: Request.SetPaymentParams,
        @Body() body: Request.SetPaymentBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.checkoutService.setPayment(params, body, headers[H.Authorization]);
    }

    @Get(':cartId/shipping-options')
    getShippingOptions(@Param() params: Request.GetShippingOptionsParams, @Headers() headers: AppHeaders) {
        return this.checkoutService.getShippingOptions(
            { ...params, locale: headers[H.Locale] },
            headers[H.Authorization],
        );
    }

    @Get(':cartId/summary')
    getCheckoutSummary(@Param() params: Request.GetCheckoutSummaryParams, @Headers() headers: AppHeaders) {
        return this.checkoutService.getCheckoutSummary(
            { ...params, locale: headers[H.Locale] },
            headers[H.Authorization],
        );
    }

    @Post(':cartId/place-order')
    placeOrder(
        @Param() params: Request.PlaceOrderParams,
        @Body() body: Request.PlaceOrderBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.checkoutService.placeOrder(params, body, headers[H.Authorization]);
    }

    @Post(':cartId/complete')
    completeCheckout(
        @Param() params: Request.CompleteCheckoutParams,
        @Body() body: Request.CompleteCheckoutBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.checkoutService.completeCheckout(params, body, headers[H.Authorization]);
    }
}
