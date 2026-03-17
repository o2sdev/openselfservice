import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetQuickLinksBlockQuery } from './quick-links.request';
import { QuickLinksService } from './quick-links.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class QuickLinksController {
    constructor(protected readonly service: QuickLinksService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getQuickLinksBlock(@Headers() headers: AppHeaders, @Query() query: GetQuickLinksBlockQuery) {
        return this.service.getQuickLinksBlock(query, headers);
    }
}
