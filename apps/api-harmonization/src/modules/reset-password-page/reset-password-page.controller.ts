import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { ResetPasswordPageService } from './reset-password-page.service';

@Controller(URL)
export class ResetPasswordPageController {
    constructor(protected readonly service: ResetPasswordPageService) {}

    @Get()
    getResetPasswordPage(@Headers() headers: AppHeaders) {
        return this.service.getResetPasswordPage(headers);
    }
}
