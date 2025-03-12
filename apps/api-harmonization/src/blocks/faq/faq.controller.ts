import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetFaqBlockQuery } from './faq.request';
import { FaqService } from './faq.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FaqController {
    constructor(protected readonly service: FaqService) {}

    @Get()
    getFaqBlock(@Headers() headers: AppHeaders, @Query() query: GetFaqBlockQuery) {
        return this.service.getFaqBlock(query, headers);
    }
}
