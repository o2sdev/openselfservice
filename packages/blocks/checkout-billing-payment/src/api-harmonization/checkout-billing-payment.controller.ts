import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCheckoutBillingPaymentBlockQuery } from './checkout-billing-payment.request';
import { CheckoutBillingPaymentService } from './checkout-billing-payment.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CheckoutBillingPaymentController {
    constructor(protected readonly service: CheckoutBillingPaymentService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCheckoutBillingPaymentBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetCheckoutBillingPaymentBlockQuery,
    ) {
        return this.service.getCheckoutBillingPaymentBlock(query, headers);
    }
}
