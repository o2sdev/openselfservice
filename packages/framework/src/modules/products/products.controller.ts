import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';
import { ProductService } from './products.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/products')
@UseInterceptors(LoggerService)
export class ProductsController {
    constructor(protected readonly productService: ProductService) {}

    @Get()
    getProductList(@Query() query: GetProductListQuery, @Headers() headers: AppHeaders): Observable<Products> {
        return this.productService.getProductList(query, headers.authorization);
    }

    @Get(':id')
    getProduct(@Param() params: GetProductParams, @Headers() headers: AppHeaders): Observable<Product> {
        return this.productService.getProduct(params, headers.authorization);
    }

    @Get(':id/variants/:variantId/related-products')
    getRelatedProductList(
        @Param() params: GetRelatedProductListParams,
        @Headers() headers: AppHeaders,
    ): Observable<Products> {
        return this.productService.getRelatedProductList(params, headers.authorization);
    }
}
