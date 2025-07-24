import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './payments-history.client';
import { GetPaymentsHistoryBlockQuery } from './payments-history.request';
import { PaymentsHistoryService } from './payments-history.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PaymentsHistoryController {
    constructor(protected readonly service: PaymentsHistoryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getPaymentsHistoryBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetPaymentsHistoryBlockQuery,
    ) {
        return this.service.getPaymentsHistoryBlock(query, headers);
    }
}
