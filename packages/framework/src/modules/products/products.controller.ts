import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { PaginatedProducts, Product } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';
import { ProductService } from './products.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

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
    @ApiOkResponse({ description: 'Returns product list.', type: PaginatedProducts })
    getProductList(@Query() query: GetProductListQuery, @Headers() headers: AppHeaders): Observable<PaginatedProducts> {
        return this.productService.getProductList(query, headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get product by id' })
    @ApiParam({ name: 'id', type: String, description: 'Product identifier.' })
    @ApiOkResponse({ description: 'Returns product details.', type: Product })
    getProduct(@Param() params: GetProductParams, @Headers() headers: AppHeaders): Observable<Product> {
        return this.productService.getProduct(params, headers[H.Authorization]);
    }

    @Get(':id/variants/:variantId/related-products')
    @ApiOperation({ summary: 'List related products' })
    @ApiParam({ name: 'id', type: String, description: 'Product identifier.' })
    @ApiParam({ name: 'variantId', type: String, description: 'Product variant identifier.' })
    @ApiOkResponse({ description: 'Returns related product list.', type: PaginatedProducts })
    getRelatedProductList(
        @Param() params: GetRelatedProductListParams,
        @Headers() headers: AppHeaders,
    ): Observable<PaginatedProducts> {
        return this.productService.getRelatedProductList(params, headers[H.Authorization]);
    }
}
