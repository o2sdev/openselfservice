import Medusa from '@medusajs/js-sdk';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, forkJoin, map, switchMap } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Products, Resources } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';
import { mapCompatibleServices, mapFeaturedServices } from '../products/products.mapper';

import { mapAsset, mapAssets, mapService, mapServices } from './resources.mapper';
import {
    Asset,
    AssetsResponse,
    CompatibleServicesResponse,
    FeaturedServicesResponse,
    ServiceInstance,
    ServiceInstancesResponse,
} from './response.types';

@Injectable()
export class ResourcesService extends Resources.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
        private readonly config: ConfigService,
        private readonly productService: Products.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || 'EUR';
    }

    purchaseOrActivateResource(_params: Resources.Request.GetResourceParams): Observable<void> {
        throw new Error('Method not implemented');
    }

    purchaseOrActivateService(_params: Resources.Request.GetServiceParams): Observable<void> {
        throw new Error('Method not implemented');
    }

    getServiceList(
        query: Resources.Request.GetServiceListQuery,
        authorization: string,
    ): Observable<Resources.Model.Services> {
        const customerId = this.authService.getCustomerId(authorization);

        if (!customerId) {
            this.logger.debug('Customer ID not found in authorization token');
            throw new UnauthorizedException('Unauthorized');
        }

        return this.httpClient
            .get<ServiceInstancesResponse>(`${this.medusaJsService.getBaseUrl()}/admin/service-instances`, {
                headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                params: {
                    customerId,
                    limit: query.limit,
                    offset: query.offset,
                },
            })
            .pipe(
                switchMap(({ data }) => {
                    const productRequests = data.serviceInstances.map((service) => {
                        if (!service.product_variant.product_id) {
                            throw new Error('Product ID not found');
                        }

                        return this.productService.getProduct({
                            id: service.product_variant.product_id,
                            variantId: service.product_variant.id,
                            locale: query.locale,
                        });
                    });

                    return forkJoin(productRequests).pipe(
                        map((products) => {
                            return mapServices(
                                {
                                    serviceInstances: data.serviceInstances,
                                    count: data.count,
                                    offset: data.offset,
                                    limit: data.limit,
                                },
                                products,
                                this.defaultCurrency,
                            );
                        }),
                    );
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getService(params: Resources.Request.GetServiceParams): Observable<Resources.Model.Service> {
        return this.httpClient
            .get<{ serviceInstance: ServiceInstance }>(
                `${this.medusaJsService.getBaseUrl()}/admin/service-instances/${params.id}`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                },
            )
            .pipe(
                switchMap(({ data }) => {
                    if (!data.serviceInstance.product_variant.product_id) {
                        throw new Error('Product ID not found');
                    }

                    return this.productService
                        .getProduct({
                            id: data.serviceInstance.product_variant.product_id,
                            variantId: data.serviceInstance.product_variant.id,
                            locale: params.locale,
                        })
                        .pipe(
                            map((product) => {
                                return mapService(data.serviceInstance, product, this.defaultCurrency);
                            }),
                        );
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getAssetList(
        query: Resources.Request.GetAssetListQuery,
        authorization: string,
    ): Observable<Resources.Model.Assets> {
        const customerId = this.authService.getCustomerId(authorization);

        if (!customerId) {
            this.logger.debug('Customer ID not found in authorization token');
            throw new UnauthorizedException('Unauthorized');
        }

        return this.httpClient
            .get<AssetsResponse>(`${this.medusaJsService.getBaseUrl()}/admin/assets`, {
                headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                params: {
                    customerId,
                    limit: query.limit,
                    offset: query.offset,
                },
            })
            .pipe(
                switchMap(({ data }) => {
                    const productRequests = data.assets.map((asset) => {
                        if (!asset.product_variant.product_id) {
                            throw new Error('Product ID not found');
                        }

                        return this.productService.getProduct({
                            id: asset.product_variant.product_id,
                            variantId: asset.product_variant.id,
                            locale: query.locale,
                        });
                    });

                    return forkJoin(productRequests).pipe(
                        map((products) => {
                            return mapAssets(data, products);
                        }),
                    );
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getAsset(params: Resources.Request.GetAssetParams): Observable<Resources.Model.Asset> {
        return this.httpClient
            .get<{ asset: Asset }>(`${this.medusaJsService.getBaseUrl()}/admin/assets/${params.id}`, {
                headers: this.medusaJsService.getMedusaAdminApiHeaders(),
            })
            .pipe(
                switchMap(({ data }) => {
                    if (!data.asset.product_variant.product_id) {
                        throw new Error('Product ID not found');
                    }

                    return this.productService
                        .getProduct({
                            id: data.asset.product_variant.product_id,
                            variantId: data.asset.product_variant.id,
                            locale: params.locale,
                        })
                        .pipe(
                            map((product) => {
                                return mapAsset(data.asset, product);
                            }),
                        );
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getCompatibleServiceList(params: Resources.Request.GetAssetParams): Observable<Products.Model.Products> {
        return this.httpClient
            .get<CompatibleServicesResponse>(
                `${this.medusaJsService.getBaseUrl()}/admin/assets/${params.id}/compatible-services`,
                {
                    headers: this.medusaJsService.getMedusaAdminApiHeaders(),
                },
            )
            .pipe(
                map(({ data }) => {
                    return mapCompatibleServices(data, this.defaultCurrency);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }

    getFeaturedServiceList(): Observable<Products.Model.Products> {
        return this.httpClient
            .get<FeaturedServicesResponse>(`${this.medusaJsService.getBaseUrl()}/admin/service-instances/featured`, {
                headers: this.medusaJsService.getMedusaAdminApiHeaders(),
            })
            .pipe(
                map(({ data }) => {
                    return mapFeaturedServices(data, this.defaultCurrency);
                }),
                catchError((error) => {
                    return handleHttpError(error);
                }),
            );
    }
}
