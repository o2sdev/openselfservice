import { Controller, Get, Headers, Param, Post, Query, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { PaginatedProducts } from '../products/products.model';

import { Asset, PaginatedAssets, PaginatedServices, Service } from './resources.model';
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
    @ApiCreatedResponse({ description: 'Resource purchase/activation triggered.' })
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
    @ApiOkResponse({ description: 'Returns services list.', type: PaginatedServices })
    getServiceList(@Query() query: GetServiceListQuery, @Headers() headers: AppHeaders): Observable<PaginatedServices> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getServiceList(query, authorization);
    }

    @Get('services/:id')
    @ApiOperation({ summary: 'Get service by id' })
    @ApiParam({ name: 'id', type: String, description: 'Service identifier.' })
    @ApiOkResponse({ description: 'Returns service details.', type: Service })
    getService(@Param() params: GetServiceParams, @Headers() headers: AppHeaders): Observable<Service> {
        return this.resourceService.getService(params, headers[H.Authorization]);
    }

    @Get('services/featured')
    @ApiOperation({ summary: 'List featured services' })
    @ApiOkResponse({ description: 'Returns featured services list.', type: PaginatedProducts })
    getFeaturedServiceList(): ReturnType<ResourceService['getFeaturedServiceList']> {
        return this.resourceService.getFeaturedServiceList();
    }

    @Get('assets')
    @ApiOperation({ summary: 'List assets' })
    @ApiQuery({ name: 'query', required: false, type: String, description: 'Asset list filters and pagination query.' })
    @ApiOkResponse({ description: 'Returns assets list.', type: PaginatedAssets })
    getAssetList(@Query() query: GetAssetListQuery, @Headers() headers: AppHeaders): Observable<PaginatedAssets> {
        const authorization = headers?.authorization;
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.resourceService.getAssetList(query, authorization);
    }

    @Get('assets/:id')
    @ApiOperation({ summary: 'Get asset by id' })
    @ApiParam({ name: 'id', type: String, description: 'Asset identifier.' })
    @ApiOkResponse({ description: 'Returns asset details.', type: Asset })
    getAsset(@Param() params: GetAssetParams, @Headers() headers: AppHeaders): Observable<Asset> {
        return this.resourceService.getAsset(params, headers[H.Authorization]);
    }

    @Get('assets/:id/compatible-services')
    @ApiOperation({ summary: 'List compatible services for asset' })
    @ApiParam({ name: 'id', type: String, description: 'Asset identifier used to resolve compatible services.' })
    @ApiOkResponse({ description: 'Returns compatible services.', type: PaginatedProducts })
    getCompatibleServiceList(@Param() params: GetAssetParams): ReturnType<ResourceService['getCompatibleServiceList']> {
        return this.resourceService.getCompatibleServiceList(params);
    }
}
