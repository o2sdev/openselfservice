import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@o2s/utils.logger';
import { Observable, catchError, map } from 'rxjs';

import { Products } from '@o2s/framework/modules';

import { handleHttpError } from '../utils/handle-http-error';

import { mapProduct, mapProducts, mapRelatedProducts } from './products.mapper';
import { RelatedProductsResponse } from './response.types';
import { Service as MedusaJsService } from '@/modules/medusajs';

@Injectable()
export class ProductsService extends Products.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

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
        return this.httpClient
            .get<HttpTypes.AdminProductListResponse>(`${this.medusaJsService.getBaseUrl()}/admin/products`, {
                headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                params: {
                    limit: query.limit,
                    offset: query.offset,
                },
            })
            .pipe(
                map((response) => {
                    return mapProducts(response.data, this.defaultCurrency);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getProduct(params: Products.Request.GetProductParams): Observable<Products.Model.Product> {
        return this.httpClient
            .get<HttpTypes.AdminProductVariantResponse>(
                `${this.medusaJsService.getBaseUrl()}/admin/products/${params.id}/variants/${params.variantId}`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                    params: {
                        fields: 'product.*',
                    },
                },
            )
            .pipe(
                map((response) => {
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
                `${this.medusaJsService.getBaseUrl()}/admin/products/${params.id}/variants/${params.variantId}/references`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                    params: {
                        referenceType: params.type,
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
