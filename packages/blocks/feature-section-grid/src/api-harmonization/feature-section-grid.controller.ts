import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetFeatureSectionGridBlockQuery } from './feature-section-grid.request';
import { FeatureSectionGridService } from './feature-section-grid.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FeatureSectionGridController {
    constructor(protected readonly service: FeatureSectionGridService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getFeatureSectionGridBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetFeatureSectionGridBlockQuery,
    ) {
        return this.service.getFeatureSectionGridBlock(query, headers);
    }
}
