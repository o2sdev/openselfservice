import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetInitQuery, GetPageQuery } from './page.request';
import { PageService } from './page.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PageController {
    constructor(protected readonly service: PageService) {}

    @Get('/init')
    getInit(@Query() query: GetInitQuery, @Headers() headers: AppHeaders) {
        return this.service.getInit(query, headers);
    }

    @Get()
    getPage(@Query() query: GetPageQuery, @Headers() headers: AppHeaders) {
        return this.service.getPage(query, headers);
    }
}
