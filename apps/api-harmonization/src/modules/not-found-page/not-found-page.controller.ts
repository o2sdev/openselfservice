import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';

import { NotFoundPageService } from './not-found-page.service';

@Controller(URL)
export class NotFoundPageController {
    constructor(protected readonly service: NotFoundPageService) {}

    @Get()
    getNotFoundPage(@Headers() headers: Models.Headers.AppHeaders) {
        return this.service.getNotFoundPage(headers);
    }
}
