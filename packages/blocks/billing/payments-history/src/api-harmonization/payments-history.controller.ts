import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './payments-history.client';
import { GetPaymentsHistoryBlockQuery } from './payments-history.request';
import { PaymentsHistoryService } from './payments-history.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PaymentsHistoryController {
    constructor(protected readonly service: PaymentsHistoryService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'invoices', actions: ['view'] })
    getPaymentsHistoryBlock(@Headers() headers: AppHeaders, @Query() query: GetPaymentsHistoryBlockQuery) {
        return this.service.getPaymentsHistoryBlock(query, headers);
    }
}
