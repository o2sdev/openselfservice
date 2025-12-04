import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetHeroSectionBlockQuery } from './hero-section.request';
import { HeroSectionService } from './hero-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class HeroSectionController {
    constructor(protected readonly service: HeroSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getHeroSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetHeroSectionBlockQuery) {
        return this.service.getHeroSectionBlock(query, headers);
    }
}
