import { Models } from '@o2s/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCheckoutCompanyDataBlockQuery } from './checkout-company-data.request';
import { CheckoutCompanyDataService } from './checkout-company-data.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CheckoutCompanyDataController {
    constructor(protected readonly service: CheckoutCompanyDataService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCheckoutCompanyDataBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCheckoutCompanyDataBlockQuery) {
        return this.service.getCheckoutCompanyDataBlock(query, headers);
    }
}
