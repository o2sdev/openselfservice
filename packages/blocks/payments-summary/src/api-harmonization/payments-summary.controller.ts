import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetPaymentsSummaryBlockQuery } from './payments-summary.request';
import { PaymentsSummaryService } from './payments-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PaymentsSummaryController {
    constructor(protected readonly service: PaymentsSummaryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: ['selfservice_org_user'] })
    @Auth.Decorators.Permissions({ resource: 'invoices', actions: ['view'] })
    getPaymentsSummaryBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetPaymentsSummaryBlockQuery,
    ) {
        return this.service.getPaymentsSummaryBlock(query, headers);
    }
}
