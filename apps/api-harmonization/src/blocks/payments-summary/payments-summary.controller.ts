import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetPaymentsSummaryBlockQuery } from './payments-summary.request';
import { PaymentsSummaryService } from './payments-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PaymentsSummaryController {
    constructor(protected readonly service: PaymentsSummaryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getPaymentsSummaryBlock(@Headers() headers: AppHeaders, @Query() query: GetPaymentsSummaryBlockQuery) {
        return this.service.getPaymentsSummaryBlock(query, headers);
    }
}
