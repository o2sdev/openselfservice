import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, from, map } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Products } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapProduct, mapProducts, mapRelatedProducts } from './products.mapper';
import { RelatedProductsResponse } from './response.types';

/**
 * Medusa.js implementation of the Products service.
 *
 * Uses Medusa Store API for product listing and retrieval (public endpoints, no auth required).
 * Uses Admin API only for related products (custom endpoint without Store API equivalent).
 *
 * Note: Store API pricing requires a pricing context (region_id or country_code) to
 * populate variant `calculated_price`. Without it, prices may default to 0.
 */
@Injectable()
export class ProductsService extends Products.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    private readonly productListFields = '*variants,*variants.calculated_price,*categories,*tags,*images';
    private readonly productDetailFields =
        '+weight,+height,+width,+length,+material,+origin_country,+hs_code,+mid_code,+metadata,+product.metadata,product.*,*product.images,*product.tags,*calculated_price';

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

    /**
     * Lists products using Medusa Store API.
     * Store API only returns published products (no status filter needed).
     */
    getProductList(query: Products.Request.GetProductListQuery): Observable<Products.Model.Products> {
        const params: HttpTypes.StoreProductListParams = {
            limit: query.limit,
            offset: query.offset,
            fields: this.productListFields,
        };

        return from(this.sdk.store.product.list(params)).pipe(
            map((response: HttpTypes.StoreProductListResponse) =>
                mapProducts(response, this.defaultCurrency, query.category),
            ),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Retrieves a product by ID using Medusa Store API.
     * If variantId is not provided, uses the first variant.
     */
    getProduct(params: Products.Request.GetProductParams): Observable<Products.Model.Product> {
        return from(this.sdk.store.product.retrieve(params.id, { fields: this.productDetailFields })).pipe(
            map((response: HttpTypes.StoreProductResponse) => {
                const product = response.product;
                if (!product?.variants?.length) {
                    throw new Error(`No variants found for product ${params.id}`);
                }

                // Find the requested variant, or use the first one
                const variants = product.variants as HttpTypes.StoreProductVariant[];
                const variant = params.variantId ? variants.find((v) => v.id === params.variantId) : variants[0];

                if (!variant) {
                    throw new Error(`Variant ${params.variantId} not found for product ${params.id}`);
                }

                // Ensure the variant has a reference to the product for mapping
                const variantWithProduct = { ...variant, product };

                return mapProduct(variantWithProduct, this.defaultCurrency);
            }),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Retrieves related products using Admin API (custom endpoint).
     * No Store API equivalent exists for this custom endpoint.
     * Uses Admin API key for authentication.
     */
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
