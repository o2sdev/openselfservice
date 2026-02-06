import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, from, map, switchMap } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Products } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapProduct, mapProducts, mapRelatedProducts } from './products.mapper';
import { RelatedProductsResponse } from './response.types';

@Injectable()
export class ProductsService extends Products.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    private readonly productListFields = '*variants,*variants.prices,*categories,*tags,*images';
    private readonly productDetailFields =
        '+weight,+height,+width,+length,+material,+origin_country,+hs_code,+mid_code,+metadata,+product.metadata,product.*,*product.images,*product.tags';

    constructor(
        private readonly config: ConfigService,
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';

        if (!this.defaultCurrency) {
            throw new Error('DEFAULT_CURRENCY is not defined');
        }
    }

    getProductList(query: Products.Request.GetProductListQuery): Observable<Products.Model.Products> {
        const params: HttpTypes.AdminProductListParams = {
            limit: query.limit,
            offset: query.offset,
            status: ['published'],
            fields: this.productListFields,
        };

        return from(
            this.sdk.admin.product
                .list(params)
                .then((response) => {
                    return mapProducts(response, this.defaultCurrency, query.category);
                })
                .catch((error) => {
                    throw error;
                }),
        ).pipe(
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    getProduct(params: Products.Request.GetProductParams): Observable<Products.Model.Product> {
        // If variantId is not provided, fetch the product and use the first variant
        if (!params.variantId) {
            return from(
                this.sdk.admin.product.retrieve(params.id, { fields: 'variants.*' }).catch((error) => {
                    throw error;
                }),
            ).pipe(
                switchMap((response) => {
                    const product = response.product;
                    if (!product?.variants?.length) {
                        throw new Error(`No variants found for product ${params.id}`);
                    }
                    // Use the first variant
                    const variantId = product.variants[0]!.id;
                    return this.getVariant(params.id, variantId);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
        }

        return this.getVariant(params.id, params.variantId);
    }

    private getVariant(productId: string, variantId: string): Observable<Products.Model.Product> {
        // SDK doesn't support productVariant.retrieve, use HTTP client
        return this.httpClient
            .get<HttpTypes.AdminProductVariantResponse>(
                `${this.medusaJsService.getBaseUrl()}/admin/products/${productId}/variants/${variantId}`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                    params: {
                        fields: this.productDetailFields,
                    },
                },
            )
            .pipe(
                map((response) => {
                    if (!response.data.variant) {
                        throw new Error(`Variant ${variantId} not found for product ${productId}`);
                    }
                    return mapProduct(response.data.variant, this.defaultCurrency);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getRelatedProductList(params: Products.Request.GetRelatedProductListParams): Observable<Products.Model.Products> {
        return this.httpClient
            .get<RelatedProductsResponse>(
                `${this.medusaJsService.getBaseUrl()}/admin/products/${params.productId}/variants/${params.productVariantId}/references`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                    params: {
                        referenceType: params.type,
                        limit: params.limit,
                    },
                },
            )
            .pipe(
                map((response) => {
                    return mapRelatedProducts(response.data, this.defaultCurrency);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }
}
