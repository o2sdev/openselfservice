import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCartSummaryBlockQuery } from './cart-summary.request';
import { CartSummaryService } from './cart-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CartSummaryController {
    constructor(protected readonly service: CartSummaryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCartSummaryBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCartSummaryBlockQuery) {
        return this.service.getCartSummaryBlock(query, headers);
    }
}
