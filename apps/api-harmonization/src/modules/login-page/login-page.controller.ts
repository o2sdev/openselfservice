import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';

import { LoginPageService } from './login-page.service';

@Controller(URL)
export class LoginPageController {
    constructor(protected readonly service: LoginPageService) {}

    @Get()
    getLoginPage(@Headers() headers: Models.Headers.AppHeaders) {
        return this.service.getLoginPage(headers);
    }
}
