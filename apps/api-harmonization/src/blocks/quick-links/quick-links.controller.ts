import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

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
