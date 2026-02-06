import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { URL } from './';
import { GetCartBlockQuery } from './cart.request';
import { CartService } from './cart.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CartController {
    constructor(protected readonly service: CartService) {}

    @Get()
    getCartBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCartBlockQuery) {
        return this.service.getCartBlock(query, headers);
    }
}
