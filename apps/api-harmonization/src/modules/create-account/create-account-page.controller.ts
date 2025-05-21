import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CreateAccountPageService } from './create-account-page.service';

@Controller(URL)
export class CreateAccountPageController {
    constructor(protected readonly service: CreateAccountPageService) {}

    @Get()
    getCreateAccountPage(@Headers() headers: AppHeaders) {
        return this.service.getCreateAccountPage(headers);
    }
}
