import { Controller, Get, Headers, Param, Post, Query, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { Products } from '@o2s/framework/modules';

import { Asset, Assets, Service, Services } from './resources.model';
import {
    GetAssetListQuery,
    GetAssetParams,
    GetResourceParams,
    GetServiceListQuery,
    GetServiceParams,
} from './resources.request';
import { ResourceService } from './resources.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/resources')
@UseInterceptors(LoggerService)
export class ResourceController {
    constructor(protected readonly resourceService: ResourceService) {}

    @Post(':id/purchase')
    purchaseResource(@Param() params: GetResourceParams) {
        return this.resourceService.purchaseOrActivateResource(params);
    }

    @Get('services')
    getServiceList(@Query() query: GetServiceListQuery, @Headers() headers: AppHeaders): Observable<Services> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getServiceList(query, authorization);
    }

    @Get('services/:id')
    getService(@Param() params: GetServiceParams): Observable<Service> {
        return this.resourceService.getService(params);
    }

    @Get('services/featured')
    getFeaturedServiceList(): Observable<Products.Model.Products> {
        return this.resourceService.getFeaturedServiceList();
    }

    @Get('assets')
    getAssetList(@Query() query: GetAssetListQuery, @Headers() headers: AppHeaders): Observable<Assets> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getAssetList(query, authorization);
    }

    @Get('assets/:id')
    getAsset(@Param() params: GetAssetParams): Observable<Asset> {
        return this.resourceService.getAsset(params);
    }

    @Get('assets/:id/compatible-services')
    getCompatibleServiceList(@Param() params: GetAssetParams): Observable<Products.Model.Products> {
        return this.resourceService.getCompatibleServiceList(params);
    }
}
