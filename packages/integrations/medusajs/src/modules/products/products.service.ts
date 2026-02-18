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

@Injectable()
export class ProductsService extends Products.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    // Note: handle is included by default in Medusa product response
    private readonly productListFields =
        '*variants,*variants.prices,*variants.options,*categories,*tags,*images,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder';
    // Store API fields for retrieving product with variants (includes inventory_quantity)
    private readonly storeRetrieveFields =
        '*variants,*variants.options,*variants.options.option,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder';
    // Admin API fields for retrieving single variant details (weight, height, etc.)
    private readonly productDetailFields =
        '+weight,+height,+width,+length,+material,+origin_country,+hs_code,+mid_code,+metadata,+product.metadata,+product.handle,product.*,*product.images,*product.tags,*options,*options.option';

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

    getProduct(params: Products.Request.GetProductParams): Observable<Products.Model.Product> {
        // Check if id is a product ID (starts with prod_) or a handle
        const isProductId = params.id.startsWith('prod_');

        if (isProductId) {
            return this.getProductById(params.id, params.variantId, params.basePath, params.variantOptionGroups);
        }

        // Treat as handle - search for product by handle
        return this.getProductByHandle(params.id, params.variantId, params.basePath, params.variantOptionGroups);
    }

    private getProductById(
        productId: string,
        variantId?: string,
        basePath?: string,
        variantOptionGroups?: { medusaTitle: string; label: string }[],
    ): Observable<Products.Model.Product> {
        return from(
            this.sdk.store.product.retrieve(productId, { fields: this.storeRetrieveFields }).catch((error) => {
                throw error;
            }),
        ).pipe(
            switchMap((response) => {
                const product = response.product;
                if (!product?.variants?.length) {
                    throw new NotFoundException(`No variants found for product ${productId}`);
                }
                const targetVariantId = variantId || product.variants[0]!.id;
                return this.getVariant(
                    productId,
                    targetVariantId,
                    product.variants as HttpTypes.AdminProductVariant[],
                    basePath,
                    variantOptionGroups,
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
    ): Observable<Products.Model.Product> {
        return from(
            this.sdk.store.product.list({ handle, limit: 1, fields: this.storeRetrieveFields }).catch((error) => {
                throw error;
            }),
        ).pipe(
            switchMap((response) => {
                const product = response.products[0];
                if (!product) {
                    throw new NotFoundException(`Product with handle "${handle}" not found`);
                }
                if (!product.variants?.length) {
                    throw new NotFoundException(`No variants found for product with handle "${handle}"`);
                }

                const allVariants = product.variants as HttpTypes.AdminProductVariant[];

                // Find variant by SKU slug
                let variant = allVariants[0]!;
                if (variantSlug) {
                    const matchingVariant = allVariants.find(
                        (v: HttpTypes.AdminProductVariant) =>
                            v.sku && slugify(v.sku, { lower: true, strict: true }) === variantSlug,
                    );
                    if (matchingVariant) {
                        variant = matchingVariant;
                    } else {
                        const availableSlugs = allVariants.map((v: HttpTypes.AdminProductVariant) =>
                            v.sku ? slugify(v.sku, { lower: true, strict: true }) : v.id,
                        );
                        this.logger.warn(
                            `Variant slug "${variantSlug}" not found for product "${handle}" (${product.id}). Available: [${availableSlugs.join(', ')}]. Falling back to first variant.`,
                        );
                    }
                }

                return this.getVariant(product.id, variant.id, allVariants, basePath, variantOptionGroups);
            }),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    private getVariant(
        productId: string,
        variantId: string,
        allVariants?: HttpTypes.AdminProductVariant[],
        basePath?: string,
        variantOptionGroups?: { medusaTitle: string; label: string }[],
    ): Observable<Products.Model.Product> {
        return from(
            this.sdk.admin.product
                .retrieveVariant(productId, variantId, { fields: this.productDetailFields })
                .catch((error) => {
                    throw error;
                }),
        ).pipe(
            map((response) => {
                if (!response.variant) {
                    throw new NotFoundException(`Variant ${variantId} not found for product ${productId}`);
                }
                return mapProduct(
                    response.variant,
                    this.defaultCurrency,
                    allVariants,
                    basePath || '',
                    variantOptionGroups,
                );
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
                    return mapRelatedProducts(response.data, this.defaultCurrency, params.basePath || '');
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }
}
