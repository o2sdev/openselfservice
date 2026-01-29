import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { URL } from './';
import type { GetProductDetailsBlockQuery } from './product-details.request';
import { ProductDetailsService } from './product-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ProductDetailsController {
    constructor(protected readonly service: ProductDetailsService) {}

    @Get(':id')
    getProductDetails(
        @Param('id') id: string,
        @Query() query: GetProductDetailsBlockQuery,
        @Headers() headers: Models.Headers.AppHeaders,
    ) {
        return this.service.getProductDetails(id, query, headers);
    }
}
