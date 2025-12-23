import { Controller, Get, Headers, Param, Query, Req } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import type { Request, Response } from './product-details.client';
import { ProductDetailsService } from './product-details.service';

@Controller('blocks/product-details')
export class ProductDetailsController {
    constructor(private readonly productDetailsService: ProductDetailsService) {}

    @Get(':id')
    getProductDetails(
        @Param('id') id: string,
        @Query() query: Request.GetProductDetailsBlockQuery,
        @Headers() headers: Models.Headers.AppHeaders,
    ): Observable<Response.GetProductDetailsBlockResponse> {
        return this.productDetailsService.getProductDetails(id, query, headers);
    }
}
