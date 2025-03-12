import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetPaymentsHistoryComponentQuery } from './payments-history.request';
import { PaymentsHistoryService } from './payments-history.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PaymentsHistoryController {
    constructor(protected readonly service: PaymentsHistoryService) {}

    @Get()
    getPaymentsHistoryComponent(@Headers() headers: AppHeaders, @Query() query: GetPaymentsHistoryComponentQuery) {
        return this.service.getPaymentsHistoryComponent(query, headers);
    }
}
