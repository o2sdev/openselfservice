import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetFaqBlockQuery } from './faq.request';
import { FaqService } from './faq.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FaqController {
    constructor(protected readonly service: FaqService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getFaqBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetFaqBlockQuery) {
        return this.service.getFaqBlock(query, headers);
    }
}
