import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CreateNewPasswordPageService } from './create-new-password-page.service';

@Controller(URL)
export class CreateNewPasswordPageController {
    constructor(protected readonly service: CreateNewPasswordPageService) {}

    @Get()
    getCreateNewPasswordPage(@Headers() headers: AppHeaders) {
        return this.service.getCreateNewPasswordPage(headers);
    }
}
