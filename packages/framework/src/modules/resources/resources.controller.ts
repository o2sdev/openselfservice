import { Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { Resource, Resources } from './resources.model';
import { GetResourceListQuery, GetResourceParams } from './resources.request';
import { ResourceService } from './resources.service';

@Controller('/resources')
@UseInterceptors(LoggerService)
export class ResourceController {
    constructor(protected readonly resourceService: ResourceService) {}

    @Get()
    getResourceList(@Query() query: GetResourceListQuery): Observable<Resources> {
        return this.resourceService.getResourceList(query);
    }

    @Get(':id')
    getResource(@Param() params: GetResourceParams): Observable<Resource> {
        return this.resourceService.getResource(params);
    }

    @Post(':id/purchase')
    purchaseResource(@Param() params: GetResourceParams) {
        return this.resourceService.purchaseOrActivateResource(params);
    }
}
