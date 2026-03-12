import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';
import { ProductService } from './products.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for products. Base path: `/products`. All methods delegate to {@link ProductService}.
 */
@Controller('/products')
@UseInterceptors(LoggerService)
@ApiTags('products')
export class ProductsController {
    constructor(protected readonly productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: 'List products' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Product list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns product list.' })
    getProductList(@Query() query: GetProductListQuery, @Headers() headers: AppHeaders): Observable<Products> {
        return this.productService.getProductList(query, headers.authorization);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get product by id' })
    @ApiParam({ name: 'id', type: String, description: 'Product identifier.' })
    @ApiResponse({ status: 200, description: 'Returns product details.' })
    getProduct(@Param() params: GetProductParams, @Headers() headers: AppHeaders): Observable<Product> {
        return this.productService.getProduct(params, headers.authorization);
    }

    @Get(':id/variants/:variantId/related-products')
    @ApiOperation({ summary: 'List related products' })
    @ApiParam({ name: 'id', type: String, description: 'Product identifier.' })
    @ApiParam({ name: 'variantId', type: String, description: 'Product variant identifier.' })
    @ApiResponse({ status: 200, description: 'Returns related product list.' })
    getRelatedProductList(
        @Param() params: GetRelatedProductListParams,
        @Headers() headers: AppHeaders,
    ): Observable<Products> {
        return this.productService.getRelatedProductList(params, headers.authorization);
    }
}
