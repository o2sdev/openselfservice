import { Controller, Get, Headers, Param, Post, Query, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

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
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for resources, services, and assets. Base path: `/resources`. All methods delegate to {@link ResourceService}.
 */
@Controller('/resources')
@UseInterceptors(LoggerService)
@ApiTags('resources')
export class ResourceController {
    constructor(protected readonly resourceService: ResourceService) {}

    @Post(':id/purchase')
    @ApiOperation({ summary: 'Purchase or activate resource' })
    @ApiParam({ name: 'id', type: String, description: 'Resource identifier.' })
    @ApiResponse({ status: 201, description: 'Resource purchase/activation triggered.' })
    purchaseResource(
        @Param() params: GetResourceParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<ResourceService['purchaseOrActivateResource']> {
        return this.resourceService.purchaseOrActivateResource(params, headers[H.Authorization]);
    }

    @Get('services')
    @ApiOperation({ summary: 'List services' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Service list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns services list.' })
    getServiceList(@Query() query: GetServiceListQuery, @Headers() headers: AppHeaders): Observable<Services> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getServiceList(query, authorization);
    }

    @Get('services/:id')
    @ApiOperation({ summary: 'Get service by id' })
    @ApiParam({ name: 'id', type: String, description: 'Service identifier.' })
    @ApiResponse({ status: 200, description: 'Returns service details.' })
    getService(@Param() params: GetServiceParams, @Headers() headers: AppHeaders): Observable<Service> {
        return this.resourceService.getService(params, headers[H.Authorization]);
    }

    @Get('services/featured')
    @ApiOperation({ summary: 'List featured services' })
    @ApiResponse({ status: 200, description: 'Returns featured services list.' })
    getFeaturedServiceList(): Observable<Products.Model.Products> {
        return this.resourceService.getFeaturedServiceList();
    }

    @Get('assets')
    @ApiOperation({ summary: 'List assets' })
    @ApiQuery({ name: 'query', required: false, type: String, description: 'Asset list filters and pagination query.' })
    @ApiResponse({ status: 200, description: 'Returns assets list.' })
    getAssetList(@Query() query: GetAssetListQuery, @Headers() headers: AppHeaders): Observable<Assets> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getAssetList(query, authorization);
    }

    @Get('assets/:id')
    @ApiOperation({ summary: 'Get asset by id' })
    @ApiParam({ name: 'id', type: String, description: 'Asset identifier.' })
    @ApiResponse({ status: 200, description: 'Returns asset details.' })
    getAsset(@Param() params: GetAssetParams, @Headers() headers: AppHeaders): Observable<Asset> {
        return this.resourceService.getAsset(params, headers[H.Authorization]);
    }

    @Get('assets/:id/compatible-services')
    @ApiOperation({ summary: 'List compatible services for asset' })
    @ApiParam({ name: 'id', type: String, description: 'Asset identifier used to resolve compatible services.' })
    @ApiResponse({ status: 200, description: 'Returns compatible services.' })
    getCompatibleServiceList(@Param() params: GetAssetParams): Observable<Products.Model.Products> {
        return this.resourceService.getCompatibleServiceList(params);
    }
}
