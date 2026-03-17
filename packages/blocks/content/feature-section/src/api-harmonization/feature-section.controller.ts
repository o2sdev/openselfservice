import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetFeatureSectionBlockQuery } from './feature-section.request';
import { FeatureSectionService } from './feature-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FeatureSectionController {
    constructor(protected readonly service: FeatureSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getFeatureSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetFeatureSectionBlockQuery) {
        return this.service.getFeatureSectionBlock(query, headers);
    }
}
