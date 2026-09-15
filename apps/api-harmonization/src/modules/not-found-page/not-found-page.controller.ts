import { URL } from '.';
import { Controller, Get, Headers, Query } from '@nestjs/common';

import { AppHeaders } from '@o2s/framework/headers';

import { NotFoundPageService } from './not-found-page.service';

@Controller(URL)
export class NotFoundPageController {
    constructor(protected readonly service: NotFoundPageService) {}

    @Get()
    getNotFoundPage(@Headers() headers: AppHeaders, @Query('preview') preview?: boolean) {
        return this.service.getNotFoundPage(headers, preview);
    }
}
