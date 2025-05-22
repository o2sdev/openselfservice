import Medusa from '@medusajs/js-sdk';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@o2s/utils.logger';
import { Observable, catchError, map } from 'rxjs';

import { Auth, Products, Resources } from '@o2s/framework/modules';

import { mapCompatibleServices, mapFeaturedServices } from '../products/products.mapper';
import { handleHttpError } from '../utils/handle-http-error';

import { mapAsset, mapAssets, mapService, mapServices } from './resources.mapper';
import {
    Asset,
    AssetsResponse,
    CompatibleServicesResponse,
    FeaturedServicesResponse,
    ServiceInstance,
    ServiceInstancesResponse,
} from './response.types';
import { Service as MedusaJsService } from '@/modules/medusajs';

@Injectable()
export class ResourcesService extends Resources.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly config: ConfigService,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || 'EUR';
    }

    purchaseOrActivateResource(_params: Resources.Request.GetResourceParams): Observable<void> {
        throw new Error('Method not implemented');
    }

    purchaseOrActivateService(_params: Resources.Request.GetServiceParams): Observable<void> {
        throw new Error('Method not implemented.');
    }

    getServiceList(
        query: Resources.Request.GetServiceListQuery,
        authorization: string,
    ): Observable<Resources.Model.Services> {
        const customerId = Auth.Utils.decodeAuthorizationToken(authorization)?.customer?.id;

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
                map(({ data }) => {
                    return mapServices(data, this.defaultCurrency);
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
                map(({ data }) => {
                    return mapService(data.serviceInstance, this.defaultCurrency);
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
        const customerId = Auth.Utils.decodeAuthorizationToken(authorization)?.customer?.id;

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
                map(({ data }) => {
                    return mapAssets(data);
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
                map(({ data }) => {
                    return mapAsset(data.asset);
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
