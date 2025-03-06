import { URL } from '.';
import { Controller, Get, Headers } from '@nestjs/common';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { LoginPageService } from './login-page.service';

@Controller(URL)
export class LoginPageController {
    constructor(protected readonly service: LoginPageService) {}

    @Get()
    getLoginPage(@Headers() headers: AppHeaders) {
        return this.service.getLoginPage(headers);
    }
}
