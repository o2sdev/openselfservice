import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCtaSectionBlockQuery } from './cta-section.request';
import { CtaSectionService } from './cta-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CtaSectionController {
    constructor(protected readonly service: CtaSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCtaSectionBlock(@Headers() headers: AppHeaders, @Query() query: GetCtaSectionBlockQuery) {
        return this.service.getCtaSectionBlock(query, headers);
    }
}
