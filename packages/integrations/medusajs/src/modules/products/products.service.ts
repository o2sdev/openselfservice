import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import slugify from 'slugify';

import { LoggerService } from '@o2s/utils.logger';

import { Products } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';

import { mapProduct, mapProducts, mapRelatedProducts } from './products.mapper';
import { RelatedProductsResponse } from './response.types';

/**
 * Medusa.js implementation of the Products service.
 *
 * Uses Medusa Store API for product operations (list, retrieve, variant details).
 * Store API automatically filters to published products and supports customer-facing features.
 * Requires a custom Medusa auth plugin to validate SSO tokens passed via the authorization header.
 *
 * Note: getRelatedProductList() uses Admin API as it requires a custom endpoint not available in Store API.
 */
@Injectable()
export class ProductsService extends Products.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    // Store API fields for listing products with variants (includes inventory_quantity)
    // Note: handle is included by default in Medusa product response
    private readonly productListFields =
        '*variants,*variants.prices,*variants.options,*categories,*tags,*images,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder';
    // Store API fields for retrieving product with variants (includes inventory_quantity)
    private readonly storeRetrieveFields =
        '*variants,*variants.options,*variants.options.option,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder';
    // Store API fields for retrieving product with variant details (weight, height, etc.)
    private readonly productDetailFields =
        '*variants,+variants.weight,+variants.height,+variants.width,+variants.length,+variants.material,+variants.origin_country,+variants.hs_code,+variants.mid_code,+variants.metadata,+variants.prices,*variants.options,*variants.options.option,+metadata,+handle,+,+images,+tags';

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
            throw new BadRequestException('DEFAULT_CURRENCY is not defined');
        }
    }

    getProductList(
        query: Products.Request.GetProductListQuery,
        authorization?: string,
    ): Observable<Products.Model.Products> {
        const params: HttpTypes.StoreProductListParams = {
            limit: query.limit,
            offset: query.offset,
            fields: this.productListFields,
        };

        const headers = this.medusaJsService.getStoreApiHeaders(authorization);

        return from(
            this.sdk.store.product
                .list(params, headers)
                .then((response: HttpTypes.StoreProductListResponse) => {
                    return mapProducts(response, this.defaultCurrency, query.basePath || '', query.category);
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

    getProduct(params: Products.Request.GetProductParams, authorization?: string): Observable<Products.Model.Product> {
        // Check if id is a product ID (starts with prod_) or a handle
        const isProductId = params.id.startsWith('prod_');

        if (isProductId) {
            return this.getProductById(
                params.id,
                params.variantId,
                params.basePath,
                params.variantOptionGroups,
                authorization,
            );
        }

        // Treat as handle - search for product by handle
        return this.getProductByHandle(
            params.id,
            params.variantId,
            params.basePath,
            params.variantOptionGroups,
            authorization,
        );
    }

    private getProductById(
        productId: string,
        variantId?: string,
        basePath?: string,
        variantOptionGroups?: { medusaTitle: string; label: string }[],
        authorization?: string,
    ): Observable<Products.Model.Product> {
        const headers = this.medusaJsService.getStoreApiHeaders(authorization);
        return from(
            this.sdk.store.product.retrieve(productId, { fields: this.storeRetrieveFields }, headers).catch((error) => {
                throw error;
            }),
        ).pipe(
            switchMap((response: HttpTypes.StoreProductResponse) => {
                const product = response.product;
                if (!product?.variants?.length) {
                    throw new NotFoundException(`No variants found for product ${productId}`);
                }
                const targetVariantId = variantId || product.variants[0]!.id;
                return this.getVariant(
                    productId,
                    targetVariantId,
                    product.variants,
                    basePath,
                    variantOptionGroups,
                    authorization,
                );
            }),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    private getProductByHandle(
        handle: string,
        variantSlug?: string,
        basePath?: string,
        variantOptionGroups?: { medusaTitle: string; label: string }[],
        authorization?: string,
    ): Observable<Products.Model.Product> {
        const headers = this.medusaJsService.getStoreApiHeaders(authorization);
        return from(
            this.sdk.store.product
                .list({ handle, limit: 1, fields: this.storeRetrieveFields }, headers)
                .catch((error) => {
                    throw error;
                }),
        ).pipe(
            switchMap((response: HttpTypes.StoreProductListResponse) => {
                const product = response.products[0];
                if (!product) {
                    throw new NotFoundException(`Product with handle "${handle}" not found`);
                }
                if (!product.variants?.length) {
                    throw new NotFoundException(`No variants found for product with handle "${handle}"`);
                }

                const allVariants = product.variants;

                // Find variant by SKU slug
                let variant = allVariants[0]!;
                if (variantSlug) {
                    const matchingVariant = allVariants.find(
                        (v) => v.sku && slugify(v.sku, { lower: true, strict: true }) === variantSlug,
                    );
                    if (matchingVariant) {
                        variant = matchingVariant;
                    } else {
                        const availableSlugs = allVariants.map((v) =>
                            v.sku ? slugify(v.sku, { lower: true, strict: true }) : v.id,
                        );
                        this.logger.warn(
                            `Variant slug "${variantSlug}" not found for product "${handle}" (${product.id}). Available: [${availableSlugs.join(', ')}]. Falling back to first variant.`,
                        );
                    }
                }

                return this.getVariant(
                    product.id,
                    variant.id,
                    allVariants,
                    basePath,
                    variantOptionGroups,
                    authorization,
                );
            }),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    private getVariant(
        productId: string,
        variantId: string,
        allVariants?: HttpTypes.StoreProductVariant[],
        basePath?: string,
        variantOptionGroups?: { medusaTitle: string; label: string }[],
        authorization?: string,
    ): Observable<Products.Model.Product> {
        const headers = this.medusaJsService.getStoreApiHeaders(authorization);
        return from(
            this.sdk.store.product.retrieve(productId, { fields: this.productDetailFields }, headers).catch((error) => {
                throw error;
            }),
        ).pipe(
            map((response: HttpTypes.StoreProductResponse) => {
                const product = response.product;
                if (!product?.variants?.length) {
                    throw new NotFoundException(`No variants found for product ${productId}`);
                }
                // Find the specific variant from the product's variants array
                const variant = product.variants.find((v) => v.id === variantId);
                if (!variant) {
                    throw new NotFoundException(`Variant ${variantId} not found for product ${productId}`);
                }
                // Merge variant with product data to match expected structure
                const variantWithProduct = {
                    ...variant,
                    product: product,
                } as HttpTypes.StoreProductVariant & { product: HttpTypes.StoreProduct };
                // Use allVariants if provided, otherwise use product.variants
                const variantsToUse = allVariants || product.variants;
                return mapProduct(
                    variantWithProduct,
                    this.defaultCurrency,
                    variantsToUse,
                    basePath || '',
                    variantOptionGroups,
                );
            }),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Retrieves related products for a given product variant.
     * Uses Admin API as this endpoint is not available in Store API.
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
                    return mapRelatedProducts(response.data, this.defaultCurrency, params.basePath || '');
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }
}
