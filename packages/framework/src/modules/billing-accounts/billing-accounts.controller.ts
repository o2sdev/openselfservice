import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { BillingAccount, BillingAccounts } from './billing-accounts.model';
import { GetBillingAccountParams, GetBillingAccountsListQuery } from './billing-accounts.request';
import { BillingAccountService } from './billing-accounts.service';

@Controller('/billing-accounts')
@UseInterceptors(LoggerService)
export class BillingAccountController {
    constructor(protected readonly billingAccountService: BillingAccountService) {}

    @Get()
    getBillingAccounts(@Query() query: GetBillingAccountsListQuery): Observable<BillingAccounts> {
        return this.billingAccountService.getBillingAccounts(query);
    }

    @Get(':id')
    getBillingAccount(@Param() params: GetBillingAccountParams): Observable<BillingAccount> {
        return this.billingAccountService.getBillingAccount(params);
    }
}
