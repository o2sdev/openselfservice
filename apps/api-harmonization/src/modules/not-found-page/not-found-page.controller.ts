import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { NotFoundPageService } from './not-found-page.service';

@Controller(URL)
export class NotFoundPageController {
    constructor(protected readonly service: NotFoundPageService) {}

    @Get()
    getNotFoundPage(@Headers() headers: AppHeaders) {
        return this.service.getNotFoundPage(headers);
    }
}
