import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';
import { ProductService } from './products.service';

@Controller('/products')
@UseInterceptors(LoggerService)
export class ProductsController {
    constructor(protected readonly productService: ProductService) {}

    @Get()
    getProductList(@Query() query: GetProductListQuery): Observable<Products> {
        return this.productService.getProductList(query);
    }

    @Get(':id')
    getProduct(@Param() params: GetProductParams): Observable<Product> {
        return this.productService.getProduct(params);
    }

    @Get(':id/variants/:variantId/related-products')
    getRelatedProductList(@Param() params: GetRelatedProductListParams): Observable<Products> {
        return this.productService.getRelatedProductList(params);
    }
}
