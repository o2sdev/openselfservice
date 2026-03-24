import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { BillingAccount, BillingAccounts } from './billing-accounts.model';
import { GetBillingAccountParams, GetBillingAccountsListQuery } from './billing-accounts.request';
import { BillingAccountService } from './billing-accounts.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for billing accounts. Base path: `/billing-accounts`. All methods delegate to {@link BillingAccountService}.
 */
@Controller('/billing-accounts')
@UseInterceptors(LoggerService)
@ApiTags('billing-accounts')
export class BillingAccountController {
    constructor(protected readonly billingAccountService: BillingAccountService) {}

    @Get()
    @ApiOperation({ summary: 'List billing accounts' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Billing account list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns billing accounts list.' })
    getBillingAccounts(
        @Query() query: GetBillingAccountsListQuery,
        @Headers() headers: AppHeaders,
    ): Observable<BillingAccounts> {
        return this.billingAccountService.getBillingAccounts(query, headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get billing account by id' })
    @ApiParam({ name: 'id', type: String, description: 'Billing account identifier.' })
    @ApiResponse({ status: 200, description: 'Returns billing account details.' })
    getBillingAccount(
        @Param() params: GetBillingAccountParams,
        @Headers() headers: AppHeaders,
    ): Observable<BillingAccount> {
        return this.billingAccountService.getBillingAccount(params, headers[H.Authorization]);
    }
}
