import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetRecommendedProductsBlockQuery } from './recommended-products.request';
import { RecommendedProductsService } from './recommended-products.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class RecommendedProductsController {
    constructor(protected readonly service: RecommendedProductsService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getRecommendedProductsBlock(@Headers() headers: AppHeaders, @Query() query: GetRecommendedProductsBlockQuery) {
        return this.service.getRecommendedProductsBlock(query, headers);
    }
}
