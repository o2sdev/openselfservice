import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { URL } from './';
import { GetProductListBlockQuery } from './product-list.request';
import { ProductListService } from './product-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ProductListController {
    constructor(protected readonly service: ProductListService) {}

    @Get()
    getProductListBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetProductListBlockQuery) {
        return this.service.getProductListBlock(query, headers);
    }
}
