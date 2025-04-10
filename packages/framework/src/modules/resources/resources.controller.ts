import { Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { Asset, Assets, Service, Services } from './resources.model';
import {
    GetAssetListQuery,
    GetAssetParams,
    GetResourceParams,
    GetServiceListQuery,
    GetServiceParams,
} from './resources.request';
import { ResourceService } from './resources.service';

@Controller('/resources')
@UseInterceptors(LoggerService)
export class ResourceController {
    constructor(protected readonly resourceService: ResourceService) {}

    @Post(':id/purchase')
    purchaseResource(@Param() params: GetResourceParams) {
        return this.resourceService.purchaseOrActivateResource(params);
    }

    @Get('services')
    getServiceList(@Query() query: GetServiceListQuery): Observable<Services> {
        return this.resourceService.getServiceList(query);
    }

    @Get('services/:id')
    getService(@Param() params: GetServiceParams): Observable<Service> {
        return this.resourceService.getService(params);
    }

    @Get('assets')
    getAssetList(@Query() query: GetAssetListQuery): Observable<Assets> {
        return this.resourceService.getAssetList(query);
    }

    @Get('assets/:id')
    getAsset(@Param() params: GetAssetParams): Observable<Asset> {
        return this.resourceService.getAsset(params);
    }
}
