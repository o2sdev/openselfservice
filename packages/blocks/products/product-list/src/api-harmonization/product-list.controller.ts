import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';

import { URL } from './';
import { GetProductListBlockQuery } from './product-list.request';
import { ProductListService } from './product-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ProductListController {
    constructor(protected readonly service: ProductListService) {}

    @Get()
    getProductListBlock(@Headers() headers: AppHeaders, @Query() query: GetProductListBlockQuery) {
        return this.service.getProductListBlock(query, headers);
    }
}
