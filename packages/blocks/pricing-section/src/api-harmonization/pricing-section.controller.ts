import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetPricingSectionBlockQuery } from './pricing-section.request';
import { PricingSectionService } from './pricing-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PricingSectionController {
    constructor(protected readonly service: PricingSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getPricingSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetPricingSectionBlockQuery) {
        return this.service.getPricingSectionBlock(query, headers);
    }
}
