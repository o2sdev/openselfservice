import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetBentoGridBlockQuery } from './bento-grid.request';
import { BentoGridService } from './bento-grid.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class BentoGridController {
    constructor(protected readonly service: BentoGridService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getBentoGridBlock(@Headers() headers: AppHeaders, @Query() query: GetBentoGridBlockQuery) {
        return this.service.getBentoGridBlock(query, headers);
    }
}
