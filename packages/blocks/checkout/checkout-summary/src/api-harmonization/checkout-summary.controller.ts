import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCheckoutSummaryBlockQuery } from './checkout-summary.request';
import { CheckoutSummaryService } from './checkout-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CheckoutSummaryController {
    constructor(protected readonly service: CheckoutSummaryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCheckoutSummaryBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetCheckoutSummaryBlockQuery,
    ) {
        return this.service.getCheckoutSummaryBlock(query, headers);
    }
}
