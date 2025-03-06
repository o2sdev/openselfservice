import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetFaqComponentQuery } from './faq.request';
import { FaqService } from './faq.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FaqController {
    constructor(protected readonly service: FaqService) {}

    @Get()
    getFaqComponent(@Headers() headers: AppHeaders, @Query() query: GetFaqComponentQuery) {
        return this.service.getFaqComponent(query, headers);
    }
}
