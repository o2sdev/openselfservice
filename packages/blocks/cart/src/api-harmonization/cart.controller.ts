import { Models } from '@o2s/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCartBlockQuery } from './cart.request';
import { CartService } from './cart.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CartController {
    constructor(protected readonly service: CartService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCartBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCartBlockQuery) {
        return this.service.getCartBlock(query, headers);
    }
}
